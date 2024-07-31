import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "@remixicon/react";

const NotFoundPage = () => {
   return (
      <section className="h-screen">
         <button className="py-[1rem] px-[2rem] flex gap-1 hover:text-red-500 transition-all">
            <RiArrowLeftSLine />
            <Link to="/">
               Return Home
            </Link>
         </button>
         <div className="h-full flex items-center justify-center flex-col font-sans gap-5">
            <h1 className="text-3xl text-red-500">Oooppsss!</h1>
            <h2 className="text-6xl">Page not found!</h2>
         </div>
      </section>
      
   )
};

export default NotFoundPage;
