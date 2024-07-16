import { NavLink, Link } from "react-router-dom";

import { useCartStore } from "../constants/store";
import { navLinks } from "../constants/utils";
import Contact from "./Contact";

import { RiSearch2Line } from "@remixicon/react";
import Cart from "../assets/images/cart.png";
import logo from "../assets/images/header-logo.svg";


const Navbar = () => {
   const cartQ = useCartStore((state) => state.cartQuantity);

   return (
      <header>
         <Contact />
         <div className="flex items-center justify-between h-[70px] px-[10rem]">
            <div>
               <img 
                  src={logo} 
                  alt="nike logo" 
                  className="w-[90px]"
               />
            </div>
            <div className="w-[700px] border-2 flex font-palanquin">
               <input 
                  type="text" 
                  name="serch product" 
                  className="py-[7px] w-full pl-3 text-[0.90em]"
                  placeholder="Search for products"
               />
               <button className="px-7 bg-red-500 text-white">
                  <RiSearch2Line 
                     className="w-[20px]"
                  />
               </button>
            </div>
            <nav>
               <ul className={`flex items-center justify-center text-[0.90em]`}>
                  {
                     navLinks.map((nav) => (
                        <NavLink 
                           key={nav.id}
                           className={({ isActive }) => 
                              `${isActive ? "border-b-2 border-zinc-800 transition-all" : "transition-all"} mr-[20px]
                              `}
                           to={nav.path}
                        >
                           { nav.name }
                        </NavLink>
                     ))
                  }
                  <Link 
                     to="/cart"
                     className="relative" 
                  >
                     <img 
                        src={Cart} 
                        alt="Cart icon"
                        className="w-[30px]" 
                     />
                     <p className="absolute top-[-10px] right-[8px] text-red-500 font-semibold">{ cartQ }</p>
                  </Link>
               </ul>
            </nav>
         </div>
      </header>
   )
};

export default Navbar;
