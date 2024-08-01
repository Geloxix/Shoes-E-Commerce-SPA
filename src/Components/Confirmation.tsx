
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";

import { style } from "../constants/utils";

const Confirmation = ({ confirmation, handleConfirm, handleCloseConfirmation, itemName }: {
      confirmation: boolean, handleConfirm: () => void, handleCloseConfirmation: () => void, itemName: string
   }) => {

    if (!confirmation) {
        return null;
    }
   
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
