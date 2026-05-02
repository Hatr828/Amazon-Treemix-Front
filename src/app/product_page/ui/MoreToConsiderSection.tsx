"use client";

import { useRef, useEffect, useState } from "react";
import { MoreToConsiderItem } from "@/app/product_page/types/product_page_types";
import { MoreToConsiderItemCard } from "@/app/product_page/ui/MoreToConsiderItemCard";

export default function MoreToConsiderSection({ categoryId }: { categoryId: string }) {
    const [items, setItems] = useState<MoreToConsiderItem[]>([]);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchSimilarProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/catalog?CategoryId=${categoryId}`);
                const data = await response.json();

                const formattedItems = (data.items || []).map((p: any) => ({
                    id: p.id,
                    title: p.title,
                    image: p.image?.url || "/example1-product.png",
                    price: p.price?.current || 0,
                    old_price: p.price?.original,
                    rating: p.rating || 0,
                    is_on_sale: !!p.price?.original && p.price.original > p.price.current,
                    favorite: false
                }));

                setItems(formattedItems);
            } catch (error) {
                console.error("Failed to load similar products:", error);
            } finally {
                setLoading(false);
            }
        };

        if (categoryId) {
            fetchSimilarProducts();
        }
    }, [categoryId]);

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (loading) return <div>Loading...</div>;
    if (items.length === 0) return null;

    return (
        <div className="more_section">
            <h2 className="section_title">More to consider from our brands</h2>

            <div className="carousel_container">
                <button className="carousel_btn" onClick={() => scrollCarousel('left')}>
                    <img src="/product_page/to_the_left.svg" alt="left"/>
                </button>

                <div className="cards_row" ref={scrollRef} style={{ display: 'flex', overflowX: 'hidden' }}>
                    {items.map((item, index) => (
                        <MoreToConsiderItemCard
                            item={item}
                            key={item.id + "_" + index}
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