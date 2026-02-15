"use client"
import {Header} from "@/widgets/header";
import { ItemCard } from "@/features/cart/lib/ItemCard";
import { CartItem } from "@/features/cart/model/types";
import { CartMain } from "@/features/cart/ui/Cart";



export default function Home() {
  return (
    <div>
        <Header></Header>
        <CartMain/>
    </div>
  );
}
