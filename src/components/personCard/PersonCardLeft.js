import React from "react";
import { useMediaQuery } from "react-responsive";
import FadeInAnimationWrapper from "../wrappers/FadeInAnimationWrapper";

function PersonCardRight() {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <FadeInAnimationWrapper
      direction={isMobile ? "up" : "left"}
      delay={isMobile ? "500" : "400"}
      waitForNavbar={true}
    >
      <div className="flex flex-col h-full w-full text-text-dark  bg-primary p-8 gap-4">
        <div className="flex gap-4 items-center text-lg text-secondary font-bold">
          Hi,
        </div>
        <div className="text-text-base text-2xl font-bold">I am Tom!</div>
        <div className="w-full flex">
          <div className="h-2 w-2 mt-2 mr-4 bg-secondary"></div>I am a developer
          that is striving to create beatiful web applications.
        </div>
        <div className="w-full flex">
          <div className="h-2 w-2 mt-2 mr-4 bg-secondary"></div>I am a developer
          that is striving to create beatiful web applications.
        </div>
        <div className="w-full flex">
          <div className="h-2 w-2 mt-2 mr-4 bg-secondary"></div>I am a developer
          that is striving to create beatiful web applications.
        </div>
        <div className="w-full flex">
          <div className="h-2 w-2 mt-2 mr-4 bg-secondary"></div>I am a developer
          that is striving to create beatiful web applications.
        </div>
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardRight;
