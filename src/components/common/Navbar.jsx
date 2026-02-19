import React from "react";
import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <nav className="sticky z-50 top-0  bg-white/30 border-b border-gray-200 backdrop-blur-3xl flex items-center gap-1 p-3 justify-center ">
      <div className="flex items-center">
        <Icon color="blue" icon="majesticons:send" width="50" height="50" />
      </div>
      <div className="text-center">
        <h1 className="text-[27px] font-bold">Smart Route Planner</h1>
        <p className="leading-none">
          Optimize your journey, save time and money
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
