import React from "react";

function CustomButton1(props) {
  return (
    <button
      className="relative text-text-base hover:text-secondary
      border rounded select-none bg-opacity-0
      border-text-base hover:border-secondary"
    >
      <div
        className="absolute bg-secondary w-full h-full 
      rounded transform opacity-0 hover:opacity-10"
      ></div>
      <div className="my-1 mx-2">{props.title}</div>
    </button>
  );
}

export default CustomButton1;
