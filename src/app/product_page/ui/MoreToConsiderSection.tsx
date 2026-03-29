import Image from "next/image";
import {MoreToConsiderItem} from "@/app/product_page/types/product_page_types";
import {MoreToConsiderItemCard} from "@/app/product_page/ui/MoreToConsiderItemCard";
import {useRef} from "react";

export default function MoreToConsiderSection({ MoreToConsiderItemArray } : { MoreToConsiderItemArray: MoreToConsiderItem[] }) {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="more_section">

            <h2 className="section_title">More to consider from our brands</h2>

            <div className="carousel_container">

                <button className="carousel_btn" onClick={() => scrollCarousel('left')}>
                    <img src="/product_page/to_the_left.svg" alt="left"/>
                </button>

                <div className="cards_row">
                    {MoreToConsiderItemArray.map((item, index) => (
                        <MoreToConsiderItemCard
                            item={item}
                            key={"MoreToConsiderItem_" + index}
                        />
                    ))}
                </div>

                <button className="carousel_btn" onClick={() => scrollCarousel('right')}>
                    <img src="/product_page/to_the_right.svg" alt="right"/>
                </button>

            </div>




        </div>
    );
}
