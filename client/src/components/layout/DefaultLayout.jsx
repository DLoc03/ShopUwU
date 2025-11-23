import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppBar from "./AppBar";

function DefaultLayout({ children, fullHeight, fullWidth }) {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div>
      <Header
        headerHidden={headerHidden}
        onToggleSidebar={() => setToggleSidebar(true)}
      />
      <div className={`${!fullWidth ? "max-w-7xl" : "max-w-full"}`}>
        {children}
      </div>
      <div
        className={`fixed bottom-0 left-0 z-10 w-full md:hidden ${headerHidden ? "-translate-y-full" : "translate-y-0"} transform duration-200`}
      >
        <AppBar />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
