import React from "react";

function Button({ label, children, onClick, className }) {
  return (
    <button
      className={`flex cursor-pointer items-center gap-2 ${className}`}
      onClick={onClick}
    >
      {children && <div>{children}</div>}
      <p>{label}</p>
    </button>
  );
}

export default Button;
