// import { ConfirmationType } from "../constants/types";


const Confirmation = ({ confirmation, handleConfirm, handleCloseConfirmation, itemName } ) => {

   if (!confirmation) {
      return null;
   }
   
   return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
         <div className="bg-white rounded-sm p-8 shadow-md">
            <h1 className="mb-4 text-xl text-red-500 font-palanquin">Are you sure you want to remove?</h1>
            <p className="text-[0.90em] mb-8">{ itemName }</p>
            <div className="flex justify-end">
               <button
                  onClick={handleCloseConfirmation}
                  className="confirmation-buttons"
               >cancel</button>
               <button
                  onClick={handleConfirm}
                  className="confirmation-buttons bg-red-500 text-white"
               >confirm</button>
            </div>
         </div>
      </div>
   );
};

export default Confirmation;
