"use client";

import "./CatalogProduct.css";
import "../HomePage/HomePage.css";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RatingStarsChoice } from "./RatingStarsChoice";
import { SortBy } from "./SortBy";
import { RatingStars } from "./RatingStars";

// Категории
type FilterSection =
  | {
      title: string;
      type: "links";
      items: string[];
    }
  | {
      title: string;
      type: "checkbox";
      items: string[];
    }
  | {
      title: string;
      type: "rating";
    }
  | {
      title: string;
      type: "price";
      min: number;
      max: number;
    };

const filters: FilterSection[] = [
  {
    title: "Department",
    type: "links",
    items: [
      "Computers",
      "Computer Accessories & Peripherals",
      "Computer Components",
      "Computers & Tablets",
      "Data Storage",
      "Laptop Accessories",
    ],
  },
  {
    title: "Climate Pledge Friendly",
    type: "checkbox",
    items: ["Climate Pledge Friendly"],
  },
  {
    title: "Amazon Certified",
    type: "checkbox",
    items: ["Auto Replenishment", "Works with Alexa"],
  },
  {
    title: "Featured Brands",
    type: "checkbox",
    items: ["TAKAGI", "HP", "Seagate", "Roku", "Apple"],
  },
  {
    title: "Avg. Customer Review",
    type: "rating",
  },
  {
    title: "Price",
    type: "price",
    min: 0,
    max: 999,
  },
];

// function slugify(text: string) {
//   return text
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, "-")
//     .replace(/[^a-z0-9-]/g, "")
//     .replace(/-+/g, "-")
//     .slice(0, 60);
// }

export function CatalogProduct() {

  //query
  const [products, setProducts] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([])
  const searchParams = useSearchParams();

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  const router = useRouter();
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const applyFilters = () => {
    const params = new URLSearchParams();

    selectedBrands.forEach((b) => params.append("BrandIds", b));

    if (selectedRating) params.set("MinRating", selectedRating.toString());

    params.set("MinPrice", minPrice.toString());
    params.set("MaxPrice", maxPrice.toString());

    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(`/api/catalog?${searchParams.toString()}`);

        if (!response.ok) {
          throw new Error("Failed to load catalog");
        }

        const data = await response.json();

        setProducts(data.items);
        setCurrentPage(data.page);
        setTotalPages(data.totalPages);
        setHasPreviousPage(data.hasPreviousPage);
        setHasNextPage(data.hasNextPage);

      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, [searchParams]);

  useEffect(() => {
    const loadBrands = async () => {
      const res = await fetch("/api/catalog/brands")
      const data = await res.json()
      setBrands(data)
    }

    loadBrands()
  }, [])

  // Для вкладок
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999);

  // Открытие/закрытие вкладки
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  // Логика карусели
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 6;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const visibleItems = [];

  for (let i = 0; i < visibleCount; i++) {
    visibleItems.push(products[(startIndex + i) % products.length]);
  }

  //Пагинация
  const changePage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const visiblePages = 3;

  let startPage = Math.max(currentPage - 1, 1);
  let endPage = startPage + visiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }
  ///

  return (
    <div>
      <div className="div-categoryProd-block">
        {/* Левая часть */}
        <div className="left-part-categoryProd">
          {filters.map((section, index) => (
            <div key={index}>
              <hr className="hr-leftpart-Prod" />
              <div className="div-category-name">
                {section.title}
                <i className={`bi ${openSections.includes(index) ? "bi-chevron-up" : "bi-chevron-down"} chevDowm`}
                  onClick={() => toggleSection(index)}/>
              </div>
              {openSections.includes(index) && (
                <>
                  {/* LINKS */}
                  {section.type === "links" &&
                    section.items.map((item, i) => (
                      <div key={i} className="text-category-name" onClick={() => {setSelectedDepartments((prev) =>
                        prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]);}}>
                        {item}
                      </div>
                    ))}
                  {/* CHECKBOX */}
                  {section.type === "checkbox" && (
                    <>
                      {section.title === "Featured Brands" ? brands.map((brand) => (
                            <label key={brand.id} className="text-check-category-name">
                              <input type="checkbox" className="chBox"checked={selectedBrands.includes(brand.id)}
                                onChange={() => setSelectedBrands((prev) => prev.includes(brand.id)
                                  ? prev.filter((b) => b !== brand.id) : [...prev, brand.id]
                                )}/>
                              {brand.name}
                            </label>
                          ))
                        : section.items.map((item, i) => (
                            <label key={i} className="text-check-category-name">
                              <input type="checkbox" className="chBox" checked={selectedBrands.includes(item)} onChange={() =>
                                  setSelectedBrands((prev) => prev.includes(item)
                                    ? prev.filter((b) => b !== item) : [...prev, item]
                                  )}/>
                              {item}
                            </label>
                          ))}
                    </>
                  )}
                  {/* RATING */}
                  {section.type === "rating" && (
                    <div className="text-check-category-name">
                      <RatingStarsChoice selectedRating={selectedRating} onSelect={(value) =>
                          setSelectedRating(selectedRating === value ? null : value)}/>
                      & Up
                    </div>
                  )}
                  {/* PRICE */}
                  {section.type === "price" && (
                    <div className="price-filter">
                      <div className="price-inputs">
                        <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))}/>
                        <span style={{ fontSize: "1vw" }}>-</span>
                        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}/>
                      </div>
                      <div className="slider">
                        <div className="slider-track" style={{
                            left: `${(minPrice / section.max) * 100}%`,
                            right: `${100 - (maxPrice / section.max) * 100}%`,
                          }}/>
                        <input type="range" min={section.min} max={section.max} value={minPrice} onChange={(e) =>
                            setMinPrice(Math.min(Number(e.target.value), maxPrice - 1))
                          }
                          className="thumb"/>
                        <input type="range" min={section.min} max={section.max} value={maxPrice} onChange={(e) =>
                            setMaxPrice(Math.max(Number(e.target.value), minPrice + 1))
                          }
                          className="thumb"/>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <hr className="hr-leftpart-Prod" />
          <button className="price-btn" onClick={applyFilters}>GO</button>
        </div>
        {/* Правая часть*/}
        <div className="right-part-categoryProd">
          All Departments
          <div className="right-part-description-categoryProd">
            Shop art supplies including painting, drawing, crafting, scrapbooking, fabric and
            jewelry making
          </div>
          <div className="div-item-sortBy">
            <div>
              {products.length} <span style={{ fontSize: "0.938vw" }}>Item selected</span>
            </div>
            <SortBy />
          </div>
          {/* Списки товаров */}
          <div className="div-for-blocks-Product">
            {products.map((product) => (
                <div key={product.id} className="block-Product-categoryProd">
                  <div className="div-for-sale-favourite">
                    <div className="sale-icon">SALE</div>
                    <div className="favourite-icon">
                      <i className="bi bi-heart"></i>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <img src={product.image?.url ?? "/example1-product.png"} className="img-Product-categoryProd" />
                  </div>
                  <div className="text-Product-categoryProd">
                    {product.title}
                  </div>
                  <div className="rating-stars">
                    <RatingStars rating={product.rating} />
                  </div>
                  <div className="price-Product-categoryProd">
                    <span className="currency-categoryProd">$</span>{product.price.current}
                    <div className="sale-categoryProd">
                      <span className="currency-categoryProdd">$</span>{product.price.original}
                    </div>
                  </div>
                  <div className="ship-to-text">Ship to USA</div>
                </div>
              ))}
          </div>
          {/* Кнопочки стр */}
          {totalPages > 1 && ( <>
            <div className="div-for-page-history">
              <button className="page-btn" disabled={!hasPreviousPage} onClick={() => changePage(currentPage - 1)}>
                <i className="bi bi-chevron-left" />
              </button>
              {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(
                (page) => (
                  <button key={page} className={`page-btn ${currentPage === page ? "active" : ""}`} onClick={() => changePage(page)}>
                    {page}
                  </button>
                ),
              )}
              {endPage < totalPages && (
                <>
                  <button className="page-btn dots" disabled>
                    ...
                  </button>

                  <button className="page-btn" onClick={() => changePage(totalPages)}>
                    {totalPages}
                  </button>
                </>
              )}
              <button className="page-btn" disabled={!hasNextPage} onClick={() => changePage(currentPage + 1)}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
            <div className="div-for-help">
              NEED HELP?
              <div className="div-visit-contact">
                Visit the help section <span className="div-or">or</span> contact us
              </div>
            </div>
            </>
          )}
          </div>
        {/* Низ */}
      </div>
      {/* <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: "10vw" }}>
        <div className="div-list-categoryProd">
          <div className="head-text-more-list">
            Smart home products inspired by your shopping trends
            <div className="text-more">More →</div>
          </div>
          <div className="list-product">
            <i className="bi bi-chevron-left chevLeft" onClick={prevSlide}></i>
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
            <i className="bi bi-chevron-right chevRight" onClick={nextSlide}></i>
          </div>
        </div>
      </div> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="div-recommendations">
          See personalized recommendations
          <button className="button-recommendations">Sign in</button>
          <div className="div-customer-text">
            New Customer?
            <div className="div-start-here">Start here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}