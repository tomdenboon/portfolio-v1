import React from "react";
import NavbarItem from "./NavbarItem";
import CustomButton1 from "./personCard/CustomButton1";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="font-mono top-0 left-0 flex w-full justify-between
      absolute h-16 bg-gray-800 items-center filter drop-shadow-lg px-12"
    >
      <NavLink
        to="/"
        className="animate-fade-in text-4xl font-serif font-bold cursor-pointer opacity-0"
      >
        Tom
      </NavLink>
      <div className="sm:flex hidden items-center">
        <div className="animate-fade-in-down-delay-400 opacity-0">
          <NavbarItem routeName="/">About</NavbarItem>
        </div>
        <div className="animate-fade-in-down-delay-500 opacity-0">
          <NavbarItem routeName="/projects">Projects</NavbarItem>
        </div>
        <div className="animate-fade-in-down-delay-600 opacity-0">
          <NavbarItem routeName="/contact">Contact</NavbarItem>
        </div>
        <div className="animate-fade-in-down-delay-700 opacity-0 ml-8">
          <NavLink to="/resume">
            <CustomButton1 title="Resume" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
