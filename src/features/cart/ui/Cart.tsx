import '../css/cart_item_modal.css'
import '../css/cart.css'
import Image from 'next/image';
import { CartItem } from "@/features/cart/model/types";
import { ItemCard } from "@/features/cart/lib/ItemCard";



const item:CartItem = {
  id:'1',
  quantity:1,
  old_price: 1750,
  price: 1500,
  title: 'Notebook ASUS TUF Gaming F15 FX506LH-HN153 (90NR03U1-M08940) Fortress Gray + мышь Asus TUF M5',
  image: 'dummy_text',
  is_in_stock: true,
}


export function CartMain () {
  return(
    <div>
      <div className='cart_wrapper'>
        <h1 className='cart_title1'>Shopping Cart</h1>
        <div className='items_selector_wrapper'>
          <span className='items_counter'>No items selected</span>
          <div className='select_all_items_wrapper'>
          <span className='select_all_items'>Select all items</span>
            <Image
              src='check_mark.svg'
              alt='check mark'
              width={26}
              height={26}
            />
          </div>
        </div>

        <div className='items_wrapper'>
          <ItemCard item={item}/>
          <ItemCard item={item}/>
          <ItemCard item={item}/>
          <ItemCard item={item}/>
        </div>

      </div>

      <div className='subtotal_recently_viewid_wrapper'>

        <div className='proceed_to_checkout'>
          <h2>Subtotal (0 items): $0</h2>

          <div className='order_contains_a_gift_wrapper'>
            <label className="checkbox_wrapper" style={{paddingLeft: '20px', paddingRight: '5px'}}>
              <input type="checkbox" className="checkbox_input" />
              <div className="checkbox_icons">
                <img
                  src="/cart_item_checkbox_unchecked.svg"
                  className="icon_unchecked"
                  alt="unchecked"
                  style={{width: '18px', height: '18px'}}
                />
                <img
                  src="/cart_item_checkbox_checked.svg"
                  className="icon_checked"
                  alt="checked"
                  style={{width: '18px', height: '18px'}}
                />
              </div>
            </label>
            <span className='order_contains_a_gift'>This order contains a gift</span>
          </div>

          <button>
            <span>
              Proceed to checkout
            </span>
          </button>
        </div>

      </div>

    </div>
  )
}