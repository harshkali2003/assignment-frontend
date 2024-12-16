import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const auth = localStorage.getItem("User");
  const RemoveUser = (e) =>{
    e.preventDefault()
    localStorage.clear()
    navigate('/')
  }
  return (
    <>
      <nav className="bg-sky-700 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
            <span className="font-thin">Dashboard</span>
          </div>
          {/* Hamburger Menu */}
           
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
         
          {/* Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:items-center`}
          >
            <ul className="lg:flex lg:space-x-6 text-lg">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-purple-700 rounded-md"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/analytics"
                  className="block px-4 py-2  hover:bg-purple-700 rounded-md"
                >
                  Analytics
                </Link>
              </li>
             

              {auth ? (
                <>
                     <li>
                <Link
                  to="/setting"
                  className="block px-4 py-2  hover:bg-purple-700 rounded-md"
                >
                  Settings
                </Link>
              </li>
                  <li>
                    <button
                    onClick={RemoveUser}
                      className="block px-4 py-2  hover:bg-purple-700 rounded-md"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2  hover:bg-purple-700 rounded-md"
                  >
                    Register
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
