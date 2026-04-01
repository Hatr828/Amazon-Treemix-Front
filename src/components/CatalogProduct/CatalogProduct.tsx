"use client";

import "./CatalogProduct.css";
import "../HomePage/HomePage.css";
import "../HomePage/mobHomePage.css";
import "./mobCatalog.css";
import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SortBy, SortOption } from "./SortBy";
import { HomeProductDto } from "@/infra/openapi/amzn.dto";
import { FilterSectionComponent } from "./FilterSection";
import { filters } from "./filtersData";
import { ProductCard } from "./ProductCard";

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

  // Сортировка
  const [selectedSort, setSelectedSort] = useState<SortOption>("Featured");

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
    const params = new URLSearchParams(searchParams.toString());

    const searchQuery = params.get("q");

    if (searchQuery) {
      params.set("Search", searchQuery);
    }

    // ❗ очищаем перед установкой
    params.delete("BrandIds");
    selectedBrands.forEach((b) => params.append("BrandIds", b));

    if (selectedRating) {
      params.set("MinRating", selectedRating.toString());
    } else {
      params.delete("MinRating");
    }

    if (!searchQuery) {
      if (selectedSubCategory) {
        params.set("CategoryId", selectedSubCategory);
      } else if (categoryId && !isAllDepartments) {
        params.set("CategoryId", categoryId);
      }
    } else {
      params.delete("CategoryId");
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

        const searchQuery = params.get("q");

        if (searchQuery) {
          params.set("Search", searchQuery);
        }

        if (!searchQuery && !params.get("CategoryId") && categoryId && !isAllDepartments) {
          params.set("CategoryId", categoryId);
        }

        const response = await fetch(`/api/catalog?${params.toString()}`);
        const data = await response.json();
        setProducts(data.items ?? []);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, [searchParams, categoryId, isAllDepartments]);

  const searchQuery = searchParams.get("q");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch("/api/categories/root");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadCategories();
  }, []);

  //запрос подкатегории
  useEffect(() => {
    const loadSubCategories = async () => {
      try {
        const searchQuery = searchParams.get("q");

        if (searchQuery) {
          setSubCategories([]);
          return;
        }

        if (isAllDepartments) {
          const rootRes = await fetch("/api/categories/root");
          if (!rootRes.ok) throw new Error("Failed to fetch root categories");

          const rootCategories = await rootRes.json();

          const subCategoryResponses = await Promise.all(
            rootCategories.map((category: any) =>
              fetch(`/api/categories?parentId=${category.id}`)
            )
          );
          for (const res of subCategoryResponses) {
            if (!res.ok) {
              throw new Error("Failed to fetch subcategories");
            }
          }
          const subCategoryArrays = await Promise.all(
            subCategoryResponses.map((res) => res.json())
          );

          const allSubCategories = subCategoryArrays.flat();

          setSubCategories(allSubCategories);
        } else if (categoryId) {
          const res = await fetch(`/api/categories?parentId=${categoryId}`);
          if (!res.ok) throw new Error("Failed to fetch subcategories");
          const data = await res.json();
          setSubCategories(data);
        } else {
          setSubCategories([]);
        }
      } catch (error) {
        console.error(error);
        setSubCategories([]);
      }
    };
    loadSubCategories();
  }, [categoryId, isAllDepartments]);

  const dynamicFilters = [
    {
      title: "Department",
      type: "links" as const,
      items: subCategories.map((sub) => ({
        id: sub.id,
        name: sub.name,
      })),
    },
    ...filters,
  ];

  //Search
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    setSelectedBrands(params.getAll("BrandIds"));

    const rating = params.get("MinRating");
    setSelectedRating(rating ? Number(rating) : null);

    const min = params.get("MinPrice");
    const max = params.get("MaxPrice");

    setMinPrice(min ? Number(min) : 0);
    setMaxPrice(max ? Number(max) : 999);

    const cat = params.get("CategoryId");
    setSelectedSubCategory(cat ?? null);

  }, [searchParams]);

  // Для сортировки
  const sortedProducts = useMemo(() => {
    const sorted = [...products];

    switch (selectedSort) {
      case "Price: Low to High":
        return sorted.sort((a, b) => a.price.current - b.price.current);

      case "Price: High to Low":
        return sorted.sort((a, b) => b.price.current - a.price.current);

      case "Avg. Customer Review":
        return sorted.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

      case "Newest Arrivals":
        return sorted.sort(
          (a, b) =>
            new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()
        );

      case "Featured":
      default:
        return sorted;
    }
  }, [products, selectedSort]);

  const filteredBrands = useMemo(() => {
    if (!searchQuery) return brands;

    const productBrandIds = new Set(products.map(p => p.brandId));

    return brands.filter(b => productBrandIds.has(b.id));
  }, [brands, products, searchQuery]);

  //вывод бренды
  useEffect(() => {
    const loadBrands = async () => {
      try {
        let url = "/api/catalog/brands";

        const params = new URLSearchParams();

        const searchQuery = searchParams.get("q");

        if (searchQuery) {
          params.set("Search", searchQuery);
        }

        if (categoryId && !isAllDepartments && !searchQuery) {
          params.set("categoryId", categoryId);
        }

        url += `?${params.toString()}`;

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

  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(6);
      }
      setStartIndex(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const resetFilters = () => {
    // сброс state
    setSelectedBrands([]);
    setSelectedDepartments([]);
    setSelectedSubCategory(null);
    setSelectedRating(null);
    setMinPrice(0);
    setMaxPrice(999);

    // сброс URL
    if (searchQuery) {
      router.push(`/search?q=${searchQuery}`);
    } else {
      router.push(window.location.pathname);
    }
  };
  
  return (
    <div>
      <div className="div-categoryProd-block">
        {/* Левая часть */}
        <div className="left-part-categoryProd">
          {dynamicFilters.map((section, index) => (
            <FilterSectionComponent key={index} section={section} index={index} openSections={openSections} toggleSection={toggleSection}
              selectedDepartments={selectedDepartments} setSelectedDepartments={setSelectedDepartments} selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands} selectedRating={selectedRating} setSelectedRating={setSelectedRating} minPrice={minPrice}
              setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} brands={filteredBrands} 
              selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}/>
          ))}
          <hr className="hr-leftpart-Prod" />
          <button className="price-btn" onClick={applyFilters}>
            GO
          </button>
        </div>
        {/* Правая часть*/}
        <div className="right-part-categoryProd">
          {searchQuery ? `Search results for "${searchQuery}"` : currentCategory ? currentCategory.name : "All Departments"}
          <div className="right-part-description-categoryProd">
            Shop art supplies including painting, drawing, crafting, scrapbooking, fabric and
            jewelry making
          </div>
          <div className="div-item-sortBy">
            <div>
              {products.length} <span className="text-item-mob">Item selected  <button className="button-reset" onClick={resetFilters}>Reset</button></span>
            </div>
            <SortBy selectedSort={selectedSort} onChange={setSelectedSort} />
          </div>
          {/* Списки товаров */}
          <div className="div-for-blocks-Product">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="catalog" />
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