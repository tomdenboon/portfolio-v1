import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { formatTime } from "../../utils";
import { useSelector } from "react-redux";
import FadeInAnimationWrapper from "../wrappers/FadeInAnimationWrapper";

function PersonCardRight() {
  const timer = useSelector((state) => state.timer);
  const isMobile = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <FadeInAnimationWrapper
      direction={isMobile ? "right" : "up"}
      delay={isMobile ? "400" : "600"}
      waitForNavbar={true}
    >
      <div className="flex flex-col h-full w-full bg-primary p-10 gap-4 text-text-dark">
        <h3 className="font-bold text-secondary">Curious?</h3>
        <p className=" text-text-base text-xl font-bold">
          Check out my portfolio!
        </p>
        <p>
          In my portfolio are the projects I am most proud off. Some of them are
          still being updated regularly.
        </p>
        <Link
          to="/projects"
          className="relative flex items-center justify-center text-text-base hover:text-secondary group
          border rounded-lg select-none bg-opacity-0
          border-text-base hover:border-secondary w-full py-1 mt-2"
        >
          <div
            className="absolute bg-secondary w-full h-full
            rounded transform opacity-0 group-hover:opacity-10"
          />
          <div className="text-lg">Projects</div>
        </Link>
        <Link
          to="/projects"
          className="relative flex items-center justify-center text-text-base hover:text-secondary group
          border rounded-lg select-none bg-opacity-0
          border-text-base hover:border-secondary w-full py-1 mt-2"
        >
          <div
            className="absolute bg-secondary w-full h-full
            rounded transform opacity-0 group-hover:opacity-10"
          />
          <div className="text-lg">Resume</div>
        </Link>
        <div
          className="absolute font-mono text-3xl font-bold select-none text-secondary 
           transform translate-x-1/2 translate-y-1/2 xl:rotate-90 xl:-right-4 xl:bottom-1/2 -bottom-5 sm:-bottom-4 right-1/2"
        >
          {formatTime(timer.time)}
        </div>
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardRight;
