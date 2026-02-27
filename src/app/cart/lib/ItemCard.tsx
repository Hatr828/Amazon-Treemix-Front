import { CartItem } from "@/app/cart/misc/types";
import Image from "next/image";
import "@/app/cart/css/cart_item.css";

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
        <Image
          src="/dummy_cart_item.png"
          alt="product image"
          width={120}
          height={120}
          style={{ marginRight: "40px" }}
        />
      </div>

      <div className="title_delete_container">
        <div className="title_addition_container">
          <h2 className="product_title">{item.title}</h2>

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
            <div className="additions_container">
              <button className="dropdown_btn">
                <Image src="/dropdown_arrow.svg" width={20} height={20} alt="delete" />
                <span className="additions">Additional services</span>
              </button>
              {/*<ul className='additions_list'>*/}

              {/*  <li>*/}
              {/*  <label className="checkbox_wrapper">*/}
              {/*    <input type="checkbox" className="checkbox_input" />*/}
              {/*    <div className="checkbox_icons">*/}
              {/*      <img*/}
              {/*        src="/cart_item_checkbox_unchecked.svg"*/}
              {/*        className="icon_unchecked"*/}
              {/*        alt="unchecked"*/}
              {/*      />*/}
              {/*      <img*/}
              {/*        src="/cart_item_checkbox_checked.svg"*/}
              {/*        className="icon_checked"*/}
              {/*        alt="checked"*/}
              {/*      />*/}
              {/*    </div>*/}
              {/*  </label>*/}
              {/*    Installing licensed Windows (Windows OS is not included in the price)*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <label className="checkbox_wrapper">*/}
              {/*      <input type="checkbox" className="checkbox_input" />*/}
              {/*      <div className="checkbox_icons">*/}
              {/*        <img*/}
              {/*          src="/cart_item_checkbox_unchecked.svg"*/}
              {/*          className="icon_unchecked"*/}
              {/*          alt="unchecked"*/}
              {/*        />*/}
              {/*        <img*/}
              {/*          src="/cart_item_checkbox_checked.svg"*/}
              {/*          className="icon_checked"*/}
              {/*          alt="checked"*/}
              {/*        />*/}
              {/*      </div>*/}
              {/*    </label>*/}
              {/*    Installing licensed Windows (Windows OS is not included in the price)*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </div>
            <div className="quantity_container">
              <button onClick={() => decrease(item)}>-</button>
              <span>{item.quantity}</span> {/*add reactivity*/}
              <button onClick={() => increase(item)}>+</button>
            </div>
          </div>
        </div>

        <div className="delete_price_container">
          <button className="delete_button">
            <Image src="/cart_delete_icon.svg" width={20} height={20} alt="delete" />
          </button>

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
        </div>
      </div>
    </div>
  );
}
