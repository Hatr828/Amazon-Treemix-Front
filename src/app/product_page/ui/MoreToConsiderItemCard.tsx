import {MoreToConsiderItem} from "@/app/product_page/types/product_page_types"
import Image from "next/image";

export function MoreToConsiderItemCard({item} : {item: MoreToConsiderItem}) {
    return(
        <div className="product_card">

            {item.is_on_sale && <div className="sale_tag">SALE</div>}

            <div className="favorite_btn">
                <img
                    src={item.favorite ? "/product_page/fav_filled.svg" : "/product_page/fav_unfilled.svg"}
                    alt="favorite"
                />
            </div>

            <div className="product_image">
                <Image
                    src={item.image}
                    alt="product"
                    width={180}
                    height={180}
                />
            </div>

            <h4 className="product_title">{item.title}</h4>

            <div className="rating_row">
                {Array.from({ length: 5 }, (_, i) => i < Math.round(item.rating)).map((filled, i) => (
                    <img
                        key={i}
                        src={filled ? "/filled_star.svg" : "/unfilled_star.svg"}
                        width={16}
                        height={16}
                        alt="star"
                    />
                ))}
            </div>

            <div className="product_price_row">

                <span className="price">${item.price}</span>

                {item.old_price && (
                    <span className="old_price">${item.old_price}</span>
                )}

            </div>

            <span className="shipping">Ship to USA</span>

        </div>
    )
}