import { useCommonNavigate } from "@/contexts/HandleNavigate";
import React from "react";
import { useLocation } from "react-router-dom";

function HeaderItem({ className, children, name, path }) {
  const location = useLocation();
  const navigate = useCommonNavigate();
  const isActive = path === location.pathname;
  return (
    <div
      className={`${isActive ? "text-primary bg-white" : "text-white"} cursor-pointer rounded-full px-3 py-2 ${className}`}
      onClick={() => navigate(path)}
    >
      {children}
      {name && <h1>{name}</h1>}
    </div>
  );
}

export default HeaderItem;
