"use client";

import "./CatalogProduct.css";
import "../HomePage/HomePage.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    max: 59999,
  },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .slice(0, 60);
}

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

  //query
  const router = useRouter();
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const applyFilters = () => {
    const params = new URLSearchParams();

    selectedDepartments.forEach((d) => params.append("department", slugify(d)));
    selectedBrands.forEach((b) => params.append("brand", slugify(b)));

    if (selectedRating) params.set("rating", selectedRating.toString());

    params.set("minPrice", minPrice.toString());
    params.set("maxPrice", maxPrice.toString());

    router.push(`?${params.toString()}`);
  };

  // Для вкладок
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(59999);

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
  const itemsPerPage = 20;
  const totalItems = 99;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

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
                  {section.type === "checkbox" &&
                    section.items.map((item, i) => (
                      <label key={i} className="text-check-category-name">
                        <input type="checkbox" className="chBox" checked={selectedBrands.includes(item)}
                          onChange={() => {setSelectedBrands((prev) => prev.includes(item) ? prev.filter((b) => b !== item) : [...prev, item]);}} />
                        {item}
                      </label>
                    ))}

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
          Baby
          <div className="right-part-description-categoryProd">
            Shop art supplies including painting, drawing, crafting, scrapbooking, fabric and
            jewelry making
          </div>
          <div className="div-item-sortBy">
            <div>
              26 <span style={{ fontSize: "0.938vw" }}>Item selected</span>
            </div>
            <SortBy />
          </div>
          {/* Списки товаров */}
          <div className="div-for-blocks-Product">
            {[...Array(totalItems)]
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((_, index) => (
                <div key={index} className="block-Product-categoryProd">
                  <div className="div-for-sale-favourite">
                    <div className="sale-icon">SALE</div>
                    <div className="favourite-icon">
                      <i className="bi bi-heart"></i>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <img src="/example1-product.png" className="img-Product-categoryProd" />
                  </div>
                  <div className="text-Product-categoryProd">
                    Splashin'kids Inflatable Tummy Time
                  </div>
                  <div className="rating-stars">
                    <RatingStars rating={4.35} />
                  </div>
                  <div className="price-Product-categoryProd">
                    <span className="currency-categoryProd">$</span>530
                    <div className="sale-categoryProd">
                      <span className="currency-categoryProdd">$</span>750
                    </div>
                  </div>
                  <div className="ship-to-text">Ship to USA</div>
                </div>
              ))}
          </div>
          {/* Кнопочки стр */}
          <div className="div-for-page-history">
            <button className="page-btn" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
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
            <button className="page-btn" disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}>
              <i className="bi bi-chevron-right"></i>
            </button>
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
      <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: "10vw" }}>
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
      </div>
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
          <div key={index} style={{ position: "relative", width: size, height: size }}>
            {/* Пустая звезда */}
            <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#FFA41C" strokeWidth="1.5">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
            </svg>
            {/* Закрашенная часть */}
            <div style={{ position: "absolute", top: 0, left: 0, width: `${fillPercent}%`, overflow: "hidden"}}>
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

function SortBy() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Featured");

  const options = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Avg. Customer Review",
    "Newest Arrivals",
  ];

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="sort-container">
      <button className="sort-button" onClick={() => setOpen(!open)}>
        <span className="sort-label">Sort by:</span>
        <span className="sort-selected">{selected}</span>
        <span className="sort-arrow">▾</span>
      </button>
      {open && (
        <div className="sort-menu">
          {options.map((option, index) => (
            <div key={index} className={`sort-item ${selected === option ? "active" : ""}`} onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function RatingStarsChoice({
  selectedRating,
  onSelect,
}: {
  selectedRating: number | null;
  onSelect: (value: number) => void;
}) {
  return (
    <div style={{ display: "flex", cursor: "pointer", gap: "0.25vw" }}>
      {[1, 2, 3, 4, 5].map((star) => {
        const active = selectedRating !== null && star <= selectedRating;
        return (
          <span key={star} onClick={() => onSelect(star)} style={{ color: active ? "#f5a623" : "#ccc", fontSize: "1.542vw" }}>
            ★
          </span>
        );
      })}
    </div>
  );
}
