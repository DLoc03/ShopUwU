import React, { useState } from "react";

import { MENU_BAR } from "@/constants/menu";
import HeaderItem from "../common/HeaderItem";
import IconButton from "../common/IconButton";
import { ShoppingBag } from "lucide-react";

function Header() {
  const menus = MENU_BAR;
  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full border-b-white bg-transparent px-4 py-6 md:px-8`}
    >
      {/* Desktop */}
      <div className="flex items-center justify-between">
        {/* Title */}
        <h1 className="font-slay text-4xl text-white text-shadow-2xs">
          Chedi Shop
        </h1>
        <div className={`hidden items-center gap-3 md:flex`}>
          {menus.map((menu) => (
            <HeaderItem
              key={menu.name}
              name={menu.label}
              path={menu.path}
              className={"border-2 border-white"}
            />
          ))}
          <IconButton className="border-2 border-white text-white">
            <ShoppingBag />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
