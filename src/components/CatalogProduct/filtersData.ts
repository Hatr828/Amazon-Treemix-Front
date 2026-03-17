export type FilterSection =
  | {
      title: string;
      type: "links";
      items: string[];
    }
  | {
      title: string;
      type: "checkbox";
      items: string[];
    }
  | {
      title: "Avg. Customer Review";
      type: "rating";
    }
  | {
      title: "Price";
      type: "price";
      min: number;
      max: number;
    };

export const filters: FilterSection[] = [
  {
    title: "Featured Brands",
    type: "checkbox",
    items: [],
  },
  {
    title: "Avg. Customer Review",
    type: "rating",
  },
  {
    title: "Price",
    type: "price",
    min: 0,
    max: 999,
  },
];