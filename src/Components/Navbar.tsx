import { NavLink, Link } from "react-router-dom";

import { navLinks } from "../constants/utils";
import Contact from "./Contact";
import Cart from "../assets/images/cart.png";
import { useCartStore } from "../constants/store";

const Navbar = () => {
   const cartQ = useCartStore((state) => state.cartQuantity);

   return (
      <header>
         <Contact />
         <div className="flex items-center justify-between h-[70px] px-[10rem]">
            <h1>SHP</h1>
            <nav>
               <ul className={`flex items-center justify-center text-[0.90em]`}>
                  {
                     navLinks.map((nav) => (
                        <NavLink 
                           key={nav.id}
                           className={({ isActive }) => 
                              `${isActive ? "border-b-2 border-zinc-800 transition-all" : "transition-all"} mr-[2rem]
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
                     <p className="absolute top-[-10px] right-[8px] font-semibold text-red-500">{ cartQ }</p>
                  </Link>
               </ul>
            </nav>
         </div>
      </header>
   )
};

export default Navbar;
