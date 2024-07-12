interface Rating {
   rate: number;
   stars: string;
};

export interface Products {
   id: number;
   name: string;
   img: string;
   priceCents: number;
   rating: Rating;
}; 