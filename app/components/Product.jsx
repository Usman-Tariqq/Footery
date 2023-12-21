import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ name, price, image }) => {
  return (
    <div className="w-96 rounded-lg shadow-black shadow-lg mt-20 mx-auto p-4 bg-white mb-20">
      <img className="w-full rounded-2xl object-cover h-96" src={image} />
      <div className="flex flex-col justify-center px-2 py-2 rounded-md">
        <h5 className="text-lg">{name}</h5>
        <p className="font-bold text-2xl">${price}</p>
        <div className="flex justify-center items-center bg-black rounded-lg p-4 mt-2">
          <button className="flex items-center gap-1 text-white">
            <FaShoppingCart />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
