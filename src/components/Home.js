import React from "react";
import PersonCard from "./personCard/PersonCard";
import FadeInAnimationWrapper from "./wrappers/FadeInAnimationWrapper";

function Home() {
  return (
    <div className="flex h-full pb-16 flex-col items-center overflow-y-auto overflow-x-hidden mt-16">
      <FadeInAnimationWrapper delay={100} direction="down" waitForNavbar={true}>
        <div className="flex flex-col items-center text-5xl font-semibold py-16 ">
          About
          <div className="w-1/2 h-1 mt-4 bg-secondary"></div>
        </div>
      </FadeInAnimationWrapper>
      <PersonCard />
    </div>
  );
}

export default Home;
