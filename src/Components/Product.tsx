import { Products } from "../constants/types";

const Product = ({ product }: { product: Products}) => {
   return (
      <div className="mx-[12rem] mt-5 flex items-center justify-center">
         <div className="p-3 border-[2px]"> 
            <div className="flex items-center justify-center gap-3">
               <div className="shadow-md">
                  <img 
                     src={product.img} 
                     alt={product.name} 
                     className="w-[500px]"
                  />

               </div>

               <div className="h-[100%] self-start shadow-md">
                  <div className="">
                     <p className="text-wrap">{ product.name }</p>
                     <p className="flex items-center justify-start">
                        <p className="text-[0.90em]">{(product.rating.rate).toFixed(1)}</p>
                        <img 
                           src={product.rating.stars} 
                           alt="rating stars" 
                           className="w-[70px]"
                        />
                     </p>
                  </div>
                  <div className="justify-self-end">
                     <button className="add-buy-button bg-white text-red-500 border-[1px] border-red-500 mr-3">Add To Cart</button>
                     <button className="add-buy-button bg-red-500 text-white">Buy Now</button>
                  </div>
               </div>
            </div>
            
         </div>
      </div>
   );
};

export default Product;
