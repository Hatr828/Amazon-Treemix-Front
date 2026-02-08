"use client"
import {Header} from "@/widgets/header";
import { ItemCard } from "@/modals/cart-modal/ItemCard";
import { CartItem } from "@/features/cart/model/types";

const item:CartItem = {
  id:'1',
  quantity:1,
  old_price: 1750,
  price: 1500,
  title: 'Notebook ASUS TUF Gaming F15 FX506LH-HN153 (90NR03U1-M08940) Fortress Gray + мышь Asus TUF M5',
  image: 'dummy_text'
}

export default function Home() {
  return (
    <div>
        <Header></Header>
      <ItemCard item={item}></ItemCard>
    </div>
  );
}
