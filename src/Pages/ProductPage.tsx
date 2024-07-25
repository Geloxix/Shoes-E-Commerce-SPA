import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import Product from "../Components/Product";
import { Products } from "../constants/types";

interface ProductPageProps {
   cartItems: Products[];
   handleAddItem: (item: Products) => void;
};


const ProductPage = ({ cartItems, handleAddItem }: ProductPageProps) => {
   const product = useLoaderData() as Products;

   return (
      <section className="bg-light-gray h-full">
         <ToastContainer />
         <Product product={product} cartItems={cartItems} handleAddItem={handleAddItem} />
      </section>
   );
};

// LoaderFunctionArgs is a type provided by React Router to represent the arguments that are passed to a loader function.
const productLoader = async({ params }: LoaderFunctionArgs) => {
   const { productId } = params;

   try {
      const res = await axios.get(`/api/products/${productId}`);
      return res.data;
   } catch (err) {
      console.error("Error:", err);
   }
};

export { ProductPage as default, productLoader};
