import React from "react";
import { BsDiscord } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full py-8 text-white">
      <div className="md:flex md:justify-between items-center px-4">
        <a href="/" className="flex items-center">
          <span className="text-2xl uppercase font-semibold hover:underline">
            Footery
          </span>
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 px-4 mt-4">
        <div className="w-full md:w-1/3">
          <h2 className="mb-6 text-medium underline uppercase sm:text-xl font-bold cursor-default">
            Resources
          </h2>
          <ul className="text-xl font-medium">
            <li className="mb-4">
              <a href="/" className="hover:underline">
                Nike
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Adidas
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 md:mt-0">
          <h2 className="mb-6 text-medium underline uppercase sm:text-xl font-bold cursor-default">
            Follow us
          </h2>
          <ul className="text-xl font-medium">
            <li className="mb-4">
              <a href="/" className="hover:underline">
                Discord
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <h2 className="mb-6 text-medium underline uppercase sm:text-xl font-bold cursor-default">
            Legal
          </h2>
          <ul className="text-xl font-medium md:flex-grow">
            <li className="mb-4">
              <a href="/" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-white border-opacity-30 my-6 lg:my-8" />
      <div className="flex flex-col md:flex-row items-center justify-between mx-8">
        <span className="text-sm mb-4 md:mb-0 cursor-default">
          © 2023
          <a href="/" className="hover:underline uppercase ml-2">
            Footery™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 md:mt-0">
          <a href="/" className="ms-3 md:ms-5 hover:text-[#FFD700]">
            <FaFacebookF />

          </a>
          <a href="/" className="ms-3 md:ms-5 hover:text-[#FFD700]">
            <BsDiscord />
          </a>
          <a href="/" className="ms-3 md:ms-5 hover:text-[#FFD700]">
            <IoLogoTwitter />

          </a>
          <a href="/" className="ms-3 md:ms-5 hover:text-[#FFD700]">
            <RiInstagramFill />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
