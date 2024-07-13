import { Link } from "react-router-dom";

import { Products } from "../constants/types";

const ProductsListings = ({ products, loading } : { products: Products[] , loading: boolean}) => {
   return (
      <div className="mx-[12rem] mt-5">
         <h1 className="text-left mb-5">Our Products</h1>
         <div className="flex items-center justify-center">
            {
               loading ? <div className="h-full">Loading....</div> : 
               <ul className="grid grid-cols-4-cols place-content-center place-items-center gap-2">
                  {
                     products.map((product: Products) => (
                        <li
                           key={product.id}
                           className="border-2 border-light-gray"
                        >  
                           <Link to={`/products/${product.id}`}>
                              <img 
                                 src={product.img} 
                                 alt={product.name} 
                                 className="bg-transparent"
                              />
                           </Link>
                           <div className="p-3 text-[0.80em]">
                              <p className="text-left">{`${product.name.slice(0, 35)}...`}</p>
                              <p>{`$${(product.priceCents).toFixed(2)}`}</p>
                           </div>
                        </li>
                     ))
                  }
               </ul>
            }
         </div>
      </div>
   );
};

export default ProductsListings;
