"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import {CartItem, CartItemAddition} from "@/app/cart/misc/types";

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  toggleItem: (id: string) => void;
  selectAll: () => void;
  calcSubtotal: number;
  selectedQuantity: number;
  isAllSelected: boolean;
  cartCount: number;
  recentlyItems: CartItem[];
  toggleItemAddition: (itemId: string, additionId: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [recentlyItems] = useState<CartItem[]>([
    {
      id: "12",
      quantity: 1,
      old_price: 1750,
      price: 1500,
      title:
        "Notebook ASUS TUF Gaming F15 FX506LH-HN153 (90NR03U1-M08940) Fortress Gray + мышь Asus TUF M5",
      image: "dummy_text",
      is_in_stock: true,
      rating: 4,
      selected: false,
    },
    {
      id: "13",
      quantity: 2,
      old_price: 2000,
      price: 1800,
      title: "Laptop Example 2",
      image: "dummy_text_2",
      is_in_stock: true,
      rating: 5,
      selected: false,
    },
    {
      id: "14",
      quantity: 1,
      old_price: 1500,
      price: 1400,
      title: "Laptop Example 3",
      image: "dummy_text_3",
      is_in_stock: false,
      rating: 3,
      selected: false,
    },
    {
      id: "15",
      quantity: 1,
      old_price: 1700,
      price: 1600,
      title: "Laptop Example 4",
      image: "dummy_text_4",
      is_in_stock: true,
      rating: 4,
      selected: false,
    },
  ]);

  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      quantity: 1,
      old_price: 1750,
      price: 1500,
      title:
        "Notebook ASUS TUF Gaming F15 FX506LH-HN153 (90NR03U1-M08940) Fortress Gray + мышь Asus TUF M5",
      image: "dummy_text",
      is_in_stock: true,
      rating: 4,
      selected: false,
      additions: [
          {id: '1', name: 'Installing licensed Windows', price: 20},
          {id: '2', name: 'Antivirus ESET Internet Security (2 PCs) license for 1 year Basic', price: 20}
      ],
    },
    {
      id: "2",
      quantity: 2,
      old_price: 2000,
      price: 1800,
      title: "Laptop Example 2",
      image: "dummy_text_2",
      is_in_stock: true,
      rating: 5,
      selected: false,
    },
    {
      id: "3",
      quantity: 1,
      old_price: 1500,
      price: 1400,
      title: "Laptop Example 3",
      image: "dummy_text_3",
      is_in_stock: false,
      rating: 3,
      selected: false,
    },
    {
      id: "4",
      quantity: 1,
      old_price: 1700,
      price: 1600,
      title: "Laptop Example 4",
      image: "dummy_text_4",
      is_in_stock: true,
      rating: 4,
      selected: false,
    },
  ]);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)),
    );
  };

  const toggleItemAddition = (itemId: string, additionId: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== itemId) return item;

        return {
          ...item,
          additions: item.additions?.map((addition) =>
            addition.id === additionId ? { ...addition, checked: !addition.checked } : addition,
          ),
        };
      }),
    );
  };


  const toggleItemAddition = (itemId: string, additionId: string) => {
    setItems(prev =>
        prev.map(item => {
          if (item.id !== itemId) return item;

          return {
            ...item,
            additions: item.additions?.map(addition =>
                addition.id === additionId
                    ? { ...addition, checked: !addition.checked }
                    : addition
            )
          };
        })
    );
  };

  const selectAll = () => {
    setItems((prev) => {
      const allSelected = prev.every((item) => item.selected);

      return prev.map((item) => ({
        ...item,
        selected: !allSelected,
      }));
    });
  };

  const increaseQuantity = (id: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)));
  };

  const decreaseQuantity = (id: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i)),
    );
  };

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const calcSubtotal = items.reduce((total, item) => {
    if (!item.selected) return total;

    const additionsTotal =
        item.additions?.reduce((sum, addition) =>
                addition.checked ? sum + addition.price : sum
            , 0) || 0;

    return total + (item.price + additionsTotal) * item.quantity;
  }, 0);

  const calcSubtotal = items.reduce((total, item) => {
    if (!item.selected) return total;

    const additionsTotal =
      item.additions?.reduce(
        (sum, addition) => (addition.checked ? sum + addition.price : sum),
        0,
      ) || 0;

    return total + (item.price + additionsTotal) * item.quantity;
  }, 0);

  const selectedQuantity = items.filter((item) => item.selected).length;

  const isAllSelected = items.length > 0 && items.every((item) => item.selected);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        toggleItem,
        selectAll,
        calcSubtotal,
        selectedQuantity,
        isAllSelected,
        cartCount,
        recentlyItems,
        toggleItemAddition,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
