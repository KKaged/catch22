import React, { useState, useEffect } from "react";
import logo from "../assets/CATCH22 v2.png";
import { Link } from "react-router-dom";

function Nav({ rightChildren, leftChildren }) {
  const socialMedia = [
    {
      name: "tw",
      link: "https://twitter.com",
      style:
        "text-xl font-bold hover:text-sky-400 hover:underline underline-offset-4",
    },
    {
      name: "fb",
      link: "https://facebook.com",
      style:
        "text-xl font-bold hover:text-blue-600 hover:underline underline-offset-4",
    },
    {
      name: "ig",
      link: "https://instagram.com",
      style:
        "text-xl font-bold hover:text-pink-600 hover:underline underline-offset-4",
    },
  ];
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
          <div className="h-32 px-6 border-4 border-black border-b-0 flex flex-col md:flex-row justify-between items-center">
            <div>
              <Link to={"/"}>
                <img className="h-16" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="md:w-52">
              <p className="text-center md:text-right text-xl font-medium tracking-wide leading-7">
                {leftChildren}
              </p>
            </div>
          </div>
          <div className="px-6 border-4 border-black flex flex-col md:flex-row border-b-0 justify-between items-center">
            <div className="flex flex-col md:flex-row gap-2">
              {socialMedia.map((item, index) => (
                <>
                  <a key={index} href={item.link} className={item.style}>
                    {item.name}
                  </a>
                  {index < 2 && <span className="font-bold text-xl">•</span>}
                </>
              ))}
            </div>
            <div className="text-center md:text-right">{rightChildren}</div>
          </div>{" "}
        </div>
      )}
    </nav>
  );
}

export default Nav;
