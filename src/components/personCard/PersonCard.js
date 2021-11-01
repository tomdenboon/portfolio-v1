import React from "react";
import { useSelector } from "react-redux";
import { formatTime } from "../../utils";
import PersonCardLeft from "./PersonCardLeft";
import PersonCardRight from "./PersonCardRight";

function PersonCard() {
  const timer = useSelector((state) => state.timer);

  return (
    <div
      className="relative shadow-xl font text-gray-200 bg-gray-800
      rounded-md m-4 sm:mx-8 min-w-min max-w-screen-lg items-stretch"
    >
      <div className="sm:flex sm:divide-x divide-y divide-gray-900">
        <PersonCardLeft />
        <PersonCardRight />
      </div>
      <div
        className=" transform translate-x-1/2 sm:translate-y-1/2  sm:rotate-90 sm:-right-4 sm:bottom-1/2 
        bottom-0 right-1/2 translate-y-full
        absolute text-green-700 font-bold font-mono text-3xl select-none flex"
      >
        {formatTime(timer.time)}
      </div>
    </div>
  );
}

export default PersonCard;
