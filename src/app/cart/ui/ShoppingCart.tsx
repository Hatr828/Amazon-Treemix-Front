'use client'
import Image from 'next/image'
import { ItemCard } from "@/app/cart/lib/ItemCard"

type Props = {
    items: any[]
    toggleItem: (id: string) => void
    increaseQuantity: (id: string) => void
    decreaseQuantity: (id: string) => void
    selectAll: () => void
}

export default function ShoppingCart({
                                         items,
                                         toggleItem,
                                         increaseQuantity,
                                         decreaseQuantity,
                                         selectAll
                                     }: Props) {

    const selectedQuantity = items.filter(item => item.selected).length
    const isAllSelected = items.every(item => item.selected)

    return (
        <div className="cart_subtotal_wrapper">
            <h1 className="cart_title1">Shopping Cart</h1>

            <div className="items_selector_wrapper">
        <span className="items_counter">
          {selectedQuantity === 0 ? "No items selected" : `${selectedQuantity} selected`}
        </span>

                <div className="select_all_items_wrapper" onClick={selectAll}>
                    <span className="select_all_items">Select all items</span>
                    <Image
                        src={isAllSelected ? "/selected_all_cart.svg" : "/check_mark.svg"}
                        alt="check mark"
                        width={26}
                        height={26}
                    />
                </div>
            </div>

            <div className="items_wrapper">
                {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        toggleItem={() => toggleItem(item.id)}
                        increase={() => increaseQuantity(item.id)}
                        decrease={() => decreaseQuantity(item.id)}
                    />
                ))}
            </div>
        </div>
    )
}