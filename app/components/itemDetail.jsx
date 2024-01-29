"use client";
import React, { useState } from "react";


const productPage = ({ product, addToCart }) => {

  const [amount, setAmount] = useState(1);
  const [activeColor, setActiveColor] = useState(product.color[0]);
  const [activeImage, setActiveImage] = useState(product[activeColor]?.images[0] || '');

  const handleColorChange = (color) => {
    setActiveColor(color);
    setActiveImage(product[color]?.images[0] || '');
  };

  const activeImages = product[activeColor]?.images || [];

  const addToCartHandler = () => {
    // Use the 'amount' variable here to pass the correct quantity to addToCart function
    addToCart(product.id, amount, product.price, product.name, product.size, product.variant);
  };

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
            {activeImages.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer transition-opacity hover:opacity-80 duration-300"
                onClick={() => setActiveImage(thumbnail)}
              />
            ))}
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
          <div className="flex items-center pb-5 border-b-2 border-black gap-1 cursor-default">
            <span className="text-md">Color:</span>
            {product.color.map((color) => (
              <button key={color} onClick={() => handleColorChange(color)} className="w-6 h-6 rounded-full mr-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                style={{ backgroundColor: color }}>
              </button>
            ))}

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
                onClick={() => setAmount((prev) => (prev > 1 ? prev - 1 : 1))}
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
            <button onClick={addToCartHandler} className="bg-violet-800 text-white font-semibold py-2 px-8 lg:py-3 lg:px-16 rounded-xl h-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productPage;