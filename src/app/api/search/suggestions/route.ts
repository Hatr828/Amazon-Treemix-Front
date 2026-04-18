import { NextResponse } from "next/server";
import { errorResponse } from "../../auth/authBackend";

const BASE_URL = process.env.NEXT_PUBLIC_AMZN_API_BASE!;

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);

    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json([]);
    }

    const response = await fetch(
      `${BASE_URL}/api/search/suggestions?q=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch search suggestions");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return errorResponse(error);
  }
}