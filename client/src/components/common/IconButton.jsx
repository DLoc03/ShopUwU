import React from "react";

function IconButton({ icon, onClick, className = "h-10 w-10 ", children }) {
  const Icon = icon;
  return (
    <button
      className={`${className} cursor-pointer rounded-full p-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconButton;
