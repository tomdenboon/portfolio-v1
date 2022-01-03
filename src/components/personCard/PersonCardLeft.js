import React from "react";
import { useMediaQuery } from "react-responsive";
import FadeInAnimationWrapper from "../wrappers/FadeInAnimationWrapper";

function PersonCardRight() {
  const isMobile = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <FadeInAnimationWrapper
      direction="up"
      delay={isMobile ? "400" : "500"}
      waitForNavbar={true}
    >
      <div className="flex flex-col w-full text-text-dark  bg-primary p-10 gap-4">
        <div className="flex gap-4 items-center text-lg text-secondary font-bold">
          Hi,
        </div>
        <div className="text-text-base text-xl font-bold">I am Tom!</div>
        <div className="w-full flex">
          A freshly graduated Bsc computing scientist. Excited to bring my value
          to your company. Here are a few points that encapsulate myself well.
        </div>
        <div className="w-full flex">
          <div className="h-2 w-2 mt-2 mr-4 bg-secondary flex-shrink-0" />
          Enthusiastic to always improve myself.
        </div>
        <div className="w-full flex">
          <div className="h-2 w-2 mt-2 mr-4 bg-secondary flex-shrink-0" />I like
          to design databases and create APIs.
        </div>
        <div className="w-full flex">
          <div className="h-2 w-2 mt-2 mr-4 bg-secondary flex-shrink-0" />
          Once I start with a problem, I can not stop until solved.
        </div>
        <div className="w-full flex">
          <div className="h-2 w-2 mt-2 mr-4 bg-secondary flex-shrink-0" />A
          developer that is striving to create beatiful web applications.
        </div>
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardRight;
