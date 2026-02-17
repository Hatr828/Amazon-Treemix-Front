"use client";

import "./CatalogProduct.css"
import "../HomePage/HomePage.css"
import { useState } from "react";

// пример будущего массива идущего с БД
const products = [
  { img: "/example1-product.png", name: "Tablet Xiaomi Mi Pad 5 6/256Gb" },
  { img: "/example2-product.png", name: "Tablet Samsung Galaxy Tab S8" },
  { img: "/example3-product.png", name: "Tablet Apple iPad Air" },
  { img: "/example1-product.png", name: "Tablet Lenovo Tab P11" },
  { img: "/example2-product.png", name: "Tablet Huawei MatePad" },
  { img: "/example3-product.png", name: "Tablet Microsoft Surface" },
  { img: "/example3-product.png", name: "Tablet Microsoft Surface" },
  { img: "/example3-product.png", name: "Tablet Microsoft Surface" },
]; 

export function CatalogProduct() {

    // Логика карусели
    const [startIndex, setStartIndex] = useState(0);
    
    const visibleCount = 6;

    const nextSlide = () => {
        setStartIndex(prev => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setStartIndex(prev =>
        (prev - 1 + products.length) % products.length
        );
    };

    const visibleItems = [];

    for (let i = 0; i < visibleCount; i++) {
        visibleItems.push(
        products[(startIndex + i) % products.length]
        );
    }

    return(
        <div>
            <div className="div-categoryProd-block">
                <div className="left-part-categoryProd">
                    <hr className="hr-leftpart-Prod"></hr>
                    Department
                </div>
                {/* Правая часть*/}
                <div className="right-part-categoryProd">
                    Baby
                    <div className="right-part-description-categoryProd">
                        Shop art supplies including painting, drawing, crafting, scrapbooking, fabric and jewelry making
                    </div>
                    <div>
                        26 <span style={{ fontSize: "0.938vw" }}>Item selected</span>
                    </div>
                    {/* Списки товаров */}
                    <div className="div-for-blocks-Product">
                        {[...Array(20)].map((_, index) => (
                            <div key={index} className="block-Product-categoryProd">
                                <div className="div-for-sale-favourite">
                                    <div className="sale-icon">SALE</div>
                                    <div className="favourite-icon"><i className="bi bi-heart"></i></div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                    <img src="/example1-product.png" className="img-Product-categoryProd" />
                                </div>
                                <div className="text-Product-categoryProd">
                                    Splashin'kids Inflatable Tummy Time 
                                </div>
                                <div className="rating-stars">
                                    <RatingStars rating={4.35}/>
                                </div>
                                <div className="price-Product-categoryProd">
                                    <span className="currency-categoryProd">$</span>530
                                    <div className="sale-categoryProd">
                                        <span className="currency-categoryProdd">$</span>750
                                    </div>
                                </div>
                                <div className="ship-to-text">
                                    Ship to USA 
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Кнопочки стр */}
                    <div className="div-for-page-history">

                    </div>
                    <div className="div-for-help">
                        NEED HELP?
                        <div className="div-visit-contact">
                            Visit the help section <span className="div-or">or</span> contact us
                        </div>
                    </div>
                </div>
                {/* Низ */}
            </div>
            <div style={{display: "flex", width: "100%", justifyContent:"center", marginTop: "10vw"}}>
                <div className="div-list-categoryProd">
                    <div className="head-text-more-list">
                        Smart home products inspired by your shopping trends
                        <div className="text-more">More →</div>
                    </div>
                    <div className="list-product">
                        <i className="bi bi-chevron-left" onClick={prevSlide}></i>
                        {visibleItems.map((product, index) => (
                            <div className="icon-list-product" key={index}>
                                <div className="icon-for-list-product-photo">
                                    <img src={product.img} className="list-product-photo" />
                                </div>
                                <div className="text-list-product">
                                    {product.name}
                                    <div className="list-cost-product">
                                        <span className="currency">$</span>530
                                    </div>
                                </div>
                            </div>
                            ))}
                        <i className="bi bi-chevron-right" onClick={nextSlide}></i>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="div-recommendations">
                    See personalized recommendations
                    <button className="button-recommendations">Sign in</button>
                    <div className="div-customer-text">
                        New Customer?
                        <div className="div-start-here">
                            Start here.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RatingStars({
    rating,
    max = 5,
    size = "1.042vw",
}: {
    rating: number;
    max?: number;
    size?: string;
}) {
    return (
        <div style={{ display: "flex", gap: "0.208vw" }}>
            {Array.from({ length: max }).map((_, index) => {
                const fillPercent = Math.min(Math.max(rating - index, 0), 1) * 100;
                return (
                    <div key={index} style={{ position: "relative", width: size, height: size, }}>
                        {/* Пустая звезда */}
                        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#FFA41C" strokeWidth="1.5">
                            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
                        </svg>
                        {/* Закрашенная часть */}
                        <div style={{ position: "absolute", top: 0, left: 0, width: `${fillPercent}%`, overflow: "hidden", }}>
                            <svg viewBox="0 0 24 24" width={size} height={size} fill="#FFA41C">
                                <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
                            </svg>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}