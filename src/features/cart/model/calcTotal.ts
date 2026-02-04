import { CartItem } from "@/features/cart/model/types";

export const calcTotal = (items:CartItem[]) => {
  return items.reduce((s, i) => s + i.price * i.quantity, 0);
}
