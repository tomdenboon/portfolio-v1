import React from "react";
import { useSelector } from "react-redux";
function FadeInAnimationWrapper(props) {
  const isNavbarLoaded = useSelector((state) => state.isNavbarLoaded);

  return (
    <div
      className={
        "flex opacity-0 transform " +
        (!props.waitForNavbar || isNavbarLoaded
          ? "opacity-1 animate-fade-in-" +
            props.direction +
            "-delay-" +
            props.delay
          : "")
      }
    >
      {props.children}
    </div>
  );
}

export default FadeInAnimationWrapper;
