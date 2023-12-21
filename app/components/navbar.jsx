import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

const navbar = () => {
  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] text-black lg:text-white lg:bg-transparent bg-white">
      <div className="max-w-screen-xl mx-auto h-full px-4 flex justify-between items-center">
        <h1 className="text-2xl uppercase font-semibold hover:cursor-default hover:text-[#FFD700] duration-300">
          Footery
        </h1>
        <ul className="hidden lg:inline-flex uppercase font-semibold text-sm gap-8">
          <li className="hover:text-[#FFD700] cursor-pointer duration-300">
            Home
          </li>
          <li className="hover:text-[#FFD700] cursor-pointer duration-300">
            About
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
        <div className="hidden lg:inline-flex gap-6 items-center">
          <FaShoppingCart className="hover:text-[#FFD700] cursor-pointer duration-300" />
          <FaSearch className="hover:text-[#FFD700] cursor-pointer duration-300" />
          <button className="w-40 h-12 bg-white text-black uppercase text-sm font-semibold rounded:md hover:bg-[#FFD700] hover:text-black duration-300">
            Get in Touch
          </button>
        </div>
        <div className="text-3xl inline-flex lg:hidden">
          <IoMenuSharp/>
        </div>
      </div>
    </div>
  );
};

export default navbar;
