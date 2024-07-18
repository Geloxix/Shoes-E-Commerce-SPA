import { Products } from "../constants/types";
import CartItems from "../Components/CartItems";
import emptyCart from "../assets/images/empty-cart.png";

const CartPage = ({ cartItems }: { cartItems: Products[]}) => {
   return (
      <section className="bg-light-gray h-full flex items-start justify-center">
         <div className="mx-[1rem] w-full">
            {
               cartItems.length !== 0 ? (
                  <ul className="mt-[1rem] p-3">
                     {
                        cartItems.map((cartItem: Products) => (
                           <CartItems  
                              key={cartItem.id}
                              cartItem={cartItem}
                           />
                        ))
                     }
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
