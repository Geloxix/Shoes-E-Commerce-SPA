import { Products } from "../constants/types";
import CartItems from "../Components/CartItems";

const CartPage = ({ cartItems }: { cartItems: Products[]}) => {
   return (
      <section className="bg-light-gray h-screen">
         <div className="mx-[1rem]">
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
         </div>
      </section>
   );
};

export default CartPage;
