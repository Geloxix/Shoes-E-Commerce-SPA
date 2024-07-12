import { Products } from "../constants/types";

const Product = ({ product }: { product: Products}) => {
   return (
      <div className="mx-[12rem] mt-5">
         <h1>{product.name}</h1>
      </div>
   );
};

export default Product;
