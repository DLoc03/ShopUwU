import React, { useState } from "react";

import { MENU_BAR } from "@/constants/menu";
import HeaderItem from "../common/HeaderItem";
import IconButton from "../common/IconButton";
import { MenuIcon, ShoppingBag } from "lucide-react";

function Header() {
  const menus = MENU_BAR;
  return (
    <header className={`bg-transparent px-4 py-6 md:px-8`}>
      {/* Desktop */}
      <div className="flex items-center justify-between">
        {/* Title */}
        <h1 className="font-slay text-4xl text-shadow-2xs">Chedi shop</h1>
        <div className="flex items-center gap-3">
          <div className={`hidden items-center gap-3 md:flex`}>
            {menus.map((menu) => (
              <HeaderItem
                key={menu.name}
                name={menu.label}
                path={menu.path}
                className={"border-2 border-black"}
              />
            ))}
          </div>
          <IconButton className="border-2 border-black md:hidden">
            <MenuIcon />
          </IconButton>
          <IconButton className="border-2 border-black">
            <ShoppingBag />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
