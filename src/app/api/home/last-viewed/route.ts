import { NextResponse } from "next/server";
import { errorResponse } from "../../auth/authBackend";

const BASE_URL = process.env.NEXT_PUBLIC_AMZN_API_BASE!;

export async function GET(): Promise<NextResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/home/last-viewed`);

    if (!response.ok) {
      throw new Error("Failed to fetch last viewed products");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return errorResponse(error);
  }
}