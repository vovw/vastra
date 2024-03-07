"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-transparent px-6 py-4">
      <div className="text-lg font-bold">
        <Link href="/" className="text-3xl text-white">
          🧵🧶🪡
        </Link>
      </div>
      <div className="flex md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:flex md:w-auto md:items-center`}
      >
        <ul className="space-x-4 md:flex">
          <li>
            <Link
              href="/about"
              className="block py-2 pl-3 pr-4 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="block py-2 pl-3 pr-4 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-gray-300"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="block py-2 pl-3 pr-4 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-gray-300"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/sponsors"
              className="block py-2 pl-3 pr-4 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-gray-300"
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 pl-3 pr-4 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
