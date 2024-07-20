import {  useState } from "react";

import ProductsList from "./ProductsList";
import Spinner from "./Spinner";
import SearchProduct from "./SearchProduct";

import { Products } from "../constants/types";

const ProductsListings = ({ products, loading } : { products: Products[] , loading: boolean}) => {
   const [ filteredProduct, setFilteredProduct ] = useState<string>('');

   const filteredProducts = products.filter((prod: Products) => 
      prod.name.toLowerCase().includes(filteredProduct.toLowerCase()),
   );

   return (
      <div className="mx-[12rem] h-full py-[3rem]">
         <div className="w-full flex items-center justify-between mb-5">
            <h1 className="font-palanquin font-semibold">Our Products</h1>
            <SearchProduct  setFilteredProduct={setFilteredProduct} filteredProduct={filteredProduct} />
         </div>
         
         <div className="flex items-center justify-center">
            {
               loading ? ( <Spinner loading={loading} /> ) : 
               <ProductsList  filteredProducts={filteredProducts} />
            }
         </div>
      </div>
   );
};

export default ProductsListings;
