import { useState } from "react";
import SearchBar from "./SearchBar";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Header({
  handleSearchChange,
  handleSearchClick,
  searchTerm,
  shows,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-green-500 p-4 z-0">
        <div className="container mx-auto flex items-center justify-between">
          {/* Menu Items */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Top
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <SearchBar
              handleSearchChange={handleSearchChange}
              handleSearchClick={handleSearchClick}
              searchTerm={searchTerm}
              shows={shows}
            />
          </div>

          <div className="flex space-x-4 items-center">
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div className="block md:hidden mt-4">
          {isOpen && (
            <SearchBar
              handleSearchChange={handleSearchChange}
              handleSearchClick={handleSearchClick}
              searchTerm={searchTerm}
              shows={shows}
            />
          )}
        </div>
      </nav>

      {isOpen && (
        <div className="bg-gray-300 p-4 md:hidden">
          <a href="#" className="block text-white hover:text-gray-300 mb-2">
            Home
          </a>
          <a href="#" className="block text-white hover:text-gray-300 mb-2">
            About
          </a>
          <a href="#" className="block text-white hover:text-gray-300 mb-2">
            Services
          </a>
        </div>
      )}
    </>
  );
}
