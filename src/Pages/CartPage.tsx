import axios from "axios";

import { Products } from "../constants/types";
import CartItems from "../Components/CartItems";
import CheckOut from "../Components/CheckOut";
import emptyCart from "../assets/images/empty-cart.png";

//Cartpage types props
interface CartPageProps {
   cartItems: Products[];
   handleRemoveCartItem: (id: number) => void;
   setCartItems: any;
};

const CartPage = ({ cartItems, handleRemoveCartItem, setCartItems }: CartPageProps ) => {   

   const handleCheckboxChange = async (id: number) => {
      const itemUpdate = cartItems.find(item => item.id === id);
      const updatedItem = { ...itemUpdate, isChecked: !itemUpdate?.isChecked };

      try {
         //requesting patch  to updated to updated the updated item
         await axios.patch(`/cartApi/cart/${id}`, {
            isChecked: updatedItem,
         });

         setCartItems((prevCartItems: Products[]) => prevCartItems.map(item => item.id === id ? updatedItem : item));
      } catch (err) {
         console.log("Error: " + err);
      }
   };

   // filter to include only the items where isChecked is true. then sum up the price of all checked items
   const totalPrice = cartItems.filter(item => item.isChecked).reduce((sum, currentItem) => sum + currentItem.priceCents ,0);
   
   return (
      <section className="bg-light-gray min-h-screen flex items-start justify-between flex-col">
         <div className="mx-[1rem] w-full">
            {
               cartItems.length !== 0 ? (
                  <ul className="mt-[1rem] p-3">
                     {
                        cartItems.map((cartItem: Products) => (
                           <CartItems 
                              handleRemoveCartItem={handleRemoveCartItem}
                              handleCheckboxChange={handleCheckboxChange}
                              key={cartItem.id}
                              cartItem={cartItem}
                           />
                        ))
                     }
                     <CheckOut totalPrice={totalPrice} />
                     
                  </ul>
               ) :
               <div className="flex items-center justify-center my-[10%] flex-col gap-5">
                  <img 
                     src={emptyCart} 
                     alt="Empty cart image" 
                     className="w-[180px]"
                  />
                  <h1 className="text-[0.90em] font-semibold">Your shopping cart is empty</h1>
               </div>
            }
         </div>
        
         
      </section>
   );
};

export default CartPage;
