import React from "react";
import PersonCardLeft from "./PersonCardLeft";
import PersonCardRight from "./PersonCardRight";

function PersonCard() {
  return (
    <div
      className="relative flex font text-gray-200 filter drop-shadow-2xl
      rounded-md m-2 sm:flex-row flex-col sm:mx-8 min-w-min max-w-screen-lg items-stretch"
    >
      <PersonCardLeft />
      <PersonCardRight />
    </div>
  );
}

export default PersonCard;
