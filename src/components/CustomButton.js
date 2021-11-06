import React from "react";

function CustomButton1(props) {
  return (
    <button
      className="relative text-secondary transition-all 
      border rounded select-none bg-opacity-0
      border-secondary"
    >
      <div className="absolute bg-secondary w-full h-full rounded transform opacity-0 hover:opacity-10 ease-out duration-300"></div>
      <div className="my-1 mx-2">{props.title}</div>
    </button>
  );
}

export default CustomButton1;
