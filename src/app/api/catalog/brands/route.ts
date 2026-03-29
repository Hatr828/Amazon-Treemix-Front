import { NextResponse } from "next/server";
import { errorResponse } from "../../auth/authBackend";

const BASE_URL = process.env.NEXT_PUBLIC_AMZN_API_BASE!;

export async function GET(request: Request): Promise<NextResponse> {
  try {
    // Если нужно, можно передавать query параметры
    const { searchParams } = new URL(request.url);
    const query = searchParams.toString();

    // Берём бренды с бэкенда
    const response = await fetch(`${BASE_URL}/api/products/brands?${query}`);

    if (!response.ok) {
      throw new Error("Failed to fetch brands");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return errorResponse(error);
  }
}
