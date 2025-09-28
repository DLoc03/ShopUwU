import { PATHS } from "@/constants";
import React, { useRef, useState } from "react";
import HeaderItem from "../common/HeaderItem";
import Logo from "../common/Logo";

import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import IconButton from "../common/IconButton";
import { IconButtonStyle } from "@/style";

const menus = [
  {
    name: "Trang chủ",
    path: PATHS.HOME,
  },
  {
    name: "Sản phẩm",
    path: PATHS.PRODUCT,
  },
  {
    name: "Liên hệ",
    path: PATHS.CONTACT,
  },
];

function Header({ headerHidden }) {
  const inputRef = useRef(null);
  const [keyword, setKeyword] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      console.log("Kết quả tìm kiếm: ", keyword);
    }
  };

  return (
    <div
      className={`shadow-main fixed top-8 left-1/2 flex w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center rounded-full px-4 py-4 transition-all duration-300 md:px-8 lg:mx-0 ${headerHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="flex-1">
        <Logo className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
      </div>
      <div className="hidden flex-8 items-center justify-center gap-8 lg:flex">
        {menus.map((menu, index) => (
          <HeaderItem
            key={index}
            name={menu.name}
            path={menu.path}
            className={"text-lg"}
          />
        ))}
      </div>
      <div className="flex flex-1 items-center justify-end gap-2">
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch}>
            <input
              ref={inputRef}
              type="text"
              value={keyword}
              placeholder={"Tìm kiếm"}
              onChange={(e) => setKeyword(e.target.value)}
              className={`rounded-full border border-gray-200 px-4 py-3 text-sm transition-all duration-500 ease-in-out focus:outline-none ${openSearch ? "w-52 opacity-100 xl:w-80" : "w-0 border-0 p-0 opacity-0"}`}
            />
          </form>
          <IconButton
            onClick={() => setOpenSearch(!openSearch)}
            className={`${IconButtonStyle} text-gray-500 hover:bg-gray-200 hover:text-white`}
          >
            <CiSearch className="hidden h-full w-full md:block" />
          </IconButton>
        </div>

        <IconButton
          className={`${IconButtonStyle} cursor-pointer rounded-full bg-black transition-transform duration-500 hover:rotate-360 lg:h-12 lg:w-12`}
        >
          <CiShoppingCart className="h-full w-full font-medium text-white" />
        </IconButton>
        <IconButton
          className={`${IconButtonStyle} active:rotate-90 active:bg-gray-200 active:text-white`}
        >
          <CiMenuFries className="h-full w-full" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
