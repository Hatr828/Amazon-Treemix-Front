import type { ProductDto } from "@/infra/openapi/amzn.dto";
import { NextResponse } from "next/server";
import { errorResponse } from "../auth/authBackend";

const BASE_URL = process.env.NEXT_PUBLIC_AMZN_API_BASE!;

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);

    const params = new URLSearchParams();

    const search = searchParams.get("q");
    if (search) {
      params.set("Search", search);
    }

    searchParams.forEach((value, key) => {
      if (key !== "q") {
        params.append(key, value);
      }
    });

    const response = await fetch(`${BASE_URL}/api/products?${params.toString()}`);

    if (!response.ok) {
      throw new Error("Failed to fetch catalog products");
    }

    const data = (await response.json()) as ProductDto[];

    return NextResponse.json(data);
  } catch (error) {
    return errorResponse(error);
  }
}