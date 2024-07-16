export interface Rating {
   rate: number;
   stars: string;
};

export interface Products {
   id: number;
   name: string;
   img: string;
   priceCents: number;
   quantity: number;
   rating: Rating;
}; 

export interface ConfirmationType {
   confirmation: boolean;
   handleConfirm: () => void;
   handleCloseConfirmation: () => void;
};
