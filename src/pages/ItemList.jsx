import React from "react";
import { Outlet } from "react-router";

const ItemList = () => {
  return (
    <div>
      itemlist
      <Outlet />
    </div>
  );
};

export default ItemList;
