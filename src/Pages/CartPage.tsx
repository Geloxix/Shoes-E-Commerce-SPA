import { useState } from "react";

import { Products } from "../constants/types";
import CartItems from "../Components/CartItems";
import CheckOut from "../Components/CheckOut";
import emptyCart from "../assets/images/empty-cart.png";

//Cartpage types props
interface CartPageProps {
   cartItems: Products[];
   handleRemoveCartItem: (id: number) => void;
   setCartItems: any;
};


const CartPage = ({ cartItems, handleRemoveCartItem, setCartItems }: CartPageProps ) => {   
    const [ totalItemSelected, setTotalItemSelected ] = useState<number>(0);

    return (
        <section className="bg-light-gray min-h-full flex items-start justify-between flex-col mb-[2rem] pt-[6rem]">
            <div className="mx-[1rem] w-full">
                {
                    cartItems.length !== 0 ? (
                        <ul className="mt-[1rem]">
                            {
                                cartItems.map((cartItem: Products) => (
                                    <CartItems 
                                        cartItems={cartItems}
                                        handleRemoveCartItem={handleRemoveCartItem}
                                        setCartItems={setCartItems}
                                        key={cartItem.id}
                                        cartItem={cartItem}
                                        setTotalItemSelected={setTotalItemSelected}
                                        totalItemSelected={totalItemSelected}
                                    />
                                ))
                            }
                            <CheckOut cartItems={cartItems}  setCartItems={setCartItems} totalItemSelected={totalItemSelected} 
                            setTotalItemSelected={setTotalItemSelected} />
                        </ul>
                    ) :
                    <div className="flex items-center justify-center my-[10%] flex-col gap-5">
                        <img 
                            src={emptyCart} 
                            alt="Empty cart image" 
                            className="w-[180px]"
                        />
                        <h1 className="text-[0.90em] font-semibold">Your shopping cart is empty</h1>
                    </div>
                }
            </div>
        </section>
    );
};

export default CartPage;
