import { NextResponse } from "next/server";
import { errorResponse } from "@/app/api/auth/authBackend";

const BASE_URL = process.env.NEXT_PUBLIC_AMZN_API_BASE!;

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = params;

    const response = await fetch(
      `${BASE_URL}/api/categories/${id}/subcategories`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch subcategories");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return errorResponse(error);
  }
}