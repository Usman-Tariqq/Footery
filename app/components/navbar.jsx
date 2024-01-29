"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {

  const [isClick, setisClick] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  const toggleSearch = () => {
    setisOpen(!isOpen);
  };

  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

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
              <FaShoppingCart onClick={toggleCart} className="hover:text-[#FFD700] cursor-pointer duration-300" />
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
              <FaShoppingCart onClick={toggleCart} className="hover:text-[#FFD700] cursor-pointer duration-300" />
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

        <div ref={ref} className="w-72 z-50 min-h-screen fixed top-0 right-0 bg-yellow-500 px-8 py-10 text-black transform transition-transform translate-x-full">
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-xl text-pink-500"><AiFillCloseCircle /></span>
          <ol>
            {Object.keys(cart).length == 0 && <div className="my-4 font-semibold">Your cart is Empty!</div>}
            {Object.keys(cart).map((k) => {
              return <li key={k}>
                <div className="flex my-5">
                  <div className="w-2/3 font-semibold">{cart[k].name}</div>
                  <div className="flex justify-center items-center w-1/3 font-semibold text-lg"><AiFillMinusCircle onClick={() => { removeFromCart([k], 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="text-black cursor-pointer text-sm" />
                    <span className="mx-2">{cart[k].quantity}</span>
                    <AiFillPlusCircle onClick={() => { addToCart([k], 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="text-black cursor-pointer text-sm" />
                  </div>
                </div>
              </li>
            })}
          </ol>
          <div className="flex">
            <button className="flex mr-2 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm"><BsFillBagCheckFill className="m-1" />Checkout</button>
            <button onClick={clearCart} className="flex mr-2 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm">Clear Cart</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
