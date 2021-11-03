import React from "react";
import { FiGithub, FiMail } from "react-icons/fi";
import HoverUpWrapper from "../wrappers/HoverUpWrapper";

function IconRow() {
  return (
    <div className="flex mt-5 text-xl">
      <div className="hover:text-green-700 m-2 transform ease-out duration-200">
        <a
          href="https://github.com/tomdenboon"
          target="_blank"
          rel="noreferrer"
        >
          <HoverUpWrapper hoverHeight="1">
            <FiGithub />
          </HoverUpWrapper>
        </a>
      </div>
      <div className="hover:text-green-700 m-2 transform ease-out duration-200">
        <a
          href="mailto:tomdenboon@hotmail.com?subject=Your inquiry"
          target="_blank"
          rel="noreferrer"
        >
          <HoverUpWrapper hoverHeight="1">
            <FiMail />
          </HoverUpWrapper>
        </a>
      </div>
    </div>
  );
}

export default IconRow;
