import { Products } from "../constants/types";

import MostBuyedCard from "./MostBuyedCard";

const MostBuyedProducts = ({ products }: { products: Products[] } ) => {
   const mostBuyedProducts = products.slice(0, 3);

   return (
      <div className="py-[3rem]">
         <div className="mx-[18rem]">
            <h1 className="mb-3 text-md font-semibold font-palanquin text-red-500">Most Buyed</h1>
            <ul className="grid grid-cols-second-cols-3 place-content-center gap-3">
               {
                  mostBuyedProducts.map((product: Products) => (
                     <MostBuyedCard 
                        key={product.id}
                        product={product}
                     />
                  ))
               }
            </ul>
         </div>
      </div>
   );
};

export default MostBuyedProducts;
