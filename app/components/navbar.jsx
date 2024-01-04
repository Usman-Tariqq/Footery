"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

const navbar = () => {

  const [isClick, setisClick] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  const toggleSearch = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full border-b-[1px] bg-white text-black lg:text-white lg:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8">
          <div className="flex items-center justify-between h-20 lg:h-28">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="text-2xl font-semibold hover:cursor-default hover:text-[#FFD700] duration-300"
                >
                  <h1 className="uppercase">Footery</h1>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex">
              <div className="ml-4 flex items-center gap-8">
                <ul className="hidden lg:flex items-center gap-8">
                  <li className="hover:text-[#FFD700] cursor-pointer duration-300">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:text-[#FFD700] cursor-pointer duration-300">
                    <Link href="/About">About</Link>
                  </li>
                  <li className="hover:text-[#FFD700] cursor-pointer duration-300">
                    Contact
                  </li>
                  <li className="hover:text-[#FFD700] cursor-pointer duration-300">
                    Collection
                  </li>
                  <li className="hover:text-[#FFD700] cursor-pointer duration-300">
                    Shop
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <FaShoppingCart className="hover:text-[#FFD700] cursor-pointer duration-300" />
              <FaSearch className="hover:text-[#FFD700] cursor-pointer duration-300"
                onClick={toggleSearch}
              />
              {isOpen && (
                <div className="w-full bg-white p-2">
                  <input type="text" />
                </div>
              )}
              <button className="w-40 h-12 bg-white text-black font-semibold uppercase text-sm rounded-md hover:bg-[#FFD700] hover:text-black duration-300">
                Get in Touch
              </button>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounder-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <IoMenuSharp className="text-3xl" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 spacy-y-1 sm:px-3">
              <ul className={`bg-white`}>
                <li className="py-2 text-center hover:text-[#FFD700] cursor-pointer duration-300">
                  <Link href="/">Home</Link>
                </li>
                <li className="py-2 text-center hover:text-[#FFD700] cursor-pointer duration-300">
                  <Link href="/About">About</Link>
                </li>
                <li className="py-2 text-center hover:text-[#FFD700] cursor-pointer duration-300">
                  Contact
                </li>
                <li className="py-2 text-center hover:text-[#FFD700] cursor-pointer duration-300">
                  Collection
                </li>
                <li className="py-2 text-center hover:text-[#FFD700] cursor-pointer duration-300">
                  Shop
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default navbar;
