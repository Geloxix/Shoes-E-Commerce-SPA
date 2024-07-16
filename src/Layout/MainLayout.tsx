import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar";

const MainLayout = () => {
   return (
      <main className="h-screen">
         <Navbar />
         <Outlet />
      </main>
   );
};

export default MainLayout;
