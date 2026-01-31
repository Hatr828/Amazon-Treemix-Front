"use client";
import Footer from "@/components/Footer/Footer";
import { HomePage } from "@/components/HomePage/HomePage";
import { Header } from "@/widgets/header";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HomePage />
      <Footer />
    </div>
  );
}
