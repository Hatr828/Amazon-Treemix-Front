'use client'
import '@/app/cart/css/cart_item.css'
import '@/app/cart/css/cart.css'
import Image from 'next/image';
import { ItemCard } from "@/app/cart/lib/ItemCard";
import { RecentlyViewedItemCard } from "@/app/cart/lib/RecentlyViewedItemCard";
import { useCart } from "@/app/cart/misc/CartContext";


export function CartPage () {

  const {
    items,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    toggleItem,
    cartCount,
    selectAll,
    recentlyItems
  } = useCart();

  const selectedQuantity = items.filter(item => item.selected).length;
  const calcSubtotal = items.reduce(
    (total, item) => item.selected ? total + item.price * item.quantity : total,
    0
  );
  const isAllSelected = items.every(item => item.selected);


  return (
    <div className="cart_wrapper">
      <div className="mega_wrapper">
        <h1 className="cart_title1">Shopping Cart</h1>
        <div className="items_selector_wrapper">
          <span className="items_counter">No items selected</span>
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
      </div>

      <div className="super_mega_wrapper">
        <div className="cart_subtotal_wrapper">
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

        <div className="subtotal_recently_viewid_wrapper">
          <div className="proceed_to_checkout">
            <h2>Subtotal ({selectedQuantity} items): ${calcSubtotal}</h2>

            <div className="order_contains_a_gift_wrapper">
              <label
                className="checkbox_wrapper"
                style={{ paddingLeft: "20px", paddingRight: "5px" }}
              >
                <input type="checkbox" className="checkbox_input" />
                <div className="checkbox_icons">
                  <img
                    src="/cart_item_checkbox_unchecked.svg"
                    className="icon_unchecked"
                    alt="unchecked"
                    style={{ width: "18px", height: "18px" }}
                  />
                  <img
                    src="/cart_item_checkbox_checked.svg"
                    className="icon_checked"
                    alt="checked"
                    style={{ width: "18px", height: "18px" }}
                  />
                </div>
              </label>
              <span className="order_contains_a_gift">This order contains a gift</span>
            </div>

            <button>
              <span>Proceed to checkout</span>
            </button>
          </div>

          <div className="recently_viewed">
            <h2>Your recently viewed items</h2>
            <ul className="recently_viewed_list">
              {recentlyItems.map((item) => (
                <li key={item.id}>
                  <RecentlyViewedItemCard item={item} addToCart={addToCart} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="sign_in_footer">
        <span>See personalized recommendations</span>
        <button><span className='sign_in_footer_button_text'>Sign in</span></button>
        <div className="new_customer"><span>New Customer?</span><a href="">Start here.</a></div>
      </div>
    </div>
  );
}