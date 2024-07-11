import { NavLink } from "react-router-dom";

import { navLinks } from "../constants/utils";
import Contact from "./Contact";

const Navbar = () => {
  return (
      <header>
         <Contact />
         <div className="flex items-center justify-between h-[70px] border-2 px-[8rem]">
            <h1>SHP</h1>
            <nav>
               <ul className={`flex items-center justify-center text-[0.90em]`}>
                  {
                     navLinks.map((nav, index) => (
                        <NavLink 
                           key={nav.id}
                           className={({ isActive }) => 
                              `${isActive ? "border-b-2 border-zinc-800 transition-all" : "transition-all"}
                              ${index === navLinks.length - 1 ? "mr-0" : "mr-[2rem]"}
                              `
                           }
                           to={nav.path}
                        >
                           { nav.name }
                        </NavLink>
                     ))
                  }
               </ul>
            </nav>
         </div>
      </header>
   )
};

export default Navbar;
