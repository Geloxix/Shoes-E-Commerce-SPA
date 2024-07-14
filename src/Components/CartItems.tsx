import { useState } from "react";
import { Products } from "../constants/types";

import { useCartStore } from "../constants/store";

import Modal from "./Modal";


const CartItems = ({ cartItem }: { cartItem: Products } ) => {
   const { decrementCartQuantity, cartQuantity } = useCartStore();

   const [ productQuantity, setProductQuantity  ] = useState<number>(cartItem.quantity);
   const [ price, setPrice ] = useState<number>(cartItem.priceCents);
   const [ confirmation, setConfirmation ] = useState(false);

   const savedProduct = localStorage.getItem('cartItem'); //getting the array item saved to localStorage
   console.log(price);
   console.log(productQuantity);
   

   const handleProductIncrement = () => {
      setProductQuantity((prev) => prev + 1)
      setPrice((prev) => prev * productQuantity);
   };

   const handleProductDecrement = () => {
      if (productQuantity !== 1) {
         setProductQuantity((prev) => prev - 1);
         setPrice((prev) => prev / productQuantity);
      } else {
         setConfirmation(true);
      }
   };

   const handleConfirm = () => {
      console.log("wahaha");
   }; 

   const handleCloseConfirmation = () => {
      setConfirmation(false);
   };

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

   return (
      <div className="mx-[12rem] bg-white mb-2">
         <div className="flex items-center justify-between shadow-sm px-[5rem]">
            <div className="flex items-center justify-center">
               <img 
                  src={cartItem.img} alt={cartItem.name} 
                  className="w-[200px]"
               />
               <p className="w-[200px] text-[0.90em] mt-[-30px]">{ cartItem.name }</p>
            </div>
            <div className="flex items-center justify-center">
               <button 
                  className="increment-decrement-quantity"
                  onClick={handleProductDecrement}
               >-</button>
               <p className="px-6 py-1 border-t-[1.5px] border-b-[1.5px] pointer-events-none">{ productQuantity}</p>
               <button 
                  className="increment-decrement-quantity"
                  onClick={handleProductIncrement}
               >+</button>
            </div>
            <p className="pointer-events-none">{`$${(price).toFixed(2)}`}</p>
            <button 
               className="hover:text-red-500 transition-all text-[0.90em]"
               onClick={() => handleRemoveProduct(cartItem.id)}
            >Delete</button>
         </div>
         <Modal confirmation={confirmation} handleConfirm={handleConfirm} handleCloseConfirmation={handleCloseConfirmation}  />
      </div>
   );
};

export default CartItems;
