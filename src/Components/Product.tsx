import { Link } from "react-router-dom";
import { useEffect } from "react";

import { Products } from "../constants/types";
import { RiHeart3Line } from "@remixicon/react";
import { useCartStore } from "../constants/store";

const Product = ({ product, cartItems, setCartItem }: { product: Products, cartItems: Products[] }) => {
   const { incrementCartQuantity, cartQuantity } = useCartStore();

   const newProduct: Products = {
      id: product.id,
      name: product.name,
      img: product.img,
      priceCents: product.priceCents,
      quantity: product.quantity,
      rating: {
         rate: product.rating.rate,
         stars: product.rating.stars
      }
   }; 

   console.log(cartQuantity);
   
   useEffect(() => {
      localStorage.setItem("cartItem", JSON.stringify(cartItems));
   },[cartItems]);

   const handleAddToCart = () => {
      if (cartItems.some((p: Products) => p.id === product.id)) {
         alert("Already in the cart!");
      } else {
         setCartItem([...cartItems, newProduct]);
         incrementCartQuantity();
      }
   };

   return (
      <div className="mx-[12rem] mt-5">
         <div className="flex items-center justify-center gap-5 border-2">
            <div>
               <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-[500px]"
               />
               <Link 
                  to="/favorites"
                  className="flex gap-2 items-center justify-center py-2"
               >
                  <RiHeart3Line 
                     className="text-red-500"
                  />
                  <span>Favorites</span>
               </Link>
            </div>

            <div className="p-3 h-full">
               <div className="mb-[50%]">
                  <p className="text-wrap">{ product.name }</p>
                  <div className="flex items-center justify-start">
                     <p className="text-[0.90em]">{(product.rating.rate).toFixed(1)}</p>
                     <img 
                        src={product.rating.stars} 
                        alt="rating stars" 
                        className="w-[70px]"
                     />
                  </div>
               </div>
               <div className="justify-self-end">
                  <button 
                     className="add-buy-button bg-white text-red-500 border-[1px] border-red-500 mr-3"
                     onClick={handleAddToCart}
                  >Add To Cart</button>
                  <button 
                     className="add-buy-button bg-red-500 text-white"
                  >Buy Now</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Product;
