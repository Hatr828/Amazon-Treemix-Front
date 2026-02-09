import type { LoginRequestDto, RegisterRequestDto } from "@/infra/openapi/amzn.dto";
import type { AuthSession, AuthUser } from "./auth.model";

type AuthSessionResponse = {
  user?: AuthUser | null;
};

export class AuthRequestError extends Error {
  readonly status: number;
  readonly payload?: unknown;

  constructor(message: string, status: number, payload?: unknown) {
    super(message);
    this.name = "AuthRequestError";
    this.status = status;
    this.payload = payload;
  }
}

async function postLocalJson<TRequest, TResponse>(
  path: string,
  payload: TRequest,
): Promise<TResponse> {
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const text = await response.text();
    let payload: unknown = text;
    try {
      payload = text ? JSON.parse(text) : null;
    } catch {}
    throw new AuthRequestError("Auth request failed.", response.status, payload);
  }

  return (await response.json()) as TResponse;
}

function normalizeAuthResponse(dto: AuthSessionResponse): AuthSession {
  return {
    receivedAt: Date.now(),
    user: dto.user ?? undefined,
  };
}

export async function login(email: string, password: string): Promise<AuthSession> {
  const payload: LoginRequestDto = { email, password };

  const response = await postLocalJson<LoginRequestDto, AuthSessionResponse>(
    "/api/auth/login",
    payload,
  );
  return normalizeAuthResponse(response);
}

export async function register(params: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<AuthSession> {
  const payload: RegisterRequestDto = {
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
    password: params.password,
    passwordRepeat: params.password,
  };

  const response = await postLocalJson<RegisterRequestDto, AuthSessionResponse>(
    "/api/auth/register",
    payload,
  );
  return normalizeAuthResponse(response);
}
