import React from "react";
import { Link } from "react-router-dom";
import CustomButton1 from "./CustomButton1";

function PersonCardRight() {
  return (
    <div className="sm:w-2/3">
      <div className="flex flex-col items-center justify-center sm:text-7xl text-6xl font-bold my-10">
        Hello,
        <div className="h-1 mt-2 w-16 bg-green-700"></div>
      </div>
      <div className="sm:flex">
        <div className="sm:w-1/2 flex flex-col m-4 text-center">
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
          <div className="flex justify-evenly mt-4">
            <Link to="/project">
              <CustomButton1 content="Projects" />
            </Link>
          </div>
        </div>
        <div className="sm:w-1/2 flex m-4 text-center">
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
          loves learning new, and improving. Can work on all parts of the stack.
        </div>
      </div>
    </div>
  );
}

export default PersonCardRight;
