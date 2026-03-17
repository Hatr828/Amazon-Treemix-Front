"use client";

import "./CatalogProduct.css";
import "../HomePage/HomePage.css";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SortBy } from "./SortBy";
import { RatingStars } from "./RatingStars";
import { HomeProductDto } from "@/infra/openapi/amzn.dto";
import { FilterSectionComponent } from "./FilterSection";
import { filters } from "./filtersData";

const ALL_DEPARTMENTS_ID = "cad1fe32-d2cc-4487-8cbc-909c09c9b401";

export function CatalogProduct({ slug }: { slug: string[] }) {

  const categoryId = slug?.[slug.length - 1];

  //query
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [subCategories, setSubCategories] = useState<any[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [brands, setBrands] = useState<any[]>([])
  const searchParams = useSearchParams();

  const [totalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasPreviousPage] = useState(false);
  const [hasNextPage] = useState(false);

  const router = useRouter();
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Находим категорию по id
  const currentCategory = categories.find(
    (cat) => cat.id === categoryId
  );

  const isAllDepartments = categoryId === ALL_DEPARTMENTS_ID;

  const applyFilters = () => {
    const params = new URLSearchParams();

    selectedBrands.forEach((b) => params.append("BrandIds", b));

    if (selectedRating) params.set("MinRating", selectedRating.toString());

    if (selectedSubCategory) {
      params.set("SubCategory", selectedSubCategory);
    }

    if (categoryId && !isAllDepartments) {
      params.set("CategoryId", categoryId);
    }

    params.set("MinPrice", minPrice.toString());
    params.set("MaxPrice", maxPrice.toString());

    router.push(`?${params.toString()}`);
  };

  //вывод категории
  useEffect(() => {

    const loadProducts = async () => {
      try {
        const params = new URLSearchParams(searchParams.toString());

        if (categoryId && !isAllDepartments) {
          params.set("CategoryId", categoryId);
        }

        const response = await fetch(`/api/catalog?${params.toString()}`);
        const data = await response.json();

        setProducts(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, [searchParams, categoryId, isAllDepartments]);

  //запрос подкатегории
  useEffect(() => {
    if (!categoryId || isAllDepartments) return;

    const loadSubCategories = async () => {
      try {
        const res = await fetch(`/api/categories/${categoryId}/subcategories`);
        if (!res.ok) throw new Error("Failed to fetch subcategories");
        const data = await res.json();
        setSubCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadSubCategories();
  }, [categoryId, isAllDepartments]);

  const dynamicFilters = [
    {
      title: "Subcategories",
      type: "links" as const,
      items: subCategories.map((sub) => sub.name),
    },
    ...filters,
  ];

  //вывод бренды
  useEffect(() => {
    const loadBrands = async () => {
      try {
        let url = "/api/catalog/brands";
        if (categoryId && !isAllDepartments) {
          url += `?categoryId=${categoryId}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        setBrands(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadBrands();
  }, [searchParams, categoryId, isAllDepartments]);

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
  const [produc, setProduc] = useState<HomeProductDto[]>([]);
  
  useEffect(() => {
    fetch("/api/home")
      .then(res => res.json())
      .then(data => {
        setProduc(data.products ?? []);
      });
  }, []);

  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 6;

  const nextSlide = () => {
    if (produc.length === 0) return;
    setStartIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    if (produc.length === 0) return;
    setStartIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const visibleItems = products.length > 0
    ? Array.from({ length: Math.min(visibleCount, products.length) }, (_, i) =>
        products[(startIndex + i) % products.length]
      )
    : [];

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
  
  return (
    <div>
      <div className="div-categoryProd-block">
        {/* Левая часть */}
        <div className="left-part-categoryProd">
          {dynamicFilters.map((section, index) => (
            <FilterSectionComponent key={index} section={section} index={index} openSections={openSections} toggleSection={toggleSection}
              selectedDepartments={selectedDepartments} setSelectedDepartments={setSelectedDepartments} selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands} selectedRating={selectedRating} setSelectedRating={setSelectedRating} minPrice={minPrice}
              setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} brands={brands} 
              selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}/>
          ))}
          <hr className="hr-leftpart-Prod" />
          <button className="price-btn" onClick={applyFilters}>
            GO
          </button>
        </div>
        {/* Правая часть*/}
        <div className="right-part-categoryProd">
          {currentCategory ? currentCategory.name : "All Departments"}
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
      <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: "10vw" }}>
        <div className="div-list-categoryProd">
          <div className="head-text-more-list">
            Smart home products inspired by your shopping trends
            <div className="text-more">More →</div>
          </div>
          <div className="list-product">
            <i className="bi bi-chevron-left chevLeft" onClick={prevSlide}></i>
            {visibleItems.map((product) => (
              <div className="icon-list-product" key={product.id}>
                <div className="icon-for-list-product-photo">
                  <img src={product.image?.url ?? "/example1-product.png"} className="list-product-photo" />
                </div>
                <div className="text-list-product">
                  {product.title}
                  <div className="list-cost-product">
                    <span className="currency">$</span>{product.price.original}
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