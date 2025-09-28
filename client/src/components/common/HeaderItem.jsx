import { useCommonNavigate } from "@/contexts/HandleNavigate";
import React from "react";
import { useLocation } from "react-router-dom";

function HeaderItem({ className, children, name, path }) {
  const location = useLocation();
  const navigate = useCommonNavigate();
  const isActive = path === location.pathname;
  return (
    <div
      className={`${className} flex gap-4 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"} relative inline-block cursor-pointer px-2 py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:after:w-full`}
      onClick={() => navigate(path)}
    >
      {children}
      <h1>{name}</h1>
    </div>
  );
}

export default HeaderItem;
