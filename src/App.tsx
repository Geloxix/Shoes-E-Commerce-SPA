import { createBrowserRouter, RouterProvider } from "react-router-dom";

//PAGES
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {

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
            }
         ]
      }
   ])

   return (
      <RouterProvider router={router} />
   )
};

export default App;
