import { ConfirmationType } from "../constants/types";


const Modal = ({ confirmation, handleConfirm, handleCloseConfirmation}: ConfirmationType) => {
   if (!confirmation) {
      return null;
   }
   
   return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
         <div className="bg-white rounded-sm p-6 shadow-md">
            <h1 className="mb-2">Confirmation</h1>
            <p className="text-[0.90em] mb-5">Are you sure you want to remove it?</p>
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

export default Modal;
