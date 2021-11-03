import React, { useState } from "react";
import { FaGrin, FaGrinWink } from "react-icons/fa";
import IconRow from "./IconRow";
import FadeInAnimationWrapper from "../wrappers/FadeInAnimationWrapper";

function PersonCardLeft() {
  const [isHoveredSmiley, setIsHoveredSmiley] = useState(false);

  const toggleHover = () => {
    setIsHoveredSmiley(!isHoveredSmiley);
  };

  return (
    <FadeInAnimationWrapper direction="up" delay="100" waitForNavbar={true}>
      <div className="flex flex-col h-full items-center p-10 duration-300 bg-gray-800 rounded-l-md sm:rounded-r-none rounded-r-md m-2 sm:mr-0">
        <div
          className="flex items-center justify-center text-green-700 bg-gray-900 rounded-full sm:h-48 sm:w-48 h-36 w-36 sm:text-8xl text-7xl"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          {isHoveredSmiley ? <FaGrinWink /> : <FaGrin />}
        </div>
        <div className="flex mt-5 font-serif text-3xl font-black text-center">
          Tom den Boon
        </div>
        <div className="flex mt-5 font-mono text-lg font-black text-center text-gray-500">
          Software Developer
        </div>
        <IconRow />
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardLeft;
