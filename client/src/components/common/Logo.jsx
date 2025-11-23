import { PATHS } from "@/constants/path";
import { useCommonNavigate } from "@/contexts/HandleNavigate";
import React from "react";

function Logo({ className = "w-14 h-14" }) {
  const navigate = useCommonNavigate();
  return (
    <div
      className={`${className} cursor-pointer`}
      onClick={() => navigate(PATHS.HOME)}
    >
      <img
        src="/logo.png"
        alt="logo"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default Logo;
