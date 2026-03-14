import "./CatalogProduct.css";

export function RatingStarsChoice({
  selectedRating,
  onSelect,
}: {
  selectedRating: number | null;
  onSelect: (value: number) => void;
}) {
  return (
    <div style={{ display: "flex", cursor: "pointer", gap: "0.25vw" }}>
      {[1, 2, 3, 4, 5].map((star) => {
        const active = selectedRating !== null && star <= selectedRating;
        return (
          <span key={star} onClick={() => onSelect(star)} style={{ color: active ? "#f5a623" : "#ccc", fontSize: "1.542vw" }}>
            ★
          </span>
        );
      })}
    </div>
  );
}