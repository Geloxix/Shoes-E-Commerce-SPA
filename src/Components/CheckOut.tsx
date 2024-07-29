import { useCartStore } from "../constants/store";
import { Products } from "../constants/types";


const CheckOut = ({ cartItems }: { cartItems: Products[] }) => {
   const cartQuantity = useCartStore((state) => state.cartQuantity);
   const totalItemSelected = useCartStore((state) => state.totalItemSelected);
   
   // filter to include only the items where isChecked is true. then sum up the price of all checked items
   const totalPrice = cartItems.filter(item => item.isChecked).reduce((sum, currentItem) => sum + currentItem.priceCents ,0);

   return (
      <div className="mx-[12rem] mt-[3rem]">
         <div className="h-[120px] flex items-end justify-between w-full py-[1rem] px-[5rem] bg-white">
            
            <div className="flex gap-5 items-center justify-center">
               <input 
                  type="checkbox"
                  name="product" 
                  className="w-[30px] border-2" 
                  width={30}
               />
               <p>{`Select All(${cartQuantity})`}</p>
               <button 
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

         </div>
      </div>
      
   );
};

export default CheckOut;
