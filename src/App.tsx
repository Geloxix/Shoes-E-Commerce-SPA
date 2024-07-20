import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useState, useEffect } from "react";
import { Products } from "./constants/types";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

//PAGES
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage, { productLoader } from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import CartPage from "./Pages/CartPage";
import ContactPage from "./Pages/ContactPage";

const App = () => {
   const [ products, setProducts ] = useState([]);
   const [ loading, setLoading ] = useState<boolean>(true);
   const [ cartItems, setCartItem ] = useState<Products[]>(() => {
      const savedNewProducts = localStorage.getItem("cartItem");
      return savedNewProducts ? JSON.parse(savedNewProducts) : [];
   });   

   
   useEffect(() => {
      const fetchProducts = async() => {
         try {
            const res = await axios.get(`/api/products`);
            setProducts(res.data);
         } catch (e) {
            console.error("Error", e);
         } finally {
            setLoading(false);
         } 
      };

      fetchProducts();
   },[]);

   const router = createBrowserRouter([
      {
         path: '/',
         element: <MainLayout />,
         errorElement: <NotFoundPage />,
         children: [
            {
               path: '/',
               element: <HomePage products={products} />
            },
            {
               path: '/about',
               element: <AboutPage />
            },
            {
               path: '/products',
               element: <ProductsPage products={products} loading={loading} />
            },
            {
               path: '/products/:productId',
               element: <ProductPage setCartItem={setCartItem} cartItems={cartItems} />,
               loader: productLoader,
            },
            {
               path: '/cart',
               element: <CartPage cartItems={cartItems} />,
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
