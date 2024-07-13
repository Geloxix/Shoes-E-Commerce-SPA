import { Products } from "../constants/types";

const CartPage = ({ cartItems }) => {
   return (
      <section>
         <div className="mx-[1rem]">
            <ul>
               {
                  cartItems.map((cartItem: Products) => (
                     <li key={cartItem.id}>
                        <h1>{ cartItem.name }</h1>
                     </li>
                  ))
               }
            </ul>
         </div>
      </section>
   );
};

export default CartPage;
