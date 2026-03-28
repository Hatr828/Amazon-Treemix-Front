import { CatalogProduct } from "@/components/CatalogProduct/CatalogProduct";

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return <CatalogProduct slug={slug} />;
}