import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

import { style } from "../constants/utils";

interface RemoveSelectedComponentTypes {
    totalItemSelected: number;
    handleYesButton: () => void;
    handleNoButton: () => void;
    isOpenModal: boolean;
};

const RemoveSelectedItemConfirmation = ({ totalItemSelected, isOpenModal, handleYesButton, handleNoButton }: RemoveSelectedComponentTypes) => {

    if (!isOpenModal) {
        return null;
    }

    return (
        <Modal
            open={isOpenModal}>
            <Box sx={style}>
                <h1 className="mb-[2.5rem] font-roboto text-lg text-red-500">{`Do you want to remove ${totalItemSelected} ${totalItemSelected > 1 ? 'products' : 'product'}?`}</h1>

                <div className="flex items-center justify-end gap-3">
                    <button 
                        className="confirmation-buttons bg-red-500 text-white hover:bg-opacity-80"
                        onClick={handleNoButton}>
                            No
                    </button>

                    <button 
                        className="confirmation-buttons hover:bg-light-gray" 
                        onClick={handleYesButton}>
                            Yes
                    </button>
                </div>
            </Box>
        </Modal>
    );
};

export default RemoveSelectedItemConfirmation;
