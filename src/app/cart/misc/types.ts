export type CartItem = {
  id: string,
  quantity: number,
  old_price?: number,
  price: number,
  title: string,
  image: string,
  is_in_stock: boolean,
  rating: number,
  selected: boolean,
  additions?: CartItemAddition[],
}

export type CartItemAddition = {
  id: string,
  name: string,
  price: number,
  checked?: boolean,
}