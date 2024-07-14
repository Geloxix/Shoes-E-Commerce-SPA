import { Products } from "../constants/types";

const CartItems = ({ cartItem }: { cartItem: Products } ) => {
   return (
      <div className="mx-[12rem] bg-white mb-2">
         <div className="flex items-center justify-between shadow-sm px-[5rem]">
            <div className="flex items-center justify-center">
               <img 
                  src={cartItem.img} alt={cartItem.name} 
                  className="w-[200px]"
               />
               <p className="w-[200px] text-[0.90em] mt-[-30px]">{ cartItem.name }</p>
            </div>
            <div className="flex items-center justify-center">
               <button className="increment-decrement-quantity">-</button>
               <p className="px-6 py-1 border-t-[1.5px] border-b-[1.5px]">0</p>
               <button className="increment-decrement-quantity">+</button>
            </div>
            <p>{`$${cartItem.priceCents}`}</p>
            <button className="text-red-500">Delete</button>
         </div>
      </div>
   );
};

export default CartItems;
