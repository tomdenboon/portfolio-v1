import React from "react";
import HoverUpWrapper from "./wrappers/HoverUpWrapper";
import FadeInAnimationWrapper from "./wrappers/FadeInAnimationWrapper";

function ProjectCard(props) {
  return (
    <FadeInAnimationWrapper
      direction="up"
      delay={props.fadeInDelay}
      waitForNavbar={true}
    >
      <HoverUpWrapper hoverHeight="4">
        <div className="h-96 w-96 bg-gray-800 m-2 cursor-pointer"></div>
      </HoverUpWrapper>
    </FadeInAnimationWrapper>
  );
}

export default ProjectCard;
