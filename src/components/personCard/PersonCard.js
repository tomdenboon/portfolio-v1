import React from "react";
import PersonCardLeft from "./PersonCardLeft";
import PersonCardRight from "./PersonCardRight";

function PersonCard() {
  return (
    <div
      className="relative flex flex-col items-stretch max-w-screen-lg rounded-md filter drop-shadow-xl sm:gap-1 gap-2
       sm:flex-row sm:my-0 m-2"
    >
      <PersonCardLeft />
      <PersonCardRight />
    </div>
  );
}

export default PersonCard;
