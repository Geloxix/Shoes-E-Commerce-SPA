import { useState } from "react";
import { Products } from "../constants/types";

import { useCartStore } from "../constants/store";

import Confirmation from "./Confirmation";


const CartItems = ({ cartItem }: { cartItem: Products } ) => {
   const { decrementCartQuantity, cartQuantity } = useCartStore();
   const savedProduct = localStorage.getItem('cartItem'); //getting the array item saved to localStorage

   const [ itemQuantity, setItemQuantity ] = useState<number>(cartItem.quantity);
   const [ totalPrice, setTotalPrice ] = useState<number>(cartItem.priceCents);
   const [ confirmation, setConfirmation ] = useState<boolean>(false);

   const handleRemoveProduct = (id: number) => {
      let productItem = JSON.parse(savedProduct!);
      decrementCartQuantity();

      if (cartQuantity === 1) {
         localStorage.removeItem('cartQuantity');
      }

      productItem = productItem.filter((item: Products) => item.id !== id)

      let updatedProduct = JSON.stringify(productItem);

      localStorage.setItem("cartItem", updatedProduct);
   };

   const handleIncrementQuantity = () => {
      const newQuantity = itemQuantity + 1;
      setItemQuantity(newQuantity);
      setTotalPrice(newQuantity * cartItem.priceCents);
   };

   const handleDecrementQuantity = () => {
      if (itemQuantity <= 1) {
         setConfirmation(true);
      } else {
         const newQuantity = itemQuantity - 1;
         setItemQuantity(newQuantity);
         setTotalPrice(cartItem.priceCents / newQuantity);
      }
   };
   
   const handleConfirm = () => {
      handleRemoveProduct(cartItem.id);
      setConfirmation(false);
   }; 

   const handleCloseConfirmation = () => {
      setConfirmation(false);
   };

   return (
      <div className="mx-[12rem] bg-white mb-2">
         <div className="flex items-center justify-between shadow-sm px-[5rem]">
            <div className="flex items-center justify-center gap-3">
               <img 
                  src={cartItem.img} alt={cartItem.name} 
                  className="w-[200px]"
               />
               <p className="w-[200px] text-[0.80em] font-open-sans">{ cartItem.name }</p>
            </div>
            <div className="flex items-center justify-center">
               <button 
                  className="increment-decrement-quantity"
                  onClick={handleDecrementQuantity}
               >-</button>
               <p className="px-6 py-1 border-t-[1.5px] border-b-[1.5px] pointer-events-none">{ itemQuantity }</p>
               <button 
                  className="increment-decrement-quantity"
                  onClick={handleIncrementQuantity}
               >+</button>
            </div>
            <p className="pointer-events-none text-[0.90em] text-red-500 font-semibold">{`$${(totalPrice!).toFixed(2)}`}</p>
            <button 
               className="hover:text-red-500 transition-all text-[0.90em]"
               onClick={() => handleRemoveProduct(cartItem.id)}
            >Delete</button>
         </div>
         <Confirmation itemName={cartItem.name} confirmation={confirmation} handleConfirm={handleConfirm} handleCloseConfirmation={handleCloseConfirmation}  />
      </div>
   );
};

export default CartItems;
