"use client";
import React, { useState } from "react";


const ProductPage = ({ product }) => {

  const [amount, setAmount] = useState(1);

  const [showRedProduct, setShowRedProduct] = useState(false);
  const productToShow = showRedProduct ? product.red : product;

  const [activeImage, setActiveImage] = useState(productToShow.images[0]);
  

  return (
    <div className="max-w-7xl p-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:items-center">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImage}
            alt=""
            className="w-full h-full aspect-square object-cover rounded-xl"
          />
          <div className="grid grid-cols-3 mx-auto lg:grid lg:grid-cols-3 xl:flex md:flex flex-row justify-around gap-2 md:gap-6">
            <img
              src={productToShow.images[0]}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer transition-opacity hover:opacity-80 duration-300"
              onClick={() => setActiveImage(productToShow.images[0])}
            />
            <img
              src={productToShow.images[1]}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer transition-opacity hover:opacity-80 duration-300"
              onClick={() => setActiveImage(productToShow.images[1])}
            />
            <img
              src={productToShow.images[2]}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer transition-opacity hover:opacity-80 duration-300"
              onClick={() => setActiveImage(productToShow.images[2])}
            />
            <img
              src={productToShow.images[3]}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer transition-opacity hover:opacity-80 duration-300"
              onClick={() => setActiveImage(product.images[3])}
            />
            <img
              src={productToShow.images[4]}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer transition-opacity hover:opacity-80 duration-300"
              onClick={() => setActiveImage(productToShow.images[4])}
            />
            <img
              src={productToShow.images[5]}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer transition-opacity hover:opacity-80 duration-300"
              onClick={() => setActiveImage(productToShow.images[5])}
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className="text-violet-600 font-semibold cursor-default">
              {product.title}
            </span>
            <h1 className="font-bold text-3xl cursor-default mt-2">{product.name}</h1>
          </div>
          <span class="flex items-center gap-2">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500 cursor-pointer hover:text-black" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500 cursor-pointer hover:text-black" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500 cursor-pointer hover:text-black" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500 cursor-pointer hover:text-black" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-orange-500 cursor-pointer hover:text-black" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-500 hover:text-black cursor-pointer">4 Reviews</span>
          </span>
          <div className="flex items-center pb-5 border-b-2 border-black gap-1 cursor-default">
            <span className="text-md">Color:</span>
            <button className="border-2 border-gray-200 rounded-full w-6 h-6 bg-black hover:border-gray-500 transition ease-in duration-300"></button>
            <button className="border-2 border-gray-200 rounded-full w-6 h-6 bg-red-500 hover:border-gray-500 transition ease-in duration-300" onClick={() => {
              setShowRedProduct(!showRedProduct);
              setActiveImage(showRedProduct ? product.images[0] : product.red.images[0]);
            }}
            ></button>
            <button className="border-2 border-gray-200 rounded-full w-6 h-6 bg-blue-500 hover:border-gray-500 transition ease-in duration-300"></button>
            <div className="flex ml-4 gap-2 items-center cursor-default">
              <span>Size: </span>
              <select className="rounded border appearance-none cursor-pointer border-gray-300 py-2 text-base pl-3 pr-10">
                <option >SM</option>
                <option >M</option>
                <option >L</option>
                <option >XL</option>
              </select>
            </div>
          </div>
          <p className="text-black lg:text-lg">
            {product.description}
          </p>
          <h6 className="text-2xl font-semibold cursor-default">$ {product.price}</h6>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-100 py-2 px-5 rounded-lg text-violet-800 text-2xl lg:text-3xl"
                onClick={() => setAmount((prev) => (prev > 0 ? prev - 1 : 0))}
              >
                -
              </button>
              <span className="py-2 px-4 rounded-lg text-lg lg:text-xl cursor-default">
                {amount}
              </span>
              <button
                className="bg-gray-100 py-2 px-5 rounded-lg text-violet-800 text-2xl lg:text-3xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-violet-800 text-white font-semibold py-2 px-8 lg:py-3 lg:px-16 rounded-xl h-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;