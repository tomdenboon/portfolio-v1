import React from "react";

function CustomButton1(props) {
  return (
    <button
      className="px-3 py-1 text-green-700 transition-all 
      duration-300 border-2 rounded select-none
      border-green-700 hover:bg-green-700 hover:bg-opacity-10 
      hover:border-opacity-100 ease--out"
    >
      {props.title}
    </button>
  );
}

export default CustomButton1;
