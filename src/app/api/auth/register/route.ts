import type { AuthResponseDto, RegisterRequestDto } from "@/infra/openapi/amzn.dto";
import { NextResponse } from "next/server";
import { errorResponse, postToBackend } from "../authBackend";
import { setAuthCookies } from "../authCookies";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const payload = (await request.json()) as RegisterRequestDto;
    const dto = await postToBackend<RegisterRequestDto, AuthResponseDto>(
      "/api/auth/register",
      payload,
    );
    const response = NextResponse.json({ user: dto.user ?? null });
    setAuthCookies(response, dto);
    return response;
  } catch (error) {
    return errorResponse(error);
  }
}
