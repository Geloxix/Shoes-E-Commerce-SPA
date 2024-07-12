import { Link } from "react-router-dom";

import bigShoe from "../assets/images/big-shoe2.png";

const Hero = () => {
   return (
      <div className="bg-light-gray flex items-center justify-center px-[10rem] py-[5rem] gap-5">
         <div className="basis-[45%]">
            <h1>Shop with us</h1>
            <p className="text-wrap">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium quod deleniti doloribus perspiciatis!</p>
            <button className="py-2 px-[2rem] border-2">
                <Link 
                  to="/products"
               >
                  Shop now
               </Link>
            </button>
         </div>

         <div className="basis-[40%] border-2 border-red-300">
            <img
               src={bigShoe} 
               alt="Hero shoe" 
               className="object-contain"
            />
         </div>
      </div>
   )
};

export default Hero;
