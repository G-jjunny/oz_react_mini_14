import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Item from "./pages/Item";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

const Layout = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden  bg-gray-100 ">
      <Navbar />
      <div className=" pt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

//  경로가 /detail
