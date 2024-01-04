import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Product = ({ name, price, image, id}) => {

  const router = useRouter()
  // defining id AFTER GIVING ID CARDS IN SLIDER as a variable to give id to the product page to render the next director (productpage)
  const productid = parseInt(id)


  return (
    <div className="lg:hover:scale-105 ease-in duration-500 w-90 rounded-lg shadow-black shadow-lg mt-20 mx-auto p-4 bg-white mb-20 cursor-pointer" onClick={() => router.push(`/ProductPage/${productid}`)}>
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
