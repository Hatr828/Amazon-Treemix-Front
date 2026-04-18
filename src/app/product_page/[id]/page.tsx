import { getProductById } from "@/app/product_page/services/product.service";
import { ProductPage } from "@/app/product_page/ui/ProductPage";
import { ProductType } from "@/app/product_page/types/product_page_types";

export default async function Page({
                                       params
                                   }: {
    params: Promise<{ id: string }>
}) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const product: ProductType = await getProductById(id);

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return <ProductPage product={product} />;
}