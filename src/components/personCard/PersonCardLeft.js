import React, { useState } from "react";
import { FaGrin, FaGrinWink } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function PersonCardLeft() {
  const [isHoveredSmiley, setIsHoveredSmiley] = useState(false);

  const toggleHover = () => {
    setIsHoveredSmiley(!isHoveredSmiley);
  };

  return (
    <div
      className="relative bg-gray-800 sm:w-1/3 items-center flex flex-col rounded-l-md sm:rounded-r-none rounded-r-md
    sm:py-16 py-10 duration-300 animate-fade-in-up-delay-100 sm:animate-fade-in-up-delay-100 opacity-0"
    >
      <div
        className="sm:h-48 sm:w-48 h-36 w-36 flex items-center sm:text-8xl
        text-7xl justify-center rounded-full bg-gray-900 text-green-700"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {isHoveredSmiley ? <FaGrinWink /> : <FaGrin />}
      </div>
      <div className="flex text-3xl text-center font-serif font-black mt-5">
        Tom den Boon
      </div>
      <div className="flex text-lg text-gray-500 font-mono font-black mt-5 text-center">
        Software Developer
      </div>
      <a href="https://github.com/tomdenboon" target="_blank" rel="noreferrer">
        <div className="flex text-2xl mt-5 hover:text-green-700 cursor-pointer select-none">
          <FiGithub />
        </div>
      </a>
    </div>
  );
}

export default PersonCardLeft;
