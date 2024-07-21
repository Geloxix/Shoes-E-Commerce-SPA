import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import Product from "../Components/Product";
import { Products } from "../constants/types";

const ProductPage = ({ cartItems, handleAddItem }: { cartItems: Products[], handleAddItem: (item: Products) => void }) => {
   const product = useLoaderData();

   return (
      <section className="bg-light-gray h-full">
         <ToastContainer />
         <Product product={product} cartItems={cartItems} handleAddItem={handleAddItem} />
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
