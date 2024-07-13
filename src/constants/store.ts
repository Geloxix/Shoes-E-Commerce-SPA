import { create } from "zustand";

type CartStore = {
   cartQuantity: number;
   incrementCartQuantity: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
   cartQuantity: 0,
   incrementCartQuantity: () => {
      set((state) => (
         { cartQuantity: state.cartQuantity + 1}
      ));
   }
}));