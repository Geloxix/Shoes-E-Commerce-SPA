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
                        className="border-2 border-light-gray bg-white"
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
            </ul> :
            <h1>
               product not found....
            </h1>
         }
      </>
   );
};

export default ProductsList;
