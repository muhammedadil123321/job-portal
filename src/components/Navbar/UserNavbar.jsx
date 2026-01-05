import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";


function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
 
  if (!isHomePage) {
    setShowNav(true);
    return;
  }

const handleScroll = () => {
    if (window.scrollY > 60) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  handleScroll(); // initial check on load
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [isHomePage]);


 

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur
        ${showNav || isOpen ? "bg-white shadow-lg" : "bg-transparent"}
        py-4 px-6 md:px-16 lg:px-24 xl:px-32
      `}
    >
      <div className="flex items-center justify-between w-full">
        {/* LOGO */}

       <div
  className={`flex items-center gap-2 transition-colors ${
    showNav || isOpen ? "text-gray-900" : "text-white"
  }`}
>

          <svg
            className="w-10 h-10"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6"
              y="14"
              width="36"
              height="22"
              rx="4"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M16 14V11C16 9.9 16.9 9 18 9H30C31.1 9 32 9.9 32 11V14"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M6 24H42"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle cx="24" cy="24" r="2.5" fill="currentColor" />
          </svg>

          <span
            className={`font-outfit text-2xl font-bold transition-colors duration-300
     ${showNav || isOpen ? "text-gray-900" : "text-white"}
    `}
          >
            Earnease
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex items-center gap-8 font-semibold
    ${showNav ? "text-gray-900" : "text-white"}
  `}
        >
          {/* For Student – Dropdown */}
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <NavLink to="/" className="hover:text-slate-300 transition">
              For Student
            </NavLink>

            {/* Arrow */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 group-hover:rotate-180
        ${showNav ? "stroke-gray-900" : "stroke-white"}
      `}
            >
              <path
                d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Dropdown */}
            <div
              className="absolute top-10 left-0 min-w-[180px]
        bg-white text-gray-700 font-normal
        rounded-lg shadow-lg p-4
        opacity-0 invisible -translate-y-3
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
        transition-all duration-300 z-50"
            >
              <NavLink
                to="/student/jobs"
                className="block py-1 hover:translate-x-1 hover:text-blue-600 transition"
              >
                Find Jobs
              </NavLink>
              <NavLink
                to=""
                className="block py-1 hover:translate-x-1 hover:text-blue-600 transition"
              >
                Register to Apply
              </NavLink>
              <NavLink
                to=""
                className="block py-1 hover:translate-x-1 hover:text-blue-600 transition"
              >
                Login to Apply
              </NavLink>
              <NavLink
                to=""
                className="block py-1 hover:translate-x-1 hover:text-blue-600 transition"
              >
                My History
              </NavLink>
            </div>
          </div>

          {/* For Student – Dropdown */}
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <span className="hover:text-slate-300 transition">
              For Employer
            </span>

            {/* Arrow */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 group-hover:rotate-180
        ${showNav ? "stroke-gray-900" : "stroke-white"}
      `}
            >
              <path
                d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Dropdown */}
            <div
              className="absolute top-10 left-0 min-w-[180px]
        bg-white text-gray-700 font-normal
        rounded-lg shadow-lg p-4
        opacity-0 invisible -translate-y-3
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
        transition-all duration-300 z-50"
            >
              <NavLink
                to="/student/jobs"
                className="block py-1 hover:translate-x-1 hover:text-blue-600 transition"
              >
                Register to Post
              </NavLink>
              <NavLink
                to=""
                className="block py-1 hover:translate-x-1 hover:text-blue-600 transition"
              >
                Login to Post
              </NavLink>
            </div>
          </div>

          {/* Other Nav Items */}
          <NavLink to="/findjob" className="hover:text-slate-300 transition">
            Find Jobs
          </NavLink>

          <NavLink to="/about" className="hover:text-slate-300 transition">
            About
          </NavLink>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:block space-x-3">
          <NavLink
            to="/login"
            className={` transition px-6 py-2.5  font-semibold  rounded-sm  ${
              showNav
                ? "text-white bg-blue-700 hover:bg-blue-800 border-blue-600 border-2"
                : "text-white  border-2 border-blue-800 bg-blue-700 hover:bg-blue-800"
            }`}
          >
            Login
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={toggleMenu}
          className={`md:hidden transition ${
            showNav || isOpen ? "text-gray-900" : "text-white"
          }`}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU (UNCHANGED BEHAVIOR) */}
      {isOpen && (
        <div className="md:hidden mt-6 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col">
            {/* For Student */}
            <div className="px-6 py-4 border-b border-gray-200">
              <p className="font-semibold text-gray-900 mb-3">For Student</p>

              <NavLink
                to="/student/jobs"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                Find Jobs
              </NavLink>

              <NavLink
                to="/student/register"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                Register to Apply
              </NavLink>

              <NavLink
                to="/student/login"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                Login to Apply
              </NavLink>

              <NavLink
                to="/student/history"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                My History
              </NavLink>
            </div>

            {/* For Employer */}
            <div className="px-6 py-4 border-b border-gray-200">
              <p className="font-semibold text-gray-900 mb-3">For Employer</p>

              <NavLink
                to="/employer/register"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                Register to Post
              </NavLink>

              <NavLink
                to="/employer/login"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                Login to Post
              </NavLink>
            </div>

            {/* Common Links */}
            <div className="px-6 py-4 border-b border-gray-200">
              <NavLink
                to="/findjob"
                onClick={() => setIsOpen(false)}
                className="block py-2 font-semibold text-gray-900 hover:text-blue-600"
              >
                Find Jobs
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block py-2 font-semibold text-gray-900 hover:text-blue-600"
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default UserNavbar;
