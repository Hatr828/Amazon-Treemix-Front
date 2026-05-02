import { CartItem } from "@/app/cart/misc/types";
import Image from "next/image";
import "@/app/cart/css/recently_viewed.css";

export function RecentlyViewedItemCard({
  item,
  addToCart,
}: {
  item: CartItem;
  addToCart: (item: CartItem) => void;
}) {
  const ratingArray: number[] = Array.from({ length: 5 }, (_, i) => (item.rating >= i + 1 ? 1 : 0));

  return (
    <div className="item_wrapper">
      <div className="recently_viewed_image_wrapper" style={{ width: "100px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Image
          src={item.image}
          alt="recently viewed item image"
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="title_rating_wrapper">
        <h3>{item.title}</h3>
        <div className="price_add_to_cart">
          <div className="price">
            <span>$</span>
            <span>{item.price}</span>
          </div>
          <button className="add_to_cart" onClick={() => addToCart(item)}>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
