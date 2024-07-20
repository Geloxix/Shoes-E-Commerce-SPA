import { Link } from "react-router-dom";

import bigShoe from "../assets/images/big-shoe2.png";

const Hero = () => {
   return (
      <div className="bg-light-gray h-full flex items-center justify-center px-[10rem] py-[5rem] gap-5">
         <div>
            <h1 className="mb-5 text-6xl text-red-500 font-palanquin">Nike</h1>
            <p className="text-wrap max-w-[650px] mb-5 leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium quod deleniti doloribus perspiciatis!</p>
            <button className="py-2 px-[3rem] border-none bg-red-500 text-white">
                <Link 
                  to="/products"
               >
                  Shop now
               </Link>
            </button>
         </div>

         <div className="border-2 border-red-300">
            <img
               src={bigShoe} 
               alt="Hero shoe" 
               className="object-contain w-[500px]"
            />
         </div>
      </div>
   )
};

export default Hero;
