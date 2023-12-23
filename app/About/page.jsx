import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaRegFileAlt } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { CiDollar } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-[#b4a7a7c5] via-[#bdb1099c] to-[#ff9800] min-h-screen">
      <div className="bg-black opacity-70">
        <Navbar />
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-between mx-4 md:mx-8 my-8 md:my-12">
        <img src="/temp.png" className="w-full sm:w-[100%] lg:w-[50%] mb-4 md:mb-0 p-4" alt="Temp"/>
        <blockquote className="flex-grow h-auto md:h-28 p-4 md:ml-8 border-s-4 border-[#ff9800] font-normal text-black text-sm">
          <div>
            <h1 className="font-bold text-5xl mt-2">About Us</h1>
            <p className="text-lg font-semibold text-black pt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
              deleniti labore quam culpa atque, nobis, voluptates blanditiis
              dolores impedit iste non tenetur doloribus reprehenderit incidunt
              ipsam voluptate, quisquam ea praesentium odio delectus iure nostrum
              quas expedita. Unde quod hic quisquam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatum eos, ut nesciunt ipsum
              deleniti culpa laborum. Dolore sequi dolorum optio amet fugiat sed
              aut odio eligendi, consectetur quod earum aspernatur.
            </p>
          </div>
        </blockquote>
      </div>
      <div className="flex flex-wrap justify-around sm:pt-52 lg:pt-0 mx-4 md:mx-8 my-8 md:my-12">
        <div className="bg-white w-full md:w-72 py-2 flex flex-col justify-center items-center mb-4 md:mb-0">
          <FaRegFileAlt className="text-[#ff9800] text-4xl" />
          <h1 className="font-bold text-2xl text-black pt-4">2084</h1>
          <p className="font-medium">Projects and Plans</p>
        </div>
        <div className="bg-white w-full md:w-72 py-2 flex flex-col justify-center items-center mb-4 md:mb-0">
          <LuAlarmClock className="text-[#ff9800] text-4xl" />
          <h1 className="font-bold text-2xl text-black pt-4">24/7</h1>
          <p className="font-medium">Timing</p>
        </div>
        <div className="bg-white w-full md:w-72 py-2 flex flex-col justify-center items-center mb-4 md:mb-0">
          <CiDollar className="text-[#ff9800] text-4xl" />
          <h1 className="font-bold text-2xl text-black pt-4">2251</h1>
          <p className="font-medium">Sales</p>
        </div>
        <div className="bg-white w-full md:w-72 py-2 flex flex-col justify-center items-center mb-4 md:mb-0">
          <FaRegUser className="text-[#ff9800] text-4xl" />
          <h1 className="font-bold text-2xl text-black pt-4">824</h1>
          <p className="font-medium">Reviews</p>
        </div>
      </div>
      <div className="bg-black opacity-70">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
