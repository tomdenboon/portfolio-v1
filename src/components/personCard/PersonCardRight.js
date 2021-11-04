import React from "react";
import useMediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
import FadeInAnimationWrapper from "../wrappers/FadeInAnimationWrapper";
import { formatTime } from "../../utils";
import { useSelector } from "react-redux";

function PersonCardRight() {
  const timer = useSelector((state) => state.timer);
  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

  return (
    <FadeInAnimationWrapper
      direction={isMobile ? "down" : "right"}
      delay="100"
      waitForNavbar={true}
    >
      <div className="h-full bg-gray-800 rounded-l-sm sm:rounded-l-none rounded-r-sm">
        <div className="flex flex-col items-center justify-center pt-10 text-6xl font-bold sm:text-7xl">
          Hello,
          <div className="w-16 h-1 mt-2 bg-green-700"></div>
        </div>
        <div className="sm:flex">
          <div className="flex flex-col items-center justify-center p-2 text-center sm:w-1/2">
            loves learning new, and nee. Can work on all parts of the stack.
            loves learning new, and nee. Can work on all parts of the stack.
            loves learning new, and nee. Can work on all parts of the stack.
            loves learning new, and nee. Can work on all parts of the stack.
            <div className="flex items-center mt-2">
              <Link to="/projects">
                <CustomButton title="Projects" />
              </Link>
            </div>
          </div>
          <div className="flex p-2 text-center sm:w-1/2">
            loves learning new, and nee. Can work on all parts of the stack.
            loves learning new, and nee. Can work on all parts of the stack.
            loves learning new, and nee. Can work on all parts of the stack.
            loves learning new, and nee. Can work on all parts of the stack.
          </div>
        </div>
        <div
          className="absolute flex font-mono text-3xl font-bold select-none text-green-700
           transform translate-x-1/2 translate-y-1/2 xl:rotate-90 xl:-right-4 xl:bottom-1/2 -bottom-4 sm:-bottom-4 right-1/2"
        >
          {formatTime(timer.time)}
        </div>
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardRight;
