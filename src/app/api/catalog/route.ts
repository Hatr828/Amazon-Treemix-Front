import type { ProductDto } from "@/infra/openapi/amzn.dto";
import { NextResponse } from "next/server";
import { errorResponse } from "../auth/authBackend";

const BASE_URL = process.env.NEXT_PUBLIC_AMZN_API_BASE!;

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);

    const query = searchParams.toString();

    const response = await fetch(`${BASE_URL}/api/products?${query}`);

    if (!response.ok) {
      throw new Error("Failed to fetch catalog products");
    }

    const data = (await response.json()) as ProductDto[];

    return NextResponse.json(data);
  } catch (error) {
    return errorResponse(error);
  }
}