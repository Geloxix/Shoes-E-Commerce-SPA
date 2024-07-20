import { communications, contacts } from "../constants/utils";

import { Communications,  } from "../constants/types";
import { Link } from "react-router-dom";

const ContactPage = () => {
   return (
      <section className="bg-light-gray py-[2rem]">
         <div className="mx-[12rem]">
            <div className="bg-white py-[2rem]">
               <h1 className="text-center text-4xl tracking-wide font-palanquin font-semibold text-red-500 mb-5">CONTACT US</h1>

               <div className="flex justify-center items-center gap-[1rem] py-5">
                  <div className="p-5">
                     <h1 className="font-open-sans text-2xl font-semibold mb-5">Get in Touch</h1>
                     <form action="" className="font-montserrat flex flex-col gap-5">
                        <input className="contact-inputs" type="text" name="full name" id="fullName" placeholder="full name" required />
                        <input className="contact-inputs" type="number" name="phone number" id="phoneNumber" placeholder="Phone number" required />
                        <input className="contact-inputs" type="email" name="email" id="email" placeholder="Email" required />
                        <textarea name="comment" placeholder="Comment" id="comment" rows={10} cols={50} className="bg-light-gray p-2"></textarea>
                        <button type="submit" className="w-[200px] py-2 bg-red-500 text-white hover:bg-opacity-80 transition-all">SEND NOW</button>
                     </form>
                  </div>

                  <div className="self-start p-5">
                     <h1 className="text-2xl mb-5 font-open-sans font-semibold">Talk to Us</h1>
                     <ul className="flex justify-between flex-col gap-5 font-open-sans mb-[2rem]">
                        {
                           communications.map((com: Communications) => (
                              <li 
                                 key={com.id}
                                 className="flex gap-5"
                              >
                                 <img 
                                    src={com.img} 
                                    alt={com.name} 
                                    className="w-[50px]"
                                 />
                                 <div>
                                    <h1 className="mb-2">{ com.name }</h1>
                                    <p>{ com.contact }</p>
                                 </div>
                              </li>
                           ))
                        }
                     </ul>
                     <div>
                        <h1 className="font-open-sans mb-3">Follow Us:</h1>
                        <ul className="flex flex-row gap-[0.65rem]">
                           {
                              contacts.map((c) => (
                                 <Link 
                                    key={c.id}
                                    to={c.path}
                                 >
                                    <img 
                                       src={c.img} 
                                       alt="Icons" 
                                       className="w-[30px] rounded-full p-1 bg-red-500 hover:translate-y-[-2px] transition-all"
                                    />
                                 </Link>
                              ))
                           }
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactPage;
