"use client";
import { CatalogProduct } from "@/components/CatalogProduct/CatalogProduct";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/widgets/header";

export default function CatalogPage() {
  return (
    <div>
      <Header />
      <CatalogProduct />
      <Footer />
    </div>
  );
}