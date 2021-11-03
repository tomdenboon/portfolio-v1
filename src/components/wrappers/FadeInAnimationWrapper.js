import React from "react";
import { useSelector } from "react-redux";
function FadeInAnimationWrapper(props) {
  const isNavbarLoaded = useSelector((state) => state.isNavbarLoaded);

  return (
    <div
      className={
        "opacity-0 transform " +
        (!props.waitForNavbar || isNavbarLoaded
          ? "animate-fade-in-" + props.direction + "-delay-" + props.delay
          : "")
      }
    >
      {props.children}
    </div>
  );
}

export default FadeInAnimationWrapper;
