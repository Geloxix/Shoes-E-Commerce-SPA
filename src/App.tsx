import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { useState } from "react";
import { Products } from "./constants/types";

//PAGES
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage, { productLoader } from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import CartPage from "./Pages/CartPage";


const App = () => {
   const [ cartItems, setCartItem ] = useState<Products[]>(() => {
      const savedNewProducts = localStorage.getItem("cartItem");
      return savedNewProducts ? JSON.parse(savedNewProducts) : [];
   });

   console.log(cartItems);
   

   const router = createBrowserRouter([
      {
         path: '/',
         element: <MainLayout />,
         errorElement: <NotFoundPage />,
         children: [
            {
               path: '/',
               element: <HomePage />
            },
            {
               path: '/about',
               element: <AboutPage />
            },
            {
               path: '/products',
               element: <ProductsPage />
            },
            {
               path: '/products/:productId',
               element: <ProductPage setCartItem={setCartItem} cartItems={cartItems} />,
               loader: productLoader,
            },
            {
               path: '/cart',
               element: <CartPage cartItems={cartItems} />
            }
         ]
      }
   ])

   return (
      <RouterProvider router={router} />
   )
};

export default App;
