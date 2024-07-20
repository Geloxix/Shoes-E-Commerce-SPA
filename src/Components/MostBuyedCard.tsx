import { Link } from "react-router-dom";

import { Products } from "../constants/types";

const MostBuyedCard = ({ product }: { product: Products }) => {
   return (
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
         
         <p className="text-[0.90em] text-red-500 font-semibold mb-2">{`$${(product.priceCents).toFixed(2)}`}</p>
         <h1 className="text-[0.90em]">{product.name}</h1>
      </li>
   );
};

export default MostBuyedCard;
