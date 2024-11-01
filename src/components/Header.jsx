import { useState } from "react";
import SearchBar from "./SearchBar"; // Original SearchBar component
import { MenuIcon, XIcon } from "@heroicons/react/outline";
<<<<<<< HEAD

import { useNavigate } from "react-router-dom";
=======
import SignIn from "./SignIn.jsx";
>>>>>>> origin/main

export default function Header({
  handleSearchChange,
  handleSearchClick,
  searchTerm,
  shows,
<<<<<<< HEAD
}) {
  const navigate = useNavigate();
=======
  handleLogin,
}) {
>>>>>>> origin/main
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-green-500 p-4 z-0">
        <div className="container mx-auto flex items-center justify-between p-1">
          <div className="flex items-center ml-0">
            <img src="/logo.png" alt="logo" className="h-18 w-16" />
<<<<<<< HEAD

=======
            {/* Menu items next to logo in desktop mode */}
>>>>>>> origin/main
            <div className="hidden md:flex space-x-4 ml-4">
              <a
                href="#"
                className="text-gray-950 font-roboto-condensed font-bold hover:text-gray-600"
<<<<<<< HEAD
                onClick={() => navigate("/trending")}
=======
>>>>>>> origin/main
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-950 font-roboto-condensed font-bold hover:text-gray-600"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-950 font-roboto-condensed font-bold hover:text-gray-600"
              >
                Top
              </a>
              <a
                href="#"
                className="text-gray-950 font-roboto-condensed font-bold hover:text-gray-600"
<<<<<<< HEAD
                onClick={() => navigate("/auth")}
=======
                onClick={handleLogin}
>>>>>>> origin/main
              >
                Sign In
              </a>
            </div>
          </div>

<<<<<<< HEAD
          <div className="flex-grow flex justify-center mt-4 md:mt-0">
=======
          {/* Conditional Rendering for Search Bars */}
          <div className="flex-grow flex justify-center mt-4 md:mt-0">
            {/* Original Search Bar for Desktop */}
>>>>>>> origin/main
            <div className="hidden md:block w-full max-w-xs">
              <SearchBar
                handleSearchChange={handleSearchChange}
                handleSearchClick={handleSearchClick}
                searchTerm={searchTerm}
                shows={shows}
              />
            </div>

<<<<<<< HEAD
=======
            {/* Smaller Search Bar for Mobile */}
>>>>>>> origin/main
            <div className="md:hidden relative w-full mr-3  mb-3 max-w-xs">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="border rounded-full py-1 px-3 focus:outline-none focus:ring focus:ring-green-300 transition duration-150 ease-in-out w-full"
              />
              <button
                onClick={handleSearchClick}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white bg-green-500 rounded-full p-1"
              >
                Search
              </button>
            </div>
          </div>
<<<<<<< HEAD
          <a
            href="#"
            className="text-gray-950 font-roboto-condensed font-bold hover:text-gray-600"
            onClick={() => navigate("/profile")}
          >
            Profile
          </a>

=======

          {/* Hamburger menu icon for mobile view */}
>>>>>>> origin/main
          <div className="flex items-center justify-end md:hidden">
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="bg-green-300 flex flex-col p-4 md:hidden">
            <a
              href="#"
              className="text-gray-950 font-roboto-condensed font-bold hover:text-gray-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-950 font-roboto-condensed font-bold hover:text-gray-600"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-950 font-roboto-condensed font-bold hover:text-gray-600"
            >
              Top
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
