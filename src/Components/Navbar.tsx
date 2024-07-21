//router dom imports
import { NavLink, Link } from "react-router-dom";

//import components
import { useCartStore } from "../constants/store";
import { navLinks } from "../constants/utils";
import Contact from "./Contact";

//icons imported
import bag from "../assets/images/handbag-line.png";
import logo from "../assets/images/header-logo.svg";
import accountCircle from "../assets/icons/account-circle-line.svg";


const Navbar = () => {
   const cartQuantity = useCartStore((state) => state.cartQuantity);

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
                              `${isActive ? "border-b-2 border-zinc-800 transition-all" : "transition-all"} mr-[1.8rem]
                              `}
                           to={nav.path}
                        >
                           { nav.name }
                        </NavLink>
                     ))
                  }
                  <div className="flex gap-3">
                     <button>
                        <img 
                           src={accountCircle} 
                           alt="account circle" 
                           className="w-[23px]"
                        />
                     </button>

                     <Link 
                        to="/cart"
                        className="relative" 
                     >
                        <img 
                           src={bag} 
                           alt="Cart icon"
                           className="w-[23px]" 
                        />
                        <span className="absolute top-[-5px] right-[-5px] w-[20px] h-[19px] rounded-full text-center bg-red-600 text-white">{ cartQuantity }</span>
                     </Link>
                  </div>
               </ul>
            </nav>
         </div>
      </header>
   )
};

export default Navbar;
