import React from "react";
import PersonCardLeft from "./PersonCardLeft";
import PersonCardRight from "./PersonCardRight";
import PersonCardMiddle from "./PersonCardMiddle";
function PersonCard() {
  return (
    <div
      className="relative flex flex-col max-w-screen-xl rounded-md filter drop-shadow-xl gap-2 
       md:flex-row m-2 w-full"
    >
      <div className="flex w-full order-2 md:order-1">
        <PersonCardLeft />
      </div>
      <div className="flex order-1 md:order-2">
        <PersonCardMiddle />
      </div>

      <div className="flex w-full order-3">
        <PersonCardRight />
      </div>
    </div>
  );
}

export default PersonCard;
