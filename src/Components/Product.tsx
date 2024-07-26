import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

import AddToCartModal from "./AddToCartModal";
import { Products } from "../constants/types";
import { useCartStore } from "../constants/store";
import heartFill from "../assets/icons/heart-3-fill.svg";
import heartLine from "../assets/icons/heart-3-line.svg";


interface ProductComponentsProps {
   product: Products;
   cartItems: Products[];
   handleAddItem: (item: Products) => void;
};

const Product = ({ product, cartItems, handleAddItem }: ProductComponentsProps) => {

   const { incrementCartQuantity } = useCartStore();
   const [ openModal, setOpenModal ] = useState<boolean>(false);
   const [ isClick, setIsClick ] = useState<boolean>(false);

   
   //post request to add an item to cart
   const addProduct = () => {

      const newProduct: Products = {
         id: product.id,
         name: product.name,
         img: product.img,
         quantity: product.quantity,
         isChecked: product.isChecked,
         priceCents: product.priceCents,
         rating: {
            rate: product.rating.rate,
            stars: product.rating.stars
         }
      };

      handleAddItem(newProduct);
   };

   const handleClickFavorites = () => {
      setIsClick(!isClick);
   };

   const handleAddToCart = (id: number) => {
      if (cartItems.some((p: Products) => p.id === id)) {
         toast.error('item already in the cart!');
      } else {
         addProduct();
         incrementCartQuantity();
         setOpenModal(true);
      }


      setTimeout(() => {
         setOpenModal(false); //close the modal after 1 second
      }, 1000);
   };

   return (
      <div className="mx-[12rem] py-[1rem]">
         <div className="flex gap-8 bg-white p-5">
            <div>
               <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-[500px]"
               />
               <li 
                  className="flex gap-2 items-center justify-start py-2 text-lg font-open-sans"
               >  
                  <button onClick={handleClickFavorites}>
                     <img 
                        src={`${isClick ? heartFill : heartLine}`} 
                        alt="heart"
                        width={25} 
                     />
                  </button>
                 
                  <Link to="/favorites">Favorites</Link>
               </li>
            </div>

            <div className="p-3 flex flex-col items-start justify-between py-3">
               <div>
                  <p className="text-wrap text-[20px] mb-2">{ product.name }</p>
                  <div className="flex items-center justify-start mb-3">
                     <p className="text-[0.80em] mr-2">{(product.rating.rate).toFixed(1)}</p>
                     <img 
                        src={product.rating.stars} 
                        alt="rating stars" 
                        className="w-[70px]"
                     />
                  </div>
                  <p className="px-[2rem] py-3 w-full bg-light-gray text-2xl font-semibold font-montserrat text-red-500">{`$${(product.priceCents).toFixed(2)}`}</p>
               </div>
               <div className="justify-self-end">
                  <button 
                     className="add-buy-button bg-white text-red-500 border-[1px] border-red-500 mr-3"
                     onClick={() => handleAddToCart(product.id)}
                  >Add To Cart</button>
                  <button 
                     className="add-buy-button bg-red-500 text-white"
                  >Buy Now</button>
               </div>
            </div>
         </div>
         <AddToCartModal openModal={openModal} />
      </div>
   );
};

export default Product;
