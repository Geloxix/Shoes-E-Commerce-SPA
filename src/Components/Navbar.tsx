import { NavLink, Link } from "react-router-dom";

import { useCartStore } from "../constants/store";
import { navLinks } from "../constants/utils";
import Contact from "./Contact";

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
            
            <nav>
               <ul className={`flex items-center justify-center text-[0.80em]`}>
                  {
                     navLinks.map((nav) => (
                        <NavLink 
                           key={nav.id}
                           className={({ isActive }) => 
                              `${isActive ? "border-b-2 border-zinc-800 transition-all" : "transition-all"} mr-[1.5rem]
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
