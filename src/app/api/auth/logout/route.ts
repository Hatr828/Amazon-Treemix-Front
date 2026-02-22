import { NextResponse } from "next/server";
import { clearAuthCookies } from "../authCookies";

export async function POST(): Promise<NextResponse> {
  const response = NextResponse.json({ ok: true });
  clearAuthCookies(response);
  return response;
}
