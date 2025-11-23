import { MENU_BAR } from "@/constants/menu";
import { PATHS } from "@/constants/path";
import { useCommonNavigate } from "@/contexts/HandleNavigate";
import { Bell, Home, ShoppingBag, ShoppingCart } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";

function AppBar() {
  const location = useLocation();
  const navigate = useCommonNavigate();
  const icons = {
    home: <Home size={28} />,
    cart: <ShoppingBag size={28} />,
    product: <ShoppingCart size={28} />,
  };
  const menus = MENU_BAR;
  const activeStyle = "border-t border-black text-black";
  const normalStyle = "text-gray-500 ";
  return (
    <div className="flex h-16 w-full items-center justify-between border border-gray-200 px-4 shadow-sm">
      <button
        className={`${location.pathname === menus[0].path ? activeStyle : normalStyle} flex h-full w-full items-center justify-center`}
        onClick={() => navigate(menus[0].path)}
      >
        {icons[menus[0].name]}
      </button>
      <button
        className={`${location.pathname === menus[1].path ? activeStyle : normalStyle} flex h-full w-full items-center justify-center`}
        onClick={() => navigate(menus[1].path)}
      >
        {icons[menus[1].name]}
      </button>
      <button
        className={`${location.pathname === PATHS.NOTIFY ? activeStyle : normalStyle} flex h-full w-full items-center justify-center`}
        onClick={() => navigate(PATHS.NOTIFY)}
      >
        <Bell size={28} />
      </button>
      <button
        className={`${location.pathname === PATHS.CART ? activeStyle : normalStyle} flex h-full w-full items-center justify-center`}
        onClick={() => navigate(PATHS.CART)}
      >
        <ShoppingBag size={28} />
      </button>
    </div>
  );
}

export default AppBar;
