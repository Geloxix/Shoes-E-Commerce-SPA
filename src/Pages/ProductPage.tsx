import { useLoaderData } from "react-router-dom";
import axios from "axios";

import Product from "../Components/Product";

const ProductPage = ({  setCartItem, cartItems}) => {
   const product = useLoaderData();

   return (
      <section>
         <Product product={product} setCartItem={setCartItem} cartItems={cartItems} />
      </section>
   );
};


const productLoader = async({ params }) => {
   const productId = params.productId;

   try {
      const res = await axios.get(`/api/products/${productId}`);
      return res.data;
   } catch (err) {
      console.error("Error:", err);
   }
};

export { ProductPage as default, productLoader};
