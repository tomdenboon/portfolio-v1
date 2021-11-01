import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";

function BottomArrow() {
  return (
    <div
      className="group absolute bottom-5 flex flex-col items-center justify-center cursor-pointer transform
        animate-fade-in-up-delay-300 opacity-0"
    >
      <span className="absolute ml-3 mb-11 flex h-3 w-3 group-hover:opacity-0 ease-in duration-300">
        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-600 opacity-75 pointer-events-none"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-700 pointer-events-none"></span>
      </span>
      <FaLongArrowAltDown className="text-gray-200 text-5xl group-hover:text-gray-400" />
    </div>
  );
}

export default BottomArrow;
