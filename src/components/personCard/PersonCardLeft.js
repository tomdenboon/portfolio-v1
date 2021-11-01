import React, { useState } from "react";
import { FaGrin, FaGrinWink, FaGithub } from "react-icons/fa";

function PersonCardLeft() {
  const [isHoveredSmiley, setIsHoveredSmiley] = useState(false);

  const toggleHover = () => {
    setIsHoveredSmiley(!isHoveredSmiley);
  };

  return (
    <div className="sm:w-1/3 items-center flex flex-col sm:my-16 my-10 mt-16">
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
      <div className="flex text-lg text-green-700 font-mono font-black mt-5 text-center">
        Software Developer
      </div>
      <a href="https://github.com/tomdenboon" target="_blank" rel="noreferrer">
        <div className="flex text-4xl my-5 hover:text-gray-400 cursor-pointer select-none">
          <FaGithub />
        </div>
      </a>
    </div>
  );
}

export default PersonCardLeft;
