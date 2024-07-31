import { create } from "zustand";

type CartStore = {
   cartQuantity: number;
   totalItemSelected: number;
   incrementTotalItemSelected: () => void;
   decrementTotalItemSelected: () => void;
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
   totalItemSelected: 0,
   ...loadState(),
   incrementTotalItemSelected: () => {
      set((state) =>  ({ totalItemSelected: state.totalItemSelected + 1 }))
   },
   decrementTotalItemSelected: () => {
      set((state) => ({ totalItemSelected: state.totalItemSelected === 0 ? state.totalItemSelected = 0 : state.totalItemSelected -= 1 }))
   },
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