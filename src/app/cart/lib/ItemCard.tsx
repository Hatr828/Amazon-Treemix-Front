import { CartItem } from "@/app/cart/misc/types";
import Image from "next/image";
import "@/app/cart/css/cart_item.css";
import { useState } from "react";
import { useCart } from "@/app/cart/misc/CartContext";

export function ItemCard({
  item,
  toggleItem,
  decrease,
  increase,
}: {
  item: CartItem;
  toggleItem: () => void;
  decrease: (item: CartItem) => void;
  increase: (item: CartItem) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleItemAddition } = useCart();

  const [isOpen, setIsOpen] = useState(false);
  const {toggleItemAddition} = useCart()

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="item_cart_modal_wrapper">
      <label className="checkbox_wrapper">
        <input
          type="checkbox"
          className="checkbox_input"
          checked={item.selected || false}
          onChange={toggleItem}
        />
        <div className="checkbox_icons">
          <img src="/cart_item_checkbox_unchecked.svg" className="icon_unchecked" alt="unchecked" />
          <img src="/cart_item_checkbox_checked.svg" className="icon_checked" alt="checked" />
        </div>
      </label>

      {/*TODO: add img source from backend*/}
      <div className="image_wrapper">
        <Image src="/dummy_cart_item.png" alt="product image" width={120} height={120} />
      </div>

      <div className="card_content">
        <div className="title_delete_container">
          <h2 className="product_title">{item.title}</h2>

          <button className="delete_button">
            <Image src="/cart_delete_icon.svg" width={20} height={20} alt="delete" />
          </button>
        </div>

        <span className="is_in_stock_and_learn_more">
          {item.is_in_stock ? "In Stock" : "Out Of Stock"}
        </span>

        <div className="is_a_gift">
          <label className="checkbox_wrapper">
            <input type="checkbox" className="checkbox_input" />
            <div className="checkbox_icons">
              <img
                src="/cart_item_checkbox_unchecked.svg"
                className="icon_unchecked"
                alt="unchecked"
              />
              <img src="/cart_item_checkbox_checked.svg" className="icon_checked" alt="checked" />
            </div>
          </label>

          <span>
            This is a gift.{" "}
            <a href="" className="is_in_stock_and_learn_more" style={{ cursor: "pointer" }}>
              Learn more.
            </a>
          </span>
        </div>

        <div className="addition_quantity_container">
          {item.additions && item.additions.length > 0 && (
            <button className="dropdown_btn" onClick={toggleDropdown}>
              <Image src="/dropdown_arrow.svg" width={20} height={20} alt="arrow" />
              <span className="additions">Additional services</span>
            </button>
          )}

          <div className="quantity_container">
            <button onClick={() => decrease(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increase(item)}>+</button>
          </div>

          <div className="prices">
            <div className="discount">
              <span className="discount_dollar_sign">$</span>
              <span className="discount_price">{item.old_price}</span> {/*discount*/}
            </div>

            <span className="price">
              <span className="dollar_icon">$</span>
              {item.price}
            </span>
          </div>

        {isOpen && item.additions &&(
            <ul className="additions_list">
                {item.additions.map((addition, index) => (
                    <li key={`${item.id}-addition-${index}`}>
                        <label className="checkbox_wrapper">
                            <input
                                type="checkbox"
                                className="checkbox_input"
                                checked={addition.checked || false}
                                onChange={() => toggleItemAddition(item.id, addition.id)}
                            />
                            <div className="checkbox_icons">
                                <img
                                    src="/cart_item_checkbox_unchecked.svg"
                                    className="icon_unchecked"
                                    alt="unchecked"
                                />
                                <img
                                    src="/cart_item_checkbox_checked.svg"
                                    className="icon_checked"
                                    alt="checked"
                                />
                            </div>
                        </label>
                        {addition.name}
                        <span className='addition_price'>${addition.price}</span>
                    </li>
                ))}
            </ul>
        )}
        </div>

    </div>
  )
}
