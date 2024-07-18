import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useState } from "react";
import { Products } from "./constants/types";
import "react-toastify/dist/ReactToastify.css";

//PAGES
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage, { productLoader } from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import CartPage from "./Pages/CartPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";

const App = () => {
   const [ cartItems, setCartItem ] = useState<Products[]>(() => {
      const savedNewProducts = localStorage.getItem("cartItem");
      return savedNewProducts ? JSON.parse(savedNewProducts) : [];
   });   

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
            },
            {
               path: '/blog',
               element: <BlogPage />
            },
            {
               path: '/contact',
               element: <ContactPage />
            }
         ]
      }
   ])

   return (
      <RouterProvider router={router} />
   )
};

export default App;
