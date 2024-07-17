import { RiSearch2Line } from "@remixicon/react";
import { ChangeEvent } from "react";

// import { SearchProductTypes } from "../constants/types";

const SearchProduct = ({  filteredProduct, setFilteredProduct }: { filteredProduct: string }) => {

   const handleFilterProducts = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setFilteredProduct(e.target.value);
   };

   return (
      <form className="w-[700px] border-2 flex font-palanquin">
         <input 
            type="text" 
            name="serch product" 
            className="py-[7px] w-full pl-3 text-[0.90em]"
            placeholder="Search for products"
            value={filteredProduct}
            onChange={handleFilterProducts}
         />
         <button className="px-7 bg-red-500 text-white">
            <RiSearch2Line 
               className="w-[20px]"
            />
         </button>
      </form>
   );
};

export default SearchProduct;
