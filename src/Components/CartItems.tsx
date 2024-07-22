import { useEffect, useState } from "react";
import { Products } from "../constants/types";

import Confirmation from "./Confirmation";

const CartItems = ({ cartItem, handleRemoveCartItem, handleOnchangeCheck, isCheckedItems  }: { cartItem: Products, handleRemoveCartItem: (id: number) => void } ) => {

   const [ totalPrice, setTotalPrice ] = useState<number>(cartItem.priceCents);
   const [ itemQuantity, setItemQuantity ] = useState<number>(cartItem.quantity);
   const [ confirmation, setConfirmation ] = useState<boolean>(false);

   //remove item form cart json server
   const handleRemoveProduct = (id: number) => {
      handleRemoveCartItem(id);
   };

   //auto updating the local storage when dependecy change 
   useEffect(() => {
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
   },[itemQuantity]);

   //decrementing itemquantity from localstorage
   const handleIncrementQuantity = () => {
      const newQuantity = itemQuantity + 1;
      setItemQuantity(newQuantity);
      setTotalPrice(cartItem.priceCents * newQuantity);
   };

   const handleDecrementQuantity = () => {
      if (itemQuantity <= 1) {
         setConfirmation(true);
      } else {
         const newQuantity = itemQuantity - 1;
         setItemQuantity(newQuantity);
         setTotalPrice((prev) => prev - cartItem.priceCents);
      }
   };
   
   const handleConfirm = () => {
      handleRemoveProduct(cartItem.id);
      setConfirmation(false);
   }; 

   if (isCheckedItems === true) {
      console.log(cartItem.priceCents, cartItem.name, cartItem.quantity);
   } else {
      console.log("checked");
   }

   //set the confirmation to false to close
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
                     name={cartItem.name}
                     checked={isCheckedItems}
                     onChange={handleOnchangeCheck}
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
            <p className="pointer-events-none text-[0.90em] text-red-500 font-semibold">{`$${totalPrice}`}</p>
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