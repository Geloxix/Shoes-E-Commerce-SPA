import { useEffect, useState } from "react";
import axios from "axios";

import ProductsListings from "../Components/ProductsListings";

const ProductsPage = () => {
   const [ products, setProducts ] = useState([]);
   const [ loading, setLoading ] = useState<boolean>(true);  

   useEffect(() => {
      const fetchProducts = async() => {
         try {
            const res = await axios.get(`/api/products`);
            setProducts(res.data);
         } catch (e) {
            console.error("Error", e);
         } finally {
            setLoading(false);
         } 
      };

      fetchProducts();
   },[]);
   

   return (
      <section className="bg-light-gray min-h-full">
         <ProductsListings products={products} loading={loading} />
      </section>
   );
};

export default ProductsPage;
