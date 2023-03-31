import React from "react";
import SidebarItem from "./SidebarItem";
import item from "../item.json";
const Sidebar = () => {
  return (
    <div className="">
      {item.map((item, index) => {
        return <SidebarItem key={index} item={item} />;
      })}
    </div>
  );
};

export default Sidebar;
