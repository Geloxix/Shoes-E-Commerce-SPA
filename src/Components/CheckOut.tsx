import { useCartStore } from "../constants/store";

const CheckOut = ({ totalPrice } ) => {
   const cartQuantity = useCartStore((state) => state.cartQuantity);

   // const savedTotalPrice = localStorage.getItem('totalPrice');
   // const totalPrice = savedTotalPrice ? JSON.parse(savedTotalPrice) : 0;

   return (
      <div className="mx-[12rem] mt-[3rem]">
         <div className="h-[150px] flex items-end justify-between w-full py-[1rem] px-[5rem] bg-white">
            
            <div className="flex gap-5">
               <label className="flex gap-2" >
                  <input 
                     type="checkbox"
                     name="product" 
                     className="w-[30px] border-2" 
                  />
                  <p>{`Select All(${cartQuantity})`}</p>
               </label>
               <button>
                  delete
               </button>
            </div>
            
            <div className="flex gap-5">
               <div className="flex items-center gap-2">
                  <p>{`Total:(${cartQuantity} items)`}</p>
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
