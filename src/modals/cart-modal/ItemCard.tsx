import { CartItem } from "@/features/cart/model/types";
import Image from 'next/image';
import './cart_modal.css'


export function ItemCard({item}: {item: CartItem}) {
  return (
    <div className='cart_modal_wrapper'>
      {/*TODO: add img source*/}
      <Image
        src="/dummy_cart_item.png"
        alt="product image"
        width={120}
        height={120}
      />

      <div className='title_addition_container'>
        <h2 className='product_title'>{item.title}</h2>

        <div className='addition_quantity_container'>
          <div className='additions_container'>
            <button className='dropdown_btn'>
              <Image
                src="/dropdown_arrow.svg"
                width={20}
                height={20}
                alt="delete"
              />
              <span className='additions'>Additional services</span>
            </button>
          <ul className='additions_list'>
            <li><input type="checkbox" /> Installing licensed Windows (Windows OS is not included in the price)</li>
            <li>...</li>
          </ul>

          </div>
          <div className='quantity_container'>
            <button>-</button>
            <span>{item.quantity}</span> {/*add reactivity*/}
            <button>+</button>
          </div>

        </div>

      </div>

      <div className='delete_price_container'>
        <button className='delete_button'>
          <Image
            src="/cart_delete_icon.svg"
            width={20}
            height={20}
            alt="delete"
          />
        </button>

        <span>$</span>
        <span>{item.price}</span> {/*discount*/}

        <span className='dollar_icon'>$</span>
        <span className='price'>1500</span>
      </div>
    </div>
  )
}