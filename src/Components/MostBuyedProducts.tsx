import { Products } from "../constants/types";
import { Link } from "react-router-dom";

const MostBuyedProducts = ({ products }: { products: Products[] } ) => {
   const mostBuyedProducts = products.slice(0, 3);

   return (
      <div className="py-[3rem]">
         <div className="mx-[18rem]">
            <h1 className="mb-3 text-md font-semibold text-red-500">Most Buyed</h1>
            <ul className="grid grid-cols-second-cols-3 place-content-center gap-3">
               {
                  mostBuyedProducts.map((product: Products) => (
                     <li
                        key={product.id}
                        className="p-5 border-[1px]"
                     >  
                        <Link
                           to={`/products/${product.id}`}
                        >
                           <img 
                              src={product.img} 
                              alt={product.name} 
                           />
                        </Link>
                        
                        <p className="text-[0.90em] text-red-500 mb-2">{`$${(product.priceCents).toFixed(2)}`}</p>
                        <h1 className="text-[0.90em]">{product.name}</h1>
                     </li>
                  ))
               }
            </ul>
         </div>
      </div>
   );
};

export default MostBuyedProducts;
