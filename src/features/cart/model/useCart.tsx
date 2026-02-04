// апишка для корзины

import { useCartContext } from "@/features/cart/model/cartProvider";
import { calcTotal } from "@/features/cart/model/calcTotal";

export function useCart () {
  const {items, addItem, removeItem, decreaseQuantity, increaseQuantity} = useCartContext()

  const total = calcTotal(items)

  return {items, addItem, removeItem, total, increaseQuantity, decreaseQuantity}
}