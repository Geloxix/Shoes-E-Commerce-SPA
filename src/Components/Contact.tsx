import { Link } from "react-router-dom";

import { contacts } from "../constants/utils";
import Phone from "../assets/icons/phone-fill.svg";
import Mail from "../assets/icons/mail-line.svg";

const Contact = () => {
   return (
      <div className="shadow-sm flex items-center justify-between px-[10rem] py-2">
         <ul className="flex items-center justify-center gap-2">
            {
               contacts.map((contact) => (
                  <Link
                     key={contact.id}
                     to={contact.path}
                  >
                     <img 
                        src={contact.img}
                        alt="Socmed Icons"
                        className="w-[15px]"
                     />
                  </Link>
               ))
            }
         </ul>
         <div className="flex items-center justify-center gap-2">
            <div className="flex text-[0.80em]">
               <img 
                  src={Phone} 
                  alt="Phone icon" 
                  className="w-[15px]"
               /> :000-0000-000 
            </div>
            <Link 
               to="#"
            >
               <img 
                  src={Mail} alt="Gmail icon" 
                  className="w-[15px]"
               />
            </Link>
         </div>
      </div>
   )
};

export default Contact;
