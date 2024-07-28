import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Products } from "./constants/types";
import { useCartStore } from "./constants/store";

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
   const { decrementCartQuantity } = useCartStore();
   const [ products, setProducts ] = useState<Products[]>([]);
   const [ loading, setLoading ] =  useState<boolean>(true);
   const [ cartItems, setCartItems ] = useState<Products []>([]); 

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

      const fetchCart = async() => {
         try {
            const res = await axios.get(`/cartApi/cart`);
            setCartItems(res.data);
         } catch (e) {
            console.log("Error", e);
         }
      };

      fetchCart();
      fetchProducts();
   },[]);

   //manipulating cart json data
   const handleAddItem = async(item: Products) => {
      try {
         await axios.post('/cartApi/cart' ,item);
         setCartItems(prevCartItems => [...prevCartItems, item]);
      } catch (e) {
         console.log("ERROR", e);
      }

   };

   const handleRemoveCartItem = async(id: number) => {
      try {
         const API_URL = `/cartApi/cart/${id}`;
         await axios.delete(API_URL);
         setCartItems(cartItems.filter((item: Products) =>  item.id !== id));
         decrementCartQuantity();
      } catch (e) {
         console.log("ERROR", e);
      }
   };

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
               element: <ProductPage cartItems={cartItems} handleAddItem={handleAddItem} />,
               loader: productLoader,
            },
            {
               path: '/cart',
               element: <CartPage cartItems={cartItems} handleRemoveCartItem={handleRemoveCartItem} setCartItems={setCartItems}  />,
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
