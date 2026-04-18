"use client";

import "./HomePage.css";
import "./mobHomePage.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HomeProductDto } from "@/infra/openapi/amzn.dto";

export function HomePage() {
  const [products, setProducts] = useState<HomeProductDto[]>([]);

  const [lastViewed, setLastViewed] = useState<HomeProductDto[]>([]);

  const [categories, setCategories] = useState<any[]>([]);

  const [popularProducts, setPopularProducts] = useState<HomeProductDto[]>([]);

  const [popularCategories, setPopularCategories] = useState<any[]>([]);

  const [productsUnderTwenty, setProductsUnderTwenty] = useState<HomeProductDto[]>([]);

  const [smallCategories, setSmallCategories] = useState<any[]>([]);

  const bigCategories = categories.slice(0, 3);
  
  const router = useRouter();

  //последние просмотренные
  useEffect(() => {
    fetch("/api/home/last-viewed")
      .then(res => res.json())
      .then(data => {
        setLastViewed(data.products ?? []);
      });
  }, []);

  //дом. стр
  useEffect(() => {
    fetch("/api/home")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products ?? [])
        setPopularProducts(data.popularProducts ?? [])
        setPopularCategories(data.popularCategories ?? [])
        setProductsUnderTwenty(data.productsUnderTwenty ?? []);

        const topCats = data.topCategories ?? [];
        setCategories(topCats);

        setSmallCategories(data.categoryBlocks ?? []);
      });
  }, []);

  const [startIndex, setStartIndex] = useState(0);

  const [visibleCount, setVisibleCount] = useState(5);

  const [lastViewedIndex, setLastViewedIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(5);
      }
      setStartIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (productsUnderTwenty.length === 0) return;
    setStartIndex((prev) => (prev + 1) % productsUnderTwenty.length);
  };

  const prevSlide = () => {
    if (productsUnderTwenty.length === 0) return;
    setStartIndex((prev) => (prev - 1 + productsUnderTwenty.length) % productsUnderTwenty.length);
  };

  const nextLastViewed = () => {
    if (lastViewed.length === 0) return;
    setLastViewedIndex((prev) => (prev + 1) % lastViewed.length);
  };

  const prevLastViewed = () => {
    if (lastViewed.length === 0) return;
    setLastViewedIndex((prev) => (prev - 1 + lastViewed.length) % lastViewed.length);
  };

  const visibleLastViewed =
    lastViewed.length > 0
      ? Array.from(
          { length: Math.min(visibleCount, lastViewed.length) },
          (_, i) => lastViewed[(lastViewedIndex + i) % lastViewed.length],
        )
      : [];

  const visibleItems =
    productsUnderTwenty.length > 0
      ? Array.from(
          { length: Math.min(visibleCount, productsUnderTwenty.length) },
          (_, i) => productsUnderTwenty[(startIndex + i) % productsUnderTwenty.length],
        )
      : [];

  return (
    <div className="main-div-homePage">
      <MainPhotoSlider />
      {/*  */}
      <div className="div-for-big-blocks">
        {bigCategories.map((cat) => (
          <div className="div-big-block" key={cat.id}>
            <div className="head-text-more">
              {cat.name}
              <div className="text-more" onClick={() => router.push(`/catalog/${cat.id}`)}>More →</div>
            </div>
            <img  src={cat.imageUrl ?? "/example1-product.png"} className="photo-div-big-block" />
          </div>
        ))}
        <div className="div-for-special-big-block">
          <div className="div-pre-sign-block">
            Sign in for the best experience
            <button className="button-pre-sign-block">Sign in securely</button>
          </div>
          <div className="div-pre-big-block">We ship over 45 million products around the world</div>
        </div>
      </div>
      {/*  */}
      <div className="div-for-small-blocks-in-big">
        {smallCategories.slice(0, 4).map((cat) => (
          <div className="div-big-block" key={cat.categoryId}>
            <div className="head-text-more">
              {cat.categoryName}
              <div className="text-more" onClick={() => router.push(`/catalog/${cat.categoryId}`)}>More →</div>
            </div>
            <div className="div-big-for-small-icon">
              {cat.products.slice(0, 4).map((product: any) => (
                <div className="div-for-small-icon" key={product.id}>
                  {product.title}
                  <img src={product.image?.url ?? "/example1-product.png"} className="photo-div-for-small-blocks-in-big" />
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
          {popularProducts.slice(0, 3).map((product) => (
            <div className="div-column" key={product.id}>
              <div className="icon-column">
                <img src={product.image?.url ?? "/example1-product.png"} className="photo-column-product" />
              </div>
              <div className="div-cost-name-product">
                <div className="div-name-product">
                  {product.title}
                </div>
                <div className="div-cost-product">
                  <sup>$</sup>{product.price.current}
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
            {popularCategories.slice(0, 3).map((cat) => (
              <div className="div-row" key={cat.id}>
                <img src={cat.imageUrl ?? "/example1-product.png"} onClick={() => router.push(`/catalog/${cat.id}`)} className="photo-row-product" />
                <div className="div-name-product-column">{cat.name}</div>
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
          <i className="bi bi-chevron-left chevLeft" onClick={prevSlide}></i>
          {visibleItems.map((product) => (
            <div className="icon-list-product" key={product.id}>
              <div className="icon-for-list-product-photo">
                <img
                  src={product.image?.url ?? "/example1-product.png"}
                  className="list-product-photo"
                />
              </div>
              <div className="text-list-product">
                {product.title}
                <div className="list-cost-product">
                  <span className="currency">$</span>
                  {product.price.original}
                </div>
              </div>
            </div>
          ))}
          <i className="bi bi-chevron-right chevRight" onClick={nextSlide}></i>
        </div>
      </div>
      {/*  */}
      <div className="div-banner">
        <div className="banner-text-button">
          Sign in for the best experience
          <button className="banner-button">Sign in securely</button>
        </div>
        <div className="banner-name">Naming</div>
      </div>
      {/*  */}
      {/* <div className="div-for-middle-blocks">
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
          ),
        )}
      </div> */}
      {/*  */}
      <div className="div-for-list-product-viewed">
        <div className="head-text-more-list">Last viewed</div>
        <div className="list-product-product-viewed">
          <i className="bi bi-chevron-left chevLeft" onClick={prevLastViewed}></i>
            {visibleLastViewed.map((product) => (
              <div className="icon-list-product-viewed" key={product.id}>
                <img
                  src={product.image?.url ?? "/example1-product.png"}
                  className="list-product-photo-viewed"
                />
                <div className="name-product-viewed">{product.title}</div>
              </div>
            ))}
          <i className="bi bi-chevron-right chevRight" onClick={nextLastViewed}></i>
        </div>
      </div>
      {/*  */}
      <div className="div-recommendations">
        See personalized recommendations
        <button className="button-recommendations">Sign in</button>
        <div className="div-customer-text">
          New Customer?
          <div className="div-start-here">Start here.</div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

const ChevronBlock = () => {
  const images = ["/example1-product.png", "/example2-product.png", "/example3-product.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="middle-block-chevron">
      <div className="head-text-middle-block">Product</div>

      <div className="div-with-chevron">
        <div className="block-for-chevron">
          <i className="bi bi-chevron-left left" onClick={prev}></i>
        </div>

        <img src={images[currentIndex]} className="middle-block-photo-chevron" />

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

const MainPhotoSlider = () => {
  const images = ["/main-photo.png", "/main-photo1.png"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-photo-homePage">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          className="main-photo-homePage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
};
