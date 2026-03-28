"use client";

interface ProductPriceProps {
  current: number;
  original: number;
  className?: string;
}

export function ProductPrice({
  current,
  original,
  className = "",
}: ProductPriceProps) {
  const hasDiscount = current !== original;

  return (
    <div className={className || "price-Product-categoryProd"}>
      <span className="currency-categoryProd">$</span>
      {current}

      {hasDiscount && (
        <div className="sale-categoryProd">
          <span className="currency-categoryProdd">$</span>
          {original}
        </div>
      )}
    </div>
  );
}