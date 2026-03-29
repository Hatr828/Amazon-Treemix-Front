"use client";

import React, { useState, useRef, useEffect } from "react";
import "@/widgets/header/css/header.css";
import "@/widgets/header/css/dropdown.css";
import { useRouter } from "next/navigation";

export const SearchDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch("/api/categories/root");

        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadCategories();
  }, []);

  const handleCategoryClick = (id: string) => {
    setIsOpen(false);
    router.push(`/catalog/${id}`);
  };

  return (
    <div
      className="dropdownWrapper"
      ref={dropdownRef}
      style={{ position: "relative", display: "flex", height: "100%" }}
    >
      <button type="button" className="searchFormButton" onClick={() => setIsOpen(!isOpen)}>
        All
      </button>

      {isOpen && (
        <div className="searchDropdownMenu">
          <div className="searchDropdownArrow" />
          <ul className="searchDropdownList">
            {categories.map((cat) => (
              <li
                key={cat.id}
                className="searchDropdownItem"
                onClick={() => handleCategoryClick(cat.id)}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
