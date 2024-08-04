import axios from "axios";
import { useState, useEffect } from "react";

import Checkbox from "@mui/material/Checkbox";
import { useCartStore } from "../constants/store";
import { Products } from "../constants/types";
import RemoveSelectedItemConfirmation from "./RemoveSelectedItemConfirmation";
import { checkBoxStyle } from "../constants/utils";

const CheckOut = ({ cartItems, setCartItems }: { cartItems: Products[], setCartItems: any }) => {
    const [ isOpenModal, setIsOpenModal ] = useState<boolean>(false);
    const [ isMasterChecked, setIsMasterChecked ] = useState<boolean>(false);
    const [ isSticky, setIsSticky ] = useState<boolean>(false);


    const { decrementCartQuantity, decrementTotalItemSelected, incrementTotalItemSelected } = useCartStore();
    const cartQuantity = useCartStore((state) => state.cartQuantity);
    const totalItemSelected = useCartStore((state) => state.totalItemSelected);
    
    // filter to include only the items where isChecked is true. and then sum up the price of all checked items
    const totalPrice = cartItems.filter(item => item.isChecked).reduce((sum, currentItem) => sum + currentItem.priceCents ,0);

    const decrementQuantityItemSelected = () => {
        decrementCartQuantity();
        decrementTotalItemSelected();
    };
    
    
    const handleDeleteSelectedItems = async() => {
        try {
            // mapped the cartitem and find the item that is selected and delete it
            const selectedItems = cartItems.map(item => item.isChecked ? axios.delete(`/cartApi/cart/${item.id}`) : null );

            //wait for all delete request complete if not returns an error
            await Promise.all(selectedItems);

            cartItems.map(item => item.isChecked ? decrementQuantityItemSelected() : totalItemSelected);
            setCartItems((prevItems: Products[]) => prevItems.filter(item => !item.isChecked));
            
        } catch (err) {
            console.log("Error", err);
        } 
    }; 



    // function to handle selecting all itrms in cart
    const handleSelectAll = async() => {
        const updatedMasterChecked = !isMasterChecked;
        setIsMasterChecked(updatedMasterChecked);
        
        try {
            const updatedAllChecked = cartItems.map((item) => {

                axios.patch(`/cartApi/cart/${item.id}`,{
                    isChecked: updatedMasterChecked,
                });
            })

            await Promise.all(updatedAllChecked);
        } catch (err) {
            console.log("Error: ", err); 
        }

        cartItems.some((item) => !item.isChecked ? incrementTotalItemSelected() : decrementTotalItemSelected());
        setCartItems((prevItems: Products[]) => prevItems.map(product => ({ ...product, isChecked: updatedMasterChecked })));
        
    };

    //effect that rerender if the dependecy changes/updated
    useEffect(() => {

        window.addEventListener('scroll', () => {
            window.scrollY > 0 ? setIsSticky(false) : setIsSticky(true);
        });


        const allSelected = cartItems.every((item) => item.isChecked);
        setIsMasterChecked(allSelected); //setting all selected to true is passed the test otherwise false
    },[cartItems]);

    // function that handles deleting selected item and closing modal
    const handleYesButton = () => {
        handleDeleteSelectedItems();
        setIsOpenModal(false);
    };

    const handleNoButton = () => {
        setIsOpenModal(false);
    };

    const handleOpenModal = () => {
        cartItems.find((item) => !item.isChecked ? null : setIsOpenModal(true));
        // setIsOpenModal(true);
    };

    return (
        <div className={`sticky shadow-lg mx-[12rem] px-[5rem] mt-[2rem] bottom-0 left-0 right-0 h-[150px] bg-white flex justify-between items-center py-[1rem]`}>
            <div className="flex gap-5 items-center justify-center">
                <Checkbox 
                    sx={checkBoxStyle}
                    name="select all checkbox" 
                    checked={isMasterChecked}
                    onChange={handleSelectAll}
                    className="bg-red-500"
                />
                <p>{`Select All(${cartQuantity})`}</p>
                <button 
                    onClick={handleOpenModal}
                    className="hover:text-red-500 transition-all"
                >
                    delete
                </button>
            </div>
            
            <div className="flex gap-5 items-end">
                <div className="flex items-center gap-2">
                    <p>{`Total:(${totalItemSelected} items)`}</p>
                    <span className="text-red-500 font-roboto text-2xl">{`$${(totalPrice).toFixed(2)}`}</span>
                </div>
                <button className="px-[5rem] py-3 bg-red-500 text-white">
                    Check out
                </button> 
            </div> 
            <RemoveSelectedItemConfirmation totalItemSelected={totalItemSelected} isOpenModal={isOpenModal} handleYesButton={handleYesButton} handleNoButton={handleNoButton} />
        </div>
        
    );
};

export default CheckOut;
