export type ProductType = {
  id: string;
  title: string;
  price: number;
  rating: number;
  ratings: number;
  reviews?: Reviews[];
  images: string[];
  videoid: string;
  platform: string;
  storename: string;
  description: string;
  IsInStock: boolean;
  about: string;
  fromTheManufacturer?: ManufacturerContent;
  videos?: {
    id: string,
    name: string
    author: string,
    video: string,
    date: string,
  }[];
  productQuestions?: ProductQuestion[];
  productSpecifications?: {
    id: string;
    name: string;
    description: string;
  }[];
  documents: {
    id: string,
    name: string,
    download_link: string,
    extension: string,
  }[],

};

export type ProductQuestion = {
    id: string;
    question: string;
    votes: number;
    totalAnswerCount: number;
    answers: Answer[];
};

export type Answer = {
    id: string;
    text: string;
    authorName: string;
    createdAt: string;
    isManufacturer?: boolean;
};

export type ManufacturerContent = {
    id: string;
    html: string;
};

export type Reviews = {
    id: string;
    rating: number;
    text: string;
    authorName: string;
    createdAt: string;
    images?: string[];
    videos?: string[];
    helpfulMarks: number;
}

// -------------------------------------------------------------

export type MoreToConsiderItem = {
    id: string;
    is_on_sale: boolean;
    favorite: boolean;
    image: string;
    title: string;
    rating: number;
    price: number;
    old_price?: number;
};