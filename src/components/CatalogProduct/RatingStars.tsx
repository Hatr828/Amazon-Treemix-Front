import "./CatalogProduct.css";

export function RatingStars({
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
            <svg
              viewBox="0 0 24 24"
              width={size}
              height={size}
              fill="none"
              stroke="#FFA41C"
              strokeWidth="1.5"
            >
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
            </svg>
            {/* Закрашенная часть */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${fillPercent}%`,
                overflow: "hidden",
              }}
            >
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
