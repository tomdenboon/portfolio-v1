import React, { useEffect } from "react";
import NavbarItem from "./NavbarItem";
import CustomButton1 from "./CustomButton";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isNavbarLoaded } from "../actions";

function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("did load");
    dispatch(isNavbarLoaded(false));
    console.log("did did try to dispatch");
    setTimeout(() => {
      dispatch(isNavbarLoaded(true));
    }, 600);
  }, [dispatch]);

  return (
    <div className="absolute top-0 left-0 flex items-center justify-between w-full h-16 px-12 font-mono bg-gray-800 filter drop-shadow-lg">
      <NavLink
        to="/"
        className="font-serif text-4xl font-bold opacity-0 cursor-pointer animate-fade-in"
      >
        Tom
      </NavLink>
      <div className="items-center hidden sm:flex">
        <NavbarItem routeName="/" fadeInDelay="100">
          About
        </NavbarItem>
        <NavbarItem routeName="/projects" fadeInDelay="200">
          Projects
        </NavbarItem>
        <div className="ml-8 opacity-0 animate-fade-in-down-delay-300">
          <NavLink to="/resume">
            <CustomButton1 title="Resume" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
