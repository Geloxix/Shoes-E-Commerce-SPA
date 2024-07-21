import { create } from "zustand";
import axios from "axios";

type CartStore = {
   cartQuantity: number;
   incrementCartQuantity: () => void;
   decrementCartQuantity: () => void;
};

const loadState = (): Partial<CartStore> => {
   const state = localStorage.getItem("cartQuantity");

   if (state) {
      return JSON.parse(state);
   }
   return { cartQuantity: 0 };
};

export const useCartStore = create<CartStore>((set) => ({
   cartQuantity: 0,

   ...loadState(),
   incrementCartQuantity: () => {
      set((state) => {
         const newState = { cartQuantity: state.cartQuantity + 1};

         localStorage.setItem('cartQuantity', JSON.stringify(newState));
         return newState;
      });
   },
   decrementCartQuantity: () => {
      set((state) => {
         const newState = { cartQuantity: state.cartQuantity - 1 };
         localStorage.setItem('cartQuantity', JSON.stringify(newState));
         return newState;
      })
   }
}));