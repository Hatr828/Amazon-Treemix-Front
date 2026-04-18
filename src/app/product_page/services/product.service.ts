import {ProductType} from "@/app/product_page/types/product_page_types";

const BASE_URL = process.env.NEXT_PUBLIC_AMZN_API_BASE!;

export async function getProductById(id: string): Promise<ProductType> {
    const res = await fetch(`${BASE_URL}/api/products/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    return res.json();
}