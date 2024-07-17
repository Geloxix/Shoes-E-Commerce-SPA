import checkBoxCircle from "../assets/images/checkbox-circle-line.svg";

const AddToCartModal = ({ openModal }: { openModal: boolean}) => {

   if (!openModal) {
      return null;
   }

   return (
      <div className="fixed flex items-center justify-center top-[40%] left-[40%]">
         <div className="bg-black bg-opacity-40 py-[2rem] px-[4rem] flex items-center justify-center gap-6 flex-col text-white">
            <img 
               src={checkBoxCircle} 
               alt="checkbox circle" 
               className="w-[90px]"
            />
            <h2>item has been added to your cart!</h2>
         </div>
      </div>
   );
};

export default AddToCartModal;
