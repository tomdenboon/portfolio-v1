import React from "react";
import { FiGithub, FiMail } from "react-icons/fi";
import HoverUpWrapper from "../wrappers/HoverUpWrapper";

function IconRow() {
  return (
    <div className="flex mt-5 text-xl text-text-dark">
      <div className="hover:text-text-base m-2">
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
      <div className="hover:text-text-base m-2">
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
