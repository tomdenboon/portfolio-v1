import React, { useState } from "react";

function HoverUpWrapper(props) {
  const [isWrapperHovered, setIsWrapperHovered] = useState(false);

  const toggleHover = () => {
    setIsWrapperHovered(!isWrapperHovered);
  };

  return (
    <div
      className={"flex mt-" + props.hoverHeight}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div
        className={
          "w-full h-full flex transform duration-300 ease-in-out " +
          (isWrapperHovered
            ? "-translate-y-" + props.hoverHeight
            : "-translate-y-0")
        }
      >
        {props.children}
      </div>
    </div>
  );
}

export default HoverUpWrapper;
