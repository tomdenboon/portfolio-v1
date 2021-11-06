import React from "react";
import HoverUpWrapper from "./wrappers/HoverUpWrapper";
import FadeInAnimationWrapper from "./wrappers/FadeInAnimationWrapper";
import { FiGithub, FiFolder, FiYoutube } from "react-icons/fi";

function ProjectCard(props) {
  function ProjectCardOuter(props) {
    return <div className="flex mx-2 my-1">{props.children}</div>;
  }

  function ProjectCardInner(props) {
    return (
      <div className="relative w-full flex flex-col px-8 py-8 bg-gray-800 select-none group rounded-sm">
        {props.children}
      </div>
    );
  }

  function ProjectCardHeader() {
    return (
      <div className="flex justify-between items-center transition ease-in-out duration-200">
        <div className="text-4xl text-green-700">
          <FiFolder className="stroke-current stroke-1" />
        </div>
        <div className="flex gap-8">
          {props.youtubeLink !== "" && (
            <a
              href={props.youtubeLink}
              target="_blank"
              rel="noreferrer"
              className=" text-2xl text-gray-500 hover:text-green-700 transition ease-in-out duration-200"
            >
              <FiYoutube />
            </a>
          )}
          <a
            href={props.githubLink}
            target="_blank"
            rel="noreferrer"
            className=" text-2xl text-gray-500 hover:text-green-700 transition ease-in-out duration-200"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    );
  }

  function ProjectCardFooter() {
    return (
      <div className="absolute bottom-8 flex flex-wrap text-gray-500 font-mono font-thin text-sm gap-x-4 gap-y-1">
        {props.tags.map((tag, i) => {
          return <div key={i}> {tag} </div>;
        })}
      </div>
    );
  }

  return (
    <ProjectCardOuter>
      <FadeInAnimationWrapper
        direction="up"
        delay={props.fadeInDelay}
        waitForNavbar={true}
      >
        <HoverUpWrapper hoverHeight="2">
          <ProjectCardInner>
            <ProjectCardHeader />
            <div className="mb-4 mt-8 text-lg font-bold">{props.title}</div>
            <div className="text-gray-300 font-sans font-medium mb-12">
              {props.children}
            </div>
            <ProjectCardFooter />
          </ProjectCardInner>
        </HoverUpWrapper>
      </FadeInAnimationWrapper>
    </ProjectCardOuter>
  );
}

export default ProjectCard;
