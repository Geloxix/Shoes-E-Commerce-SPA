import { useState } from "react";
import { Products } from "../constants/types";

import Confirmation from "./Confirmation";
import axios from "axios";

const CartItems = ({ cartItem, handleRemoveCartItem, handleCheckboxChange  }: 
   { cartItem: Products, handleRemoveCartItem: (id: number) => void } ) => {

   const [ itemPrice, setItemPrice ] = useState<number>(cartItem.priceCents);
   const [ itemQuantity, setItemQuantity ] = useState<number>(cartItem.quantity);
   const [ confirmation, setConfirmation ] = useState<boolean>(false);

   //remove item form cart json server
   const handleRemoveProduct = (id: number) => {
      handleRemoveCartItem(id);
   };

   //decrementing itemquantity from localstorage
   const handleIncrementQuantity = async(id: number) => {
      setItemQuantity(prev => prev + 1);
      setItemPrice(prev => prev + cartItem.priceCents);

      try {
         await axios.patch(`/cartApi/cart/${id}`, {
            quantity: itemQuantity,
            priceCents: itemPrice,
         });
      } catch (err) {
         console.log("Filed to Updated", err);
      }
   };

   const handleDecrementQuantity = async(id: number) => {

      if (itemQuantity <= 1) {
         setConfirmation(true);
      } else {

         try { 
            setItemQuantity(prev => prev - 1);
            setItemPrice(prev => prev - cartItem.priceCents);

            await axios.patch(`/cartApi/cart/${id}`, {
               quantity: itemQuantity,
               priceCents: itemPrice,
            });
         
         } catch (err) {
            console.log("Filed to Decremented", err);
         }
      }
   };
   
   const handleConfirm = () => {
      handleRemoveProduct(cartItem.id);
      setConfirmation(false);
   }; 

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
                     checked={cartItem.isChecked}
                     onChange={handleCheckboxChange}
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
                  onClick={() => handleDecrementQuantity(cartItem.id)}
               >-</button>
               <p className="px-6 py-1 border-t-[1.5px] border-b-[1.5px] pointer-events-none">{ itemQuantity }</p>
               <button 
                  className="increment-decrement-quantity"
                  onClick={() => handleIncrementQuantity(cartItem.id)}
               >+</button>
            </div>
            <p className="pointer-events-none text-[0.90em] text-red-500 font-semibold">{`$${itemPrice}`}</p>
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