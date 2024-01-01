import React from "react";

const newsletter = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:w-full mb-10">
      <h1 className="font-bold text-2xl md:text-3xl mt-10 text-black">
        Sign up for our newsletter
      </h1>
      <p className="w-96 sm:w-[550px] lg:w-1/2 text-lg md:text-2xl mt-4 ml-5 px-8 sm:px-5 text-black">
        Hope you enjoyed your visit at our website Footery. if you would like to
        buy products like these you may subscribe to our policy so we can send
        you news about our latest launch as soon as they launch
      </p>
      <div className="flex justify-center items-center mt-4">
        <form>
          <input
            className="text-black w-56 sm:w-64 md:w-[530px] indent-4 rounded-l p-1"
            type="email"
            name="name"
            placeholder="Enter your email"
          />
          <button className="font-medium bg-black text-white text-md p-1 rounded-r">
            <p>Subscribe</p>
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center mt-2">
      <p className="mx-10 pl-2 sm:pl-0 sm:mx-4 md:text-xl text-black">
        We care about the protection of your data <span className="text-blue-500 hover:underline hover:cursor-pointer">Read our Privacy Policy.</span>
      </p>
      </div>
    </div>
  );
};

export default newsletter;
