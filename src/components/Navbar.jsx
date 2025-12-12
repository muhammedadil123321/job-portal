import React, { useEffect, useState } from "react";
import { Menu, X, Building2, Home, Search, Info } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fast scroll detection – no lag or delay
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 60); // appears quicker (60px instead of 100px)
    };

    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ ]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 
    ${showNav || isOpen ? "bg-white shadow-lg" : "bg-transparent"}
  `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className={`font-outfit bg-gradient-to-r bg-clip-text text-transparent text-2xl font-bold
              ${showNav ? " from-blue-400 to-gray-900" :" from-white to-gray-200"}`}>
            
              Earnease
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden min-[847px]:flex items-center space-x-8">
            <NavLink
              to="/"
              className={`flex items-center space-x-2 transition duration-200 font-medium font-outfit
      ${
        showNav
          ? "text-black hover:text-gray-700"
          : "text-white hover:text-gray-300"
      }
    `}
            >
              <Home
                className={`h-5 w-5
      ${showNav ? "text-blue-700" : "text-blue-500"}
    `}
              />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/findjob"
              className={`flex items-center space-x-2 transition duration-200 font-medium font-outfit
      ${
        showNav
          ? "text-black hover:text-gray-700"
          : "text-white hover:text-gray-300"
      }
    `}
            >
              <Search
                className={`h-5 w-5
      ${showNav ? "text-blue-700" : "text-blue-500"}
    `}
              />
              <span>Find Jobs</span>
            </NavLink>

            <NavLink to="/about"
              
              className={`flex items-center space-x-2 transition duration-200 font-medium font-outfit
      ${
        showNav
          ? "text-black hover:text-gray-700"
          : "text-white hover:text-gray-300"
      }
    `}
            >
              <Info
                className={`h-5 w-5
      ${showNav ? "text-blue-700" : "text-blue-500"}
    `}
              />
              <span>About</span>
            </NavLink>
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-300">
              <NavLink
                to="/login"
                 className={` font-outfit text-white font-semibold px-6 py-2 rounded-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105
                  ${showNav ? "text-white bg-gray-800 hover:bg-gray-900 " : " border-2 border-white/70"}`}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={`bg-blue-700 hover:bg-blue-800 font-outfit text-white font-semibold px-6 py-2 rounded-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105
                 `}
              >
                Sign Up
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="min-[847px]:hidden">
            <button
              onClick={toggleMenu}
              className={`text-gray-700 hover:text-purple-900 focus:outline-none
                ${showNav ? "text-gray-900 hover:text-gray-800" : " text-white hover:text-gray-400"}
              `}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2 ">
            <div className="flex flex-col space-y-3 pt-3">
              <a
                href="#home"
                className="flex items-center space-x-3 text-gray-700 hover:text-purple-900 transition duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </a>
              <a
                href="#find-jobs"
                className="flex items-center space-x-3 text-gray-700 hover:text-purple-900 transition duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                <Search className="h-5 w-5" />
                <span>Find Jobs</span>
              </a>

              <a
                href="#about"
                className="flex items-center space-x-3 text-gray-700 hover:text-purple-900 transition duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                <Info className="h-5 w-5" />
                <span>About</span>
              </a>

              <a
                href="#login"
                className="bg-gradient-to-br from-gray-100 to-gray-300 hover:bg-gray-50 text-gray-900 font-semibold text-center py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>

              <a
                href="#signup"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
