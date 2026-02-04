import {useContext, createContext, useState, ReactNode} from 'react';
import {CartItem} from "@/features/cart/model/types";

type CartContextValue = {
  items: CartItem[],
  addItem: (item:CartItem) => void,
  removeItem: (id:string) => void,
  increaseQuantity: (id:string) => void,
  decreaseQuantity: (id:string) => void,
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({children}: {children:ReactNode}) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item:CartItem) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      if(exists) {
        return prev.map((i) =>
          i.id === item.id ? {...i, quantity: i.quantity + 1} : i
        )
      }

      return [...prev, {...item, quantity: 1}]
    })
  }

  const removeItem = (id:string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const increaseQuantity = (id:string) => {
    setItems((prev) => {
      return prev.map((i) => i.id === id ? {...i, quantity: i.quantity + 1} : i)
    })
  }

  const decreaseQuantity = (id:string) => {
    setItems((prev) => {
      return prev.map((i) => i.id === id ? {...i, quantity: i.quantity - 1} : i)
    })
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, decreaseQuantity, increaseQuantity }}>{children}</CartContext.Provider>
  );
}

export function useCartContext() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error('useCartContext must be used inside CartProvider');
  }
  return ctx;
}