
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";

const Confirmation = ({ confirmation, handleConfirm, handleCloseConfirmation, itemName } ) => {

   if (!confirmation) {
      return null;
   }
   
   const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      bgcolor: 'background.paper',
      p: 4,
   };

   return (
      <Modal
         open={confirmation}
      >
         <Box sx={style}>
            <h1 className="mb-5 text-xl text-red-500 font-roboto">Are you sure you want to remove?</h1>
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
         </Box>
      </Modal>
   );
};

export default Confirmation;
