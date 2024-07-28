import { useState } from "react";
import { Products } from "../constants/types";

import Confirmation from "./Confirmation";
import axios from "axios";

interface CartItemProps {
   cartItem: Products;
   handleRemoveCartItem: (id: number) => void;
   setCartItems: any;
};

const CartItems = ({ cartItem, handleRemoveCartItem, setCartItems }: CartItemProps ) => {

   const [ itemPrice, setItemPrice ] = useState<number>(cartItem.priceCents);
   const [ itemQuantity, setItemQuantity ] = useState<number>(cartItem.quantity);
   const [ confirmation, setConfirmation ] = useState<boolean>(false);


   //remove item from cart json server
   const handleRemoveProduct = (id: number) => {
      handleRemoveCartItem(id);
   };

   //function that handle the checkbox
   const handleCheckboxChange = async (id: number) => {
      const updatedItem = { ...cartItem, isChecked: !cartItem.isChecked, priceCents: itemPrice };

      try {
         //requesting patch to updated to updated the updated item
         await axios.patch(`/cartApi/cart/${id}`, {
            isChecked: updatedItem.isChecked,
            priceCents: updatedItem.priceCents
         });

         setCartItems((prevCartItems: Products[]) => prevCartItems.map(item => item.id === id ? updatedItem : item));
      } catch (err) {
         console.log("Error: " + err);
      }
   };


   //incrementing item quantity
   const handleIncrementQuantity = async(id: number) => {
      
      if (itemQuantity >= 1) {
         try {
            await axios.patch(`/cartApi/cart/${id}`, {
               quantity: cartItem.quantity += 1,
               priceCents: cartItem.priceCents += cartItem.originalPriceCents,
            });

            setItemQuantity(prevQuan => prevQuan + 1);
            setItemPrice(prevPrice => prevPrice += cartItem.originalPriceCents);

            if (cartItem.isChecked)  {
               setCartItems((prevCartItems: Products[]) => prevCartItems.map(item => item.id === id ? { ...item, priceCents: cartItem.priceCents } : item));
            }
         
         } catch (err) {
            console.log("Filed to Updated", err);
         }   

         
      } else {
         setItemPrice(prevQuantity => prevQuantity);
         setItemPrice(prevPrice => prevPrice);
      }  
         
   };


   //function to decrement quantity of the product in cart
   const handleDecrementQuantity = async(id: number) => {

      if (itemQuantity > 1) {
         try { 
            await axios.patch(`/cartApi/cart/${id}`, {
               quantity: cartItem.quantity -= 1,
               priceCents: cartItem.priceCents -= cartItem.originalPriceCents,
            });
            
            setItemQuantity(prevQuan => prevQuan -= 1);
            setItemPrice(prevPrice => prevPrice -= cartItem.originalPriceCents);

            if (cartItem.isChecked)  {
               setCartItems((prevCartItems: Products[]) => prevCartItems.map(item => item.id === id ? { ...item, priceCents: cartItem.priceCents } : item));
            }

         } catch (err) {
            console.log("Filed to Decremented", err);
         }
         
      } else {
         setConfirmation(true);
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
                     onChange={() => handleCheckboxChange(cartItem.id)}
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
         <Confirmation itemName={cartItem.name} confirmation={confirmation} handleConfirm={handleConfirm} 
         handleCloseConfirmation={handleCloseConfirmation}  />
      </div>
   );
};

export default CartItems;