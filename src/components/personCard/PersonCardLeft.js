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
      direction={isMobile ? "down" : "left"}
      delay="400"
      waitForNavbar={true}
    >
      <div className="flex flex-col justify-between items-center h-full bg-gray-800 rounded-l-sm sm:rounded-l-none rounded-r-sm p-8">
        <Link to="/projects">
          <CustomButton title="Projects" />
        </Link>
        <div
          className="absolute font-mono text-3xl font-bold select-none text-green-700 hidden
           transform translate-x-1/2 translate-y-1/2 xl:rotate-90 xl:-right-4 xl:bottom-1/2 -bottom-4 sm:-bottom-4 right-1/2"
        >
          {formatTime(timer.time)}
        </div>
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardRight;
