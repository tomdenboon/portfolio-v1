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
      <div className="flex flex-col justify-between items-center h-full w-full bg-primary p-8">
        <div className="flex gap-4 items-center text-lg">
          <div className="w-2 h-2 rounded bg-secondary"></div>
        </div>
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardRight;
