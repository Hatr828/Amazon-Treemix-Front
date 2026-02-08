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
      <h2 className='product_title'>{item.title}</h2>
      <button className='delete_button'>
        <Image
          src="/cart_delete_icon.svg"
          width={20}
          height={20}
          alt="delete"
        />
      </button>
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
      <button>-</button>
      <span>{item.quantity}</span> {/*add reactivity*/}
      <button>+</button>

      <span>$</span>
      <span>{item.price}</span> {/*discount*/}

      <span className='dollar_icon'>$</span>
      <span className='price'>1500</span>

    </div>
  )
}