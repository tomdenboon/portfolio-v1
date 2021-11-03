import React, { useState } from "react";

function HoverUpWrapper(props) {
  const [isWrapperHovered, setIsWrapperHovered] = useState(false);

  const toggleHover = () => {
    setIsWrapperHovered(!isWrapperHovered);
  };

  return (
    <div
      className={" mt-" + props.hoverHeight}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div
        className={
          "transform duration-200 ease-in " +
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
