import React from "react";
import PersonCardLeft from "./PersonCardLeft";
import PersonCardRight from "./PersonCardRight";
import PersonCardMiddle from "./PersonCardMiddle";
function PersonCard() {
  return (
    <div
      className="relative flex flex-col max-w-screen-xl rounded-md filter drop-shadow-xl gap-1
       md:flex-row m-2"
    >
      <PersonCardLeft />
      <PersonCardMiddle />
      <PersonCardRight />
    </div>
  );
}

export default PersonCard;
