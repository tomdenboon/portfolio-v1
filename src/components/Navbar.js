import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div
      className="text-gray-200 font-mono top-0 left-0 flex w-full justify-between
      absolute h-16 bg-gray-800 items-center shadow-xl"
    >
      <div className="text-4xl font-serif font-bold cursor-pointer mx-10">Tom</div>
      <div className="flex items-center invisible md:visible">
        <NavbarItem routeName="/">Home</NavbarItem>
        <NavbarItem routeName="/projects">Projects</NavbarItem>
        <NavbarItem routeName="/contact">Contact</NavbarItem>
        <NavbarItem routeName="/resume">Resume</NavbarItem>
      </div>
    </div>
  );
}

export default Navbar;
