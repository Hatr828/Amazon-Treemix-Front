"use client";

import React, { useState, useRef, useEffect } from "react";
import "@/widgets/header/css/header.css";
import "@/widgets/header/css/dropdown.css";
import { useRouter } from "next/navigation";

export const SearchDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const categories = [
    "All Departments",
    "Arts & Crafts",
    "Baby",
    "Beauty & Personal Care",
    "Computers",
    "Home & Kitchen",
    "Men's Fasion",
    "Smart Home",
    "Sports & Outdoors",
    "Tools & Home Improvement",
    "Women's Fasion",
  ];

  // Маршруты категорий
  const categoryRoutes: Record<string, string> = {
    "All Departments": "/catalog",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = (category: string) => {
    setIsOpen(false);

    const route = categoryRoutes[category];
    if (route) {
      router.push(route);
    }
  };

  return (
    <div
      className="dropdownWrapper"
      ref={dropdownRef}
      style={{ position: "relative", display: "flex", height: "100%" }}
    >
      <button
        type="button"
        className="searchFormButton"
        onClick={() => setIsOpen(!isOpen)}
      >
        All
      </button>

      {isOpen && (
        <div className="searchDropdownMenu">
          <div className="searchDropdownArrow" />

          <ul className="searchDropdownList">
            {categories.map((cat, i) => (
              <li
                key={i}
                className="searchDropdownItem"
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};