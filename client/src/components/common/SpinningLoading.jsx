import React from "react";

export default function SpinningLoading({ show = false }) {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255,255,255,0.6)",
        zIndex: 9999,
      }}
    >
      <div className="relative flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="relative z-10 h-20 w-20 object-contain"
        />

        <div className="border-primary absolute h-28 w-28 animate-spin rounded-full border-4 border-t-transparent"></div>
      </div>
    </div>
  );
}
