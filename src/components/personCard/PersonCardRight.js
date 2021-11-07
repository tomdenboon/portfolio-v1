import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
import FadeInAnimationWrapper from "../wrappers/FadeInAnimationWrapper";
import { formatTime } from "../../utils";
import { useSelector } from "react-redux";

function PersonCardRight() {
  const timer = useSelector((state) => state.timer);
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <FadeInAnimationWrapper
      direction={isMobile ? "up" : "right"}
      delay={isMobile ? "600" : "400"}
      waitForNavbar={true}
    >
      <div className="flex flex-col justify-between items-center h-full w-full bg-primary p-8">
        <Link to="/projects">
          <CustomButton title="Projects" />
        </Link>
        <div
          className="absolute font-mono text-3xl font-bold select-none text-secondary 
           transform translate-x-1/2 translate-y-1/2 xl:rotate-90 xl:-right-4 xl:bottom-1/2 -bottom-4 sm:-bottom-4 right-1/2"
        >
          {formatTime(timer.time)}
        </div>
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardRight;
