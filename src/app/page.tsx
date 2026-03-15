"use client";
import Footer from "@/components/Footer/Footer";
import { HomePage } from "@/components/HomePage/HomePage";
import {ProductPage} from "@/app/product_page/ui/ProductPage";

export default function Home() {
  return (
    <div>
      {/*<HomePage />*/}
        <ProductPage/>
      <Footer />
    </div>
  );
}
