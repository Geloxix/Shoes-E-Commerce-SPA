import axios from "axios";
import { useState } from "react";

import { useCartStore } from "../constants/store";
import { Products } from "../constants/types";
import RemoveSelectedItemConfirmation from "./RemoveSelectedItemConfirmation";

const CheckOut = ({ cartItems, setCartItems }: { cartItems: Products[], setCartItems: any }) => {
   const [ isOpenModal, setIsOpenModal ] = useState<boolean>(false);

   const { decrementCartQuantity, decrementTotalItemSelected } = useCartStore();
   const cartQuantity = useCartStore((state) => state.cartQuantity);
   const totalItemSelected = useCartStore((state) => state.totalItemSelected);
   
   // filter to include only the items where isChecked is true. then sum up the price of all checked items
   const totalPrice = cartItems.filter(item => item.isChecked).reduce((sum, currentItem) => sum + currentItem.priceCents ,0);

   const decrementQuantityItemSelected = () => {
      decrementCartQuantity();
      decrementTotalItemSelected();
   };
  
  
   const handleDeleteSelectedItems = async() => {
      try {
         // mapped the cartitem and find the item that is selected and delete it
         const selectedItems = cartItems.map(item => item.isChecked ? axios.delete(`/cartApi/cart/${item.id}`) : null );

         //wait for all delete request complete if not returns an error
         await Promise.all(selectedItems);

         cartItems.map(item => item.isChecked ? decrementQuantityItemSelected()  : null);
         setCartItems((prevItems: Products[]) => prevItems.filter(item => !item.isChecked));
         
      } catch (err) {
         console.log("Error", err);
      } 
   }; 


   const handleYesButton = () => {
      handleDeleteSelectedItems();
      setIsOpenModal(false);
   };

   const handleNoButton = () => {
      setIsOpenModal(false);
   };

   const handleOpenModal = () => {
      setIsOpenModal(true);
   };

   return (
      <div className="mx-[12rem] mt-[3rem]">
         <div className="h-[120px] flex items-end justify-between w-full py-[1rem] px-[5rem] bg-white">
            
            <div className="flex gap-5 items-center justify-center">
               <input 
                  type="checkbox" 
                  name="" 
                  id="" 
               />
               <p>{`Select All(${cartQuantity})`}</p>
               <button 
                  onClick={handleOpenModal}
                  className="hover:text-red-500 transition-all"
               >
                  delete
               </button>
            </div>
            
            <div className="flex gap-5 items-end">
               <div className="flex items-center gap-2">
                  <p>{`Total:(${totalItemSelected} items)`}</p>
                  <span className="text-red-500 font-roboto text-2xl">{`$${(totalPrice).toFixed(2)}`}</span>
               </div>
               <button className="px-[5rem] py-3 bg-red-500 text-white">
                  Check out
               </button> 
            </div> 

         </div>
         <RemoveSelectedItemConfirmation totalItemSelected={totalItemSelected} isOpenModal={isOpenModal} handleYesButton={handleYesButton} handleNoButton={handleNoButton} />
      </div>
      
   );
};

export default CheckOut;
