import type { AuthResponseDto, RefreshRequestDto } from "@/infra/openapi/amzn.dto";
import { NextResponse } from "next/server";
import { errorResponse, postToBackend } from "../authBackend";
import { getRefreshToken, setAuthCookies } from "../authCookies";

export async function POST(): Promise<NextResponse> {
  try {
    const refreshToken = await getRefreshToken();
    if (!refreshToken) {
      return NextResponse.json({ error: "Missing refresh token." }, { status: 401 });
    }

    const payload: RefreshRequestDto = { refreshToken };
    const dto = await postToBackend<RefreshRequestDto, AuthResponseDto>(
      "/api/auth/refresh",
      payload,
    );
    const response = NextResponse.json({ user: dto.user ?? null });
    setAuthCookies(response, dto);
    return response;
  } catch (error) {
    return errorResponse(error);
  }
}
