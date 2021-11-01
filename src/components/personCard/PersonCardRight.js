import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatTime } from "../../utils";
import CustomButton1 from "./CustomButton1";

function PersonCardRight() {
  const timer = useSelector((state) => state.timer);

  return (
    <div
      className="sm:w-2/3 sm:ml-px sm:mt-0 mt-2 rounded-l-md sm:rounded-l-none rounded-r-md bg-gray-800 
    animate-fade-in-up-delay-200 sm:animate-fade-in-right-delay-700 opacity-0"
    >
      <div className="flex flex-col items-center justify-center sm:text-7xl text-6xl font-bold my-10">
        Hello,
        <div className="h-1 mt-2 w-16 bg-green-700"></div>
      </div>
      <div className="sm:flex">
        <div className="sm:w-1/2 flex flex-col m-4 text-center">
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
          <div className="flex justify-evenly mt-4">
            <Link to="/project">
              <CustomButton1 title="Projects" />
            </Link>
          </div>
        </div>
        <div className="sm:w-1/2 flex m-4 text-center">
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
        </div>
        <div
            className="transform translate-x-1/2 sm:translate-y-1/2  sm:rotate-90 sm:-right-4 sm:bottom-1/2 
            bottom-0 right-1/2 translate-y-full 
            absolute text-green-700 font-bold font-mono text-3xl select-none flex"
        >
            {formatTime(timer.time)}
        </div>
      </div>
    </div>
  );
}

export default PersonCardRight;
