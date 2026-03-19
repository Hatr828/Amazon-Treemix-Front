"use client";

import "./CatalogProduct.css";
import { RatingStars } from "./RatingStars";
import { ProductPrice } from "./ProductPrice";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    rating: number;
    image?: {
      url?: string;
    };
    price: {
      current: number;
      original: number;
    };
  };
  variant?: "catalog" | "slider";
}

export function ProductCard({
  product,
  variant = "catalog",
}: ProductCardProps) {
  const hasDiscount = product.price.current !== product.price.original;

  if (variant === "slider") {
    return (
      <div className="icon-list-product">
        <div className="icon-for-list-product-photo">
          <img
            src={product.image?.url ?? "/example1-product.png"}
            className="list-product-photo"
            alt={product.title}
          />
        </div>

        <div className="text-list-product">
          {product.title}
          <div className="list-cost-product">
            <span className="currency">$</span>
            {product.price.current}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="block-Product-categoryProd">
      <div className="div-for-sale-favourite">
        {hasDiscount && <div className="sale-icon">SALE</div>}
        <div></div>
        <div className="favourite-icon">
          <i className="bi bi-heart"></i>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <img
          src={product.image?.url ?? "/example1-product.png"}
          className="img-Product-categoryProd"
          alt={product.title}
        />
      </div>

      <div className="text-Product-categoryProd">{product.title}</div>

      <div className="rating-stars">
        <RatingStars rating={product.rating} />
      </div>

      <ProductPrice
        current={product.price.current}
        original={product.price.original}
      />

      <div className="ship-to-text">Ship to USA</div>
    </div>
  );
}