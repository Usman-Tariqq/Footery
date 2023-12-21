import React from "react";
import { BsDiscord } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-black opacity-70 text-white">
      <div className="md:flex md:justify-between items-center px-4">
        <a href="/" className="flex items-center">
          <span className="text-2xl uppercase font-semibold hover:underline">
            Footery
          </span>
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 px-4 mt-4">
        <div className="w-full md:w-1/3">
          <h2 className="mb-6 text-medium underline uppercase sm:text-xl font-bold">
            Resources
          </h2>
          <ul className="text-xl font-medium">
            <li className="mb-4">
              <a href="/" className="hover:underline">Nike</a>
            </li>
            <li>
              <a href="/" className="hover:underline">Adidas</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 md:mt-0">
          <h2 className="mb-6 text-medium underline uppercase sm:text-xl font-bold">
            Follow us
          </h2>
          <ul className="text-xl font-medium">
            <li className="mb-4">
              <a href="/" className="hover:underline">Discord</a>
            </li>
            <li>
              <a href="/" className="hover:underline">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <h2 className="mb-6 text-medium underline uppercase sm:text-xl font-bold">Legal</h2>
          <ul className="text-xl font-medium md:flex-grow">
            <li className="mb-4">
              <a href="/" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="/" className="hover:underline">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-white border-opacity-30 my-6 lg:my-8"/>
      <div className="flex flex-col md:flex-row items-center justify-between mx-8">
        <span className="text-sm mb-4 md:mb-0">
          © 2023
          <a href="/" className="hover:underline uppercase ml-2">
            Footery™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 md:mt-0">
          <a href="/" className="ms-3 md:ms-5">
            <FaFacebookF/>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="/" className="ms-3 md:ms-5">
            <BsDiscord/>
            <span className="sr-only">Discord community</span>
          </a>
          <a href="/" className="ms-3 md:ms-5">
            <IoLogoTwitter/>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="/" className="ms-3 md:ms-5">
            <RiInstagramFill/>
            <span className="sr-only">Instagram page</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
