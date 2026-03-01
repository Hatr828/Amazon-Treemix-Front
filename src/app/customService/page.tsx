"use client";

import CustomService from "@/components/CustomService/customService";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/widgets/header";

export default function ServicePage() {
  return (
    <div>
      <Header />
      <CustomService />
      <Footer />
    </div>
  );
}