import { getEnv, getEnvNumber } from "@/infra/config/env";
import { NextResponse } from "next/server";

const BASE_URL = getEnv("NEXT_PUBLIC_AMZN_API_BASE").trim();
const TIMEOUT_MS = getEnvNumber("NEXT_PUBLIC_AMZN_API_TIMEOUT_MS");

class BackendError extends Error {
  readonly status: number;
  readonly payload?: unknown;

  constructor(message: string, status: number, payload?: unknown) {
    super(message);
    this.name = "BackendError";
    this.status = status;
    this.payload = payload;
  }
}

function buildUrl(path: string): string {
  return new URL(path, BASE_URL).toString();
}

async function readResponseText(response: Response): Promise<string> {
  try {
    return await response.text();
  } catch {
    return "";
  }
}

function tryParseJson(text: string): unknown {
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export async function postToBackend<TRequest, TResponse>(
  path: string,
  payload: TRequest,
): Promise<TResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(buildUrl(path), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const text = await readResponseText(response);
    const parsed = tryParseJson(text);

    if (!response.ok) {
      throw new BackendError(
        `Backend request failed with status ${response.status}.`,
        response.status,
        parsed ?? text,
      );
    }

    if (parsed === null) {
      throw new BackendError("Backend response is not valid JSON.", 502, text);
    }

    return parsed as TResponse;
  } catch (error) {
    if (error instanceof BackendError) {
      throw error;
    }
    if (
      typeof DOMException !== "undefined" &&
      error instanceof DOMException &&
      error.name === "AbortError"
    ) {
      throw new BackendError("Backend request timed out.", 504);
    }
    throw new BackendError("Backend request failed.", 502);
  } finally {
    clearTimeout(timeoutId);
  }
}

export function errorResponse(error: unknown): NextResponse {
  if (error instanceof BackendError) {
    return NextResponse.json(
      {
        error: error.message,
        details: error.payload ?? null,
      },
      { status: error.status },
    );
  }

  return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
}
