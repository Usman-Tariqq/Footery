import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Carousel({ slides }) {

  let [ Current, setCurrent ] = useState();

  let previousSlide = () =>{
    if (Current===0) setCurrent(slides.length - 1);
    else setCurrent (Current-1);

  }
  let nextSlide = () =>{
    if (Current===slides.length - 1) setCurrent(0);
    else setCurrent (Current+1);
    
  }


  return (
    <div className="relative">
      <div className={`flex transition ease-out duration-500 translate-x-[-${
        Current * 100
      }%]`}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="w-full h-full absolute top-0 flex justify-between items-center text-black font-bold text-4xl px-5">
        <button onClick={previousSlide}>
          <IoIosArrowBack />
        </button> 
        <button onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}