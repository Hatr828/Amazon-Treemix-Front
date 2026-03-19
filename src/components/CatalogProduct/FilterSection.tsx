"use client";

import React from "react";
import "./CatalogProduct.css";
import { FilterSection } from "./filtersData";
import { RatingStarsChoice } from "./RatingStarsChoice";

interface Props {
  section: FilterSection;
  index: number;
  openSections: number[];
  toggleSection: (index: number) => void;

  // состояния фильтров
  selectedDepartments: string[];
  setSelectedDepartments: React.Dispatch<React.SetStateAction<string[]>>;

  selectedSubCategory: string | null;
  setSelectedSubCategory: React.Dispatch<React.SetStateAction<string | null>>;
  
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;

  selectedRating: number | null;
  setSelectedRating: React.Dispatch<React.SetStateAction<number | null>>;

  minPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;

  // список брендов с сервера
  brands?: { id: string; name: string }[];
}

export const FilterSectionComponent = ({
  section,
  index,
  openSections,
  toggleSection,
  selectedDepartments,
  setSelectedDepartments,
  selectedSubCategory,
  setSelectedSubCategory,
  selectedBrands,
  setSelectedBrands,
  selectedRating,
  setSelectedRating,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  brands = [],
}: Props) => {
  return (
    <div>
      <hr className="hr-leftpart-Prod" />
      <div className="div-category-name">
        {section.title}
        <i
          className={`bi ${
            openSections.includes(index) ? "bi-chevron-up" : "bi-chevron-down"
          } chevDowm`}
          onClick={() => toggleSection(index)}
        />
      </div>

      {openSections.includes(index) && (
        <>
          {/* LINKS */}
          {section.type === "links" &&
            section.items.map((item) => (
              <div
                key={item.id}
                className={`text-category-name ${
                  selectedSubCategory === item.id ? "active" : ""
                }`}
                onClick={() =>
                  setSelectedSubCategory((prev) => (prev === item.id ? null : item.id))
                }
              >
                {item.name}
              </div>
           ))}

          {/* CHECKBOX */}
          {section.type === "checkbox" && (
            <>
              {section.title === "Featured Brands"
                ? brands.map((brand) => (
                    <label key={brand.id} className="text-check-category-name">
                      <input
                        type="checkbox"
                        className="chBox"
                        checked={selectedBrands.includes(brand.id)}
                        onChange={() =>
                          setSelectedBrands((prev) =>
                            prev.includes(brand.id)
                              ? prev.filter((b) => b !== brand.id)
                              : [...prev, brand.id]
                          )
                        }
                      />
                      {brand.name}
                    </label>
                  ))
                : section.items.map((item, i) => (
                    <label key={i} className="text-check-category-name">
                      <input
                        type="checkbox"
                        className="chBox"
                        checked={selectedBrands.includes(item)}
                        onChange={() =>
                          setSelectedBrands((prev) =>
                            prev.includes(item)
                              ? prev.filter((b) => b !== item)
                              : [...prev, item]
                          )
                        }
                      />
                      {item}
                    </label>
                  ))}
            </>
          )}

          {/* RATING */}
          {section.type === "rating" && (
            <div className="text-check-category-name">
              <RatingStarsChoice
                selectedRating={selectedRating}
                onSelect={(value) =>
                  setSelectedRating(selectedRating === value ? null : value)
                }
              />
              & Up
            </div>
          )}

          {/* PRICE */}
          {section.type === "price" && (
            <div className="price-filter">
              <div className="price-inputs">
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <span style={{ fontSize: "1vw" }}>-</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
              <div className="slider">
                <div
                  className="slider-track"
                  style={{
                    left: `${(minPrice / section.max) * 100}%`,
                    right: `${100 - (maxPrice / section.max) * 100}%`,
                  }}
                />
                <input
                  type="range"
                  min={section.min}
                  max={section.max}
                  value={minPrice}
                  onChange={(e) =>
                    setMinPrice(Math.min(Number(e.target.value), maxPrice - 1))
                  }
                  className="thumb"
                />
                <input
                  type="range"
                  min={section.min}
                  max={section.max}
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(Math.max(Number(e.target.value), minPrice + 1))
                  }
                  className="thumb"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};