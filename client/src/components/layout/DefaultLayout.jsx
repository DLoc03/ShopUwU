import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
      <Header headerHidden={headerHidden} />
      <div
        className={`${!fullWidth ? "max-w-7xl" : "max-w-full px-4 md:px-8"}`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
