import { getProductById } from "@/app/product_page/services/product.service";
import { ProductPage } from "@/app/product_page/ui/ProductPage";
import { ProductType } from "@/app/product_page/types/product_page_types";

// Типизируем params как Promise
export default async function Page({
                                       params
                                   }: {
    params: Promise<{ id: string }>
}) {
    // 1. Обязательно "разворачиваем" params
    const resolvedParams = await params;
    const id = resolvedParams.id;

    // 2. Добавляем await для получения данных
    const product: ProductType = await getProductById(id);

    // Хорошей практикой будет добавить проверку на существование продукта
    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return <ProductPage product={product} />;
}