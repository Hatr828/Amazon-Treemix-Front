'use client'
import '@/app/cart/css/subtotal.css'

type Props = {
    selectedQuantity: number
    calcSubtotal: number
    onNavigate: () => void;
    disabled: boolean;
}

export default function Subtotal({ selectedQuantity, calcSubtotal, onNavigate, disabled }: Props) {
    return (
        <div className="proceed_to_checkout">
            <h2>Subtotal ({selectedQuantity} items): ${calcSubtotal}</h2>

            <div className="order_contains_a_gift_wrapper">
                <label
                    className="checkbox_wrapper"
                    style={{ paddingLeft: "20px", paddingRight: "5px" }}
                >
                    <input type="checkbox" className="checkbox_input" />
                    <div className="checkbox_icons">
                        <img src="/cart_item_checkbox_unchecked.svg" className="icon_unchecked" />
                        <img src="/cart_item_checkbox_checked.svg" className="icon_checked" />
                    </div>
                </label>

                <span className="order_contains_a_gift">
          This order contains a gift
        </span>
            </div>

            <button onClick={onNavigate} disabled={disabled}>
                <span>Proceed to checkout</span>
            </button>
        </div>

    )
}