import { useState } from "react";
import { Products } from "../constants/types";
import axios from "axios";

import Confirmation from "./Confirmation";


const CartItems = ({ cartItem  }: { cartItem: Products } ) => {
   const [ itemQuantity, setItemQuantity ] = useState<number>(cartItem.quantity);
   const [ confirmation, setConfirmation ] = useState<boolean>(false);

   const handleRemoveProduct = async(id: number) => {
      const API_URL = `/cartApi/cart/${id}`;
      try {
         const res = await axios.delete(API_URL);
         return res;
      } catch (e) {
         console.log("Error deleting cart", e);
         
      }
   };

   const handleIncrementQuantity = () => {
      const newQuantity = itemQuantity + 1;
      setItemQuantity(newQuantity);
   };

   const handleDecrementQuantity = () => {
      console.log("quantity decrement");
      
   };
   
   const handleConfirm = () => {
      console.log("confirm");
      setConfirmation(false);
   }; 

   const handleCloseConfirmation = () => {
      setConfirmation(false);
   };

   return (
      <div className="mx-[12rem] bg-white mb-2">
         <div className="flex items-center justify-between shadow-sm px-[5rem]">
            <div className="flex items-center justify-center gap-5">
               <label>
                  <input 
                     type="checkbox"
                     name="product" 
                     className="w-[30px] text-2xl" 
                  />
               </label>
               
               
               <img 
                  src={cartItem.img} alt={cartItem.name} 
                  className="w-[200px]"
               />
               <p className="w-[200px] text-[0.80em] font-poppins">{ cartItem.name }</p>
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
            <p className="pointer-events-none text-[0.90em] text-red-500 font-semibold">{`$${cartItem.priceCents}`}</p>
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


// if (itemQuantity <= 1) {
//    setConfirmation(true);
// } else {
//    const totalPriceCents = savedPrice ? JSON.parse(savedPrice) : cartItem.priceCents;
//    const newQuantity = itemQuantity - 1;
//    setItemQuantity(newQuantity);
//    setTotalPrice(totalPriceCents / newQuantity);
// }


// let productItem = JSON.parse(savedProduct!);
// decrementCartQuantity();

// if (cartQuantity === 1) {
//    localStorage.removeItem('cartQuantity');
// }

// productItem = productItem.filter((item: Products) => item.id !== id)

// let updatedProduct = JSON.stringify(productItem);

// localStorage.setItem("cartItem", updatedProduct);