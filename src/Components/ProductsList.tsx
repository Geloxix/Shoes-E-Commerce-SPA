import { Link } from "react-router-dom";

import { Products } from "../constants/types";

const ProductsList = ({ filteredProducts }: { filteredProducts: Products[] }) => {
   return (
      <>
         {filteredProducts.length !== 0 ? 
            <ul className="grid grid-cols-4-cols place-content-center place-items-center gap-2">
               {
                  filteredProducts.map((product: Products) => (
                     <li
                        key={product.id}
                        className="border-2 border-light-gray bg-white p-3"
                     >  
                        <Link to={`/products/${product.id}`}>
                           <img 
                              src={product.img} 
                              alt={product.name} 
                           />
                        </Link>
                        <div className="p-3 text-[0.80em]">
                           <p className="mb-3 text-red-500">{`$${(product.priceCents).toFixed(2)}`}</p>
                           <p className="text-left">{`${product.name.slice(0, 60)}..`}</p>
                        </div>
                     </li>
                  ))
               }
            </ul> :
            <div className="my-[15%]">
               <h1 className="text-red-500 text-lg">product not found....</h1>
            </div>
         }
      </>
   );
};

export default ProductsList;
