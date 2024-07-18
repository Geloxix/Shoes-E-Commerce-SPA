import { Products } from "../constants/types";

import Hero from "../Components/Hero";
import MostBuyedProducts from "../Components/MostBuyedProducts";

const HomePage = ({ products }: { products: Products[] }) => {
   return (
      <section>
         <Hero />
         <MostBuyedProducts products={products} />
      </section>
   )
};

export default HomePage;
