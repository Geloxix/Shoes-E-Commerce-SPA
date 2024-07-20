import shoe5 from "../assets/images/shoe-5.webp";

const AboutPage = () => {
   return (
      <section className="h-full">
         <div className="mx-[12rem] h-full">
            <h1 className="text-center font-palanquin font-semibold text-5xl py-[4rem] tracking-wider text-red-500 bg-light-gray mb-4">Who Are We?</h1>
            <div>
               <div className="flex items-center gap-5 mx-[5rem] bg-white">
                  <img 
                     src={shoe5} alt="shoe" 
                     className="w-[450px] p-6 shadow-sm border-light-gray"
                  />
                  <div className="p-4">
                     <h1 className="font-open-sans text-3xl font-semibold mb-[2rem]" >OUR MISSION</h1>
                     <p className="text-wrap leading-8 mb-7 font-open-sans">At Nike, our mission is to bring inspiration and innovation to every athlete* in the world. (*If you have a body, you are an athlete.) Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet beatae adipisci eos ea dolores veritatis explicabo magnam animi aperiam!</p>
                     <p className="font-open-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aspernatur?</p>
                  </div>
               </div>
         
            </div>
         </div>
      </section>
   );
};

export default AboutPage;
