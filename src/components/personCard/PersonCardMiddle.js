import React, { useState } from "react";
import { FaGrin, FaGrinWink } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { nextTheme } from "../../actions";
import IconRow from "./IconRow";
import FadeInAnimationWrapper from "../wrappers/FadeInAnimationWrapper";

function PersonCardMiddle() {
  const dispatch = useDispatch();
  const [isHoveredSmiley, setIsHoveredSmiley] = useState(false);

  const toggleHover = () => {
    setIsHoveredSmiley(!isHoveredSmiley);
  };

  const switchTheme = () => {
    dispatch(nextTheme());
  };

  return (
    <FadeInAnimationWrapper direction="up" delay="400" waitForNavbar={true}>
      <div className="flex flex-col h-full w-full lg:w-min justify-center items-center p-8 bg-primary">
        <div
          className="flex items-center justify-center text-secondary bg-primary-dark rounded-full
           sm:h-48 sm:w-48 h-36 w-36 sm:text-8xl text-7xl cursor-pointer"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onClick={switchTheme}
        >
          <div className="flex">
            {isHoveredSmiley ? <FaGrinWink /> : <FaGrin />}
          </div>
        </div>
        <div className="flex flex-col mt-5 font-serif text-2xl font-black text-center">
          Tom den Boon
        </div>
        <div className="flex mt-5 font-mono text-lg font-black text-center text-text-dark">
          Software Developer
        </div>
        <IconRow />
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardMiddle;
