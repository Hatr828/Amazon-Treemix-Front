import { NextRequest, NextResponse } from "next/server";
import { errorResponse } from "../../auth/authBackend";

const BASE_URL = process.env.NEXT_PUBLIC_AMZN_API_BASE!;

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const ids = searchParams.get("ids");

    if (!ids) {
      return NextResponse.json({ products: [] });
    }

    const idsArray = ids.split(",");

    // ВАЖНО: ProductIds, а не ids
    const query = idsArray.map(id => `ProductIds=${id}`).join("&");

    const response = await fetch(
      `${BASE_URL}/api/home/last-viewed?${query}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch last viewed products");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return errorResponse(error);
  }
}