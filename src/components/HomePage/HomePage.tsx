import "./HomePage.css"
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

export function HomePage() {

    const [startIndex, setStartIndex] = useState(0);

    const visibleCount = 5;

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

    return (
        <div className="main-div-homePage">
            <img src="/main-photo.png" className="main-photo-homePage"/>
            {/*  */}
            <div className="div-for-big-blocks">
                {[1, 2, 3].map((_, index) => (
                    <div className="div-big-block" key={index}>
                        <div className="head-text-more">
                            Name
                            <div className="text-more">More →</div>
                        </div>
                        <img src="/example1-product.png" className="photo-div-big-block"/>
                    </div>
                ))}
                <div className="div-for-special-big-block">
                    <div className="div-pre-sign-block">
                        Sign in for the best experience
                        <button className="button-pre-sign-block">Sign in securely</button>
                    </div>
                    <div className="div-pre-big-block">
                        We ship over 45 million
                            products around
                                the world
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="div-for-small-blocks-in-big">
                {[1, 2, 3, 4].map((_, index) => (
                    <div className="div-big-block" key={index}>
                        <div className="head-text-more">
                            Name
                            <div className="text-more">More →</div>
                        </div>
                        <div className="div-big-for-small-icon">
                            {[1, 2, 3, 4].map((_, index) => (
                                <div className="div-for-small-icon" key={index}>
                                    Product
                                    <img src="/example1-product.png" className="photo-div-for-small-blocks-in-big"/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/*  */}
            <div className="div-for-column-row">
                <div className="div-for-column-blocks-in-big">
                    <div className="head-text-more-column">
                        Popular
                        <div className="text-more">More →</div>
                    </div>
                    {[1, 2, 3].map((_, index) => (
                        <div className="div-column" key={index}>
                            <div className="icon-column">
                                <img src="/example1-product.png" className="photo-column-product"/>
                            </div>
                            <div className="div-cost-name-product">
                                <div className="div-name-product">
                                    Tablet Samsung Galaxy Tab A7 Lite 8,7'' LTE 3/32Gb Gray
                                </div>
                                <div className="div-cost-product">
                                    <sup>$</sup>530
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="div-for-row-blocks-in-big">
                    <div className="head-text-more-column">
                        Most popular categories of the week
                        <div className="text-more">More →</div>
                    </div>
                    <div className="div-for-rows">
                        {[1, 2, 3].map((_, index) => (
                            <div className="div-row" key={index}>
                                <img src="/example1-product.png" className="photo-row-product"/>
                                <div className="div-name-product-column">
                                    Product
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="div-for-list-product">
                <div className="head-text-more-list">
                    Home Decor Under $20
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
            {/*  */}
            <div className="div-banner">
                <div className="banner-text-button">
                    Sign in for the best experience
                    <button className="banner-button">Sign in securely</button>
                </div>
                <div className="banner-name">
                    Naming
                </div>
            </div>
            {/*  */}
            <div className="div-for-middle-blocks">
                {[1, 2, 3, 4].map((_, index) =>
                    index % 2 === 0 ? (
                    <ChevronBlock key={index} />
                    ) : (
                    <div className="middle-block" key={index}>
                        <div className="head-text-more-list">
                        Product
                        <div className="text-more">More →</div>
                        </div>

                        <img src="/example1-product.png" className="middle-block-photo" />
                    </div>
                    )
                )}
            </div>
            {/*  */}
            <div className="div-for-list-product-viewed">
                <div className="head-text-more-list">
                    Last viewed
                </div>
                <div className="list-product-product-viewed">
                    <i className="bi bi-chevron-left" onClick={prevSlide}></i>
                    {visibleItems.map((product, index) => (
                        <div className="icon-list-product-viewed" key={index}>
                            <img src={product.img} className="list-product-photo-viewed" />
                            <div className="name-product-viewed">
                                {product.name}
                            </div>
                        </div>
                    ))}
                    <i className="bi bi-chevron-right" onClick={nextSlide}></i>
                </div>
            </div>
            {/*  */}
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
            {/*  */}
        </div>
    );
}

const ChevronBlock = () => {
  const images = [
    "/example1-product.png",
    "/example2-product.png",
    "/example3-product.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex(prev =>
      (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div className="middle-block-chevron">
      <div className="head-text-middle-block">
        Product
      </div>

      <div className="div-with-chevron">
        <div className="block-for-chevron">
          <i className="bi bi-chevron-left left" onClick={prev}></i>
        </div>

        <img
          src={images[currentIndex]}
          className="middle-block-photo-chevron"
        />

        <div className="block-for-chevron">
          <i className="bi bi-chevron-right right" onClick={next}></i>
        </div>
      </div>

      <div className="div-name-product-middle-block">
        Product
        <div className="list-cost-product">
          <span className="currency">$</span>530
        </div>
      </div>
    </div>
  );
};