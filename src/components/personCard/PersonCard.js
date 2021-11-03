import React from "react";
import PersonCardLeft from "./PersonCardLeft";
import PersonCardRight from "./PersonCardRight";

function PersonCard() {
  return (
    <div
      className="relative flex flex-col items-stretch max-w-screen-lg rounded-md filter drop-shadow-xl
       sm:flex-row sm:mb-2 xl:mt-0 mt-16"
    >
      <PersonCardLeft />
      <PersonCardRight />
    </div>
  );
}

export default PersonCard;
