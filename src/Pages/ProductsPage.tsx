import { Products } from "../constants/types";
import ProductsListings from "../Components/ProductsListings";

const ProductsPage = ({ products, loading }: { products: Products[], loading: boolean}) => {
   return (
      <section className="bg-light-gray min-h-full pt-[5rem] pb-[2rem]">
         <ProductsListings products={products} loading={loading} />
      </section>
   );
};

export default ProductsPage;
