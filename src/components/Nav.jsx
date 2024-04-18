import React, { useState, useEffect } from "react";
import Header from "./Header";
import HeaderRight from "./HeaderRight";
import logo from "../assets/CATCH22 v2.png";

function Nav() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", checkScreenSize);

    checkScreenSize();

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className="border-4 border-b-0 border-black">
      {isSmallScreen ? (
        <div>
          <img className="h-16 mx-auto" src={logo} alt="logo" />
        </div>
      ) : (
        <div className="grid grid-cols-2 grid-rows-1">
          <Header />
          <HeaderRight />
        </div>
      )}
    </nav>
  );
}

export default Nav;
