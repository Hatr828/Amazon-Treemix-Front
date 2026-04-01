import { useState } from "react";
import "./CatalogProduct.css";

export type SortOption =
  | "Price: Low to High"
  | "Price: High to Low"
  | "Avg. Customer Review"
  | "Newest Arrivals"
  | "Featured";

type SortByProps = {
  selectedSort: SortOption;
  onChange: (option: SortOption) => void;
};

export function SortBy({ selectedSort, onChange }: SortByProps) {
  const [open, setOpen] = useState(false);

  const options: SortOption[] = [
    "Price: Low to High",
    "Price: High to Low",
    "Avg. Customer Review",
    "Newest Arrivals",
    "Featured",
  ];

  const handleSelect = (option: SortOption) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="sort-container">
      <button className="sort-button" onClick={() => setOpen(!open)}>
        <span className="sort-label">Sort by:</span>
        <span className="sort-selected">{selectedSort}</span>
        <span className="sort-arrow">▾</span>
      </button>

      {open && (
        <div className="sort-menu">
          {options.map((option, index) => (
            <div
              key={index}
              className={`sort-item ${selectedSort === option ? "active" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}