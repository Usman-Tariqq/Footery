import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const page = () => {
  return (
    <div className="bg-gradient-to-br from-[#ffffff] via-[#ffed00] to-[#ff9800] h-screen">
      <div className="bg-black opacity-70">
        <Navbar />
      </div>
      <div className="flex justify-between">
        <blockquote className="h-28 mt-2 p-4 ml-8 border-s-4 border-black font-normal text-black text-sm">
          WHO WE ARE?
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
        </blockquote>
        <img src="/temp.png" className="w-[50%] m-4 p-4" />
      </div>
      <div className="mt-12 mb-12">
        <div className="flex items-center justify-around">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
      </div>
      <div className="bg-black opacity-70">
        <Footer />
      </div>
    </div>
  );
};
export default page;
