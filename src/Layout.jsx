import React from "react";
import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
