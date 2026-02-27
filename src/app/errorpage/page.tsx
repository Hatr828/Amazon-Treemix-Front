"use client";

import { ErrorPage } from "@/components/ErrorPage/ErrorPage";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/widgets/header";

export default function Error() {
  return (
    <div>
      <Header />
      <ErrorPage />
      <Footer />
    </div>
  );
}