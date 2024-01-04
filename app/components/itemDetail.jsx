"use client";
import React, { useState } from "react";


const ProductPage = ({product}) => {
    const [images, setImages] = useState({
      img1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd4cf472-051a-4699-964b-443b3364b2bb/air-jordan-1-mid-womens-shoes-TB9sVQ.png",
      img2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d418bb33-8a0f-4ede-bf51-1e32a383cc89/air-jordan-1-mid-womens-shoes-TB9sVQ.png",
      img3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b4f83aac-6524-4041-9ada-cd850d7c92e1/air-jordan-1-mid-womens-shoes-TB9sVQ.png",
      img4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bb12b275-5cef-4ebc-afc8-93b52e0df566/air-jordan-1-mid-womens-shoes-TB9sVQ.png",
    });
  
    const [activeImage, setActiveImage] = useState(images.img1);
  
    const [amount, setAmount] = useState(1);
  
    return (
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:items-center">
          <div className="flex flex-col gap-6 lg:w-2/4">
            <img
              src={activeImage}
              alt=""
              className="w-full h-full aspect-square object-cover rounded-xl"
            />
            <div className="flex flex-row justify-between h-24">
              <img
                src={images.img1}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img1)}
              />
              <img
                src={images.img2}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img2)}
              />
              <img
                src={images.img3}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img3)}
              />
              <img
                src={images.img4}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img4)}
              />
            </div>
          </div>
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className="text-violet-600 font-semibold">
                {product.name}
              </span>
              <h1 className="font-bold text-3xl">{product.name}</h1>
            </div>
            <p className="text-gray-700 lg:text-lg">
              {/* {product.description} */}
            </p>
            {/* <h6 className="text-2xl font-semibold">$ {price}</h6> */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
              <div className="flex flex-row items-center">
                <button
                  className="bg-gray-100 py-2 px-5 rounded-lg text-violet-800 text-2xl lg:text-3xl"
                  onClick={() => setAmount((prev) => (prev > 0 ? prev - 1 : 0))}
                >
                  -
                </button>
                <span className="py-2 px-4 rounded-lg text-lg lg:text-xl">
                  {/* {product.price} */}
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