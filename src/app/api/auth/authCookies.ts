import { getEnv, getEnvNumber } from "@/infra/config/env";
import type { AuthResponseDto } from "@/infra/openapi/amzn.dto";
import { cookies } from "next/headers";
import type { NextResponse } from "next/server";

const ACCESS_COOKIE_NAME = getEnv("AUTH_ACCESS_COOKIE_NAME");
const REFRESH_COOKIE_NAME = getEnv("AUTH_REFRESH_COOKIE_NAME");
const REFRESH_MAX_AGE_SECONDS = getEnvNumber("AUTH_REFRESH_MAX_AGE_SECONDS");
const DEFAULT_EXPIRES_IN = getEnvNumber("NEXT_PUBLIC_AUTH_DEFAULT_EXPIRES_IN");

const COOKIE_DOMAIN = process.env.AUTH_COOKIE_DOMAIN || undefined;
const COOKIE_SAMESITE = (process.env.AUTH_COOKIE_SAMESITE ?? "lax") as "lax" | "strict" | "none";
const COOKIE_SECURE = process.env.NODE_ENV === "production";

export const COOKIE_NAMES = {
  access: ACCESS_COOKIE_NAME,
  refresh: REFRESH_COOKIE_NAME,
} as const;

export function setAuthCookies(response: NextResponse, dto: AuthResponseDto): void {
  const accessToken = dto.accessToken?.trim();
  if (accessToken) {
    const expiresInSeconds = dto.expiresInSeconds ?? DEFAULT_EXPIRES_IN;
    response.cookies.set(ACCESS_COOKIE_NAME, accessToken, {
      httpOnly: true,
      secure: COOKIE_SECURE,
      sameSite: COOKIE_SAMESITE,
      path: "/",
      maxAge: expiresInSeconds,
      domain: COOKIE_DOMAIN,
    });
  }

  const refreshToken = dto.refreshToken?.trim();
  if (refreshToken) {
    response.cookies.set(REFRESH_COOKIE_NAME, refreshToken, {
      httpOnly: true,
      secure: COOKIE_SECURE,
      sameSite: COOKIE_SAMESITE,
      path: "/",
      maxAge: REFRESH_MAX_AGE_SECONDS,
      domain: COOKIE_DOMAIN,
    });
  }
}

export function clearAuthCookies(response: NextResponse): void {
  response.cookies.set(ACCESS_COOKIE_NAME, "", {
    httpOnly: true,
    secure: COOKIE_SECURE,
    sameSite: COOKIE_SAMESITE,
    path: "/",
    maxAge: 0,
    domain: COOKIE_DOMAIN,
  });

  response.cookies.set(REFRESH_COOKIE_NAME, "", {
    httpOnly: true,
    secure: COOKIE_SECURE,
    sameSite: COOKIE_SAMESITE,
    path: "/",
    maxAge: 0,
    domain: COOKIE_DOMAIN,
  });
}

export async function getRefreshToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(REFRESH_COOKIE_NAME)?.value ?? null;
}

export async function getAuthCookieFlags(): Promise<{ hasAccess: boolean; hasRefresh: boolean }> {
  const cookieStore = await cookies();
  return {
    hasAccess: Boolean(cookieStore.get(ACCESS_COOKIE_NAME)?.value),
    hasRefresh: Boolean(cookieStore.get(REFRESH_COOKIE_NAME)?.value),
  };
}
