import { useState } from "react";
import "./CatalogProduct.css";

export function SortBy() {
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