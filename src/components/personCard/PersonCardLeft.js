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
      direction={isMobile ? "up" : "left"}
      delay={isMobile ? "500" : "400"}
      waitForNavbar={true}
    >
      <div className="flex flex-col justify-between items-center h-full bg-primary rounded-l-sm sm:rounded-l-none rounded-r-sm p-8">
        ease-in , that is able to store Jira projects and Mailing lists from the
        apache foundation into its own database. This was achieved with the jira
        API and a custom build crawler for the mailing lists. On top of this
        lucene was build. Which can be used to search the indices of these
        resources. Also added custom tagging to tag mail and issues. Finally we
        can export search queries for statistical analysis. This tool is
        currently still being used by students for their thesis research.
        <Link to="/projects">
          <CustomButton title="Projects" />
        </Link>
        <div
          className="absolute font-mono text-3xl font-bold select-none text-secondary hidden
           transform translate-x-1/2 translate-y-1/2 xl:rotate-90 xl:-right-4 xl:bottom-1/2 -bottom-4 sm:-bottom-4 right-1/2"
        >
          {formatTime(timer.time)}
        </div>
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardRight;
