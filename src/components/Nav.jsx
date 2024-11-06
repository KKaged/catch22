import React, { useState, useEffect } from "react";
import logo from "../assets/CATCH22 v2.png";
import { Link } from "react-router-dom";

function Nav() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center p-4">
        {/* Centered Logo and Links */}
        <div className="flex items-center justify-center space-x-4">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-8" alt="Catch22 Logo" />
          </a>
          <div className="hidden md:flex">
            <ul className="flex space-x-4 text-xl">
              <li>
                <Link
                  to="/"
                  className="py-2 px-3 text-gray-900 hover:text-blue-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="py-2 px-3 text-gray-900 hover:text-blue-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="py-2 px-3 text-gray-900 hover:text-blue-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="py-2 px-3 text-gray-900 hover:text-blue-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 absolute right-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-2 bg-white border-t border-gray-200 py-4">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-gray-900 hover:text-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-4 text-gray-900 hover:text-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-4 text-gray-900 hover:text-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-4 text-gray-900 hover:text-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
