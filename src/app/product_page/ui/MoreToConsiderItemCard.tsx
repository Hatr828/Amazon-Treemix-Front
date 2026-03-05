import {MoreToConsiderItem} from "@/app/product_page/types/product_page_types"

export function MoreToConsiderItemCard({item} : {item: MoreToConsiderItem}) {
    return(<div>
        {item.is_on_sale && <div className="sale_tag">SALE</div>}
        <div className="favorite_wrapper">
            <img src={item.favorite ? "/product_item/fav_filled.svg" : "/product_item/fav_unfilled.svg"} alt=""/>
        </div>
        <div className="image_wrapper">
            <img src={item.image} alt=""/>
        </div>
        <h3>{item.title}</h3>

        {Array.from({ length: 5 }, (_, i) => i < Math.round(item.rating)).map((filled, i) => (
            <img
                key={i}
                src={filled ? '/filled_star.svg' : '/unfilled_star.svg'}
                alt={filled ? 'filled star' : 'empty star'}
                width={20}
                height={20}
            />
        ))}

        <div className="price_container">
            <span className="price">${item.price}</span>
            {item.old_price && <span className="old_price">${item.old_price}</span>}
        </div>

        <span>Ship to USA</span>

    </div>)
}