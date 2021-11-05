import React, { useEffect } from "react";
import NavbarItem from "./NavbarItem";
import CustomButton1 from "./CustomButton";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isNavbarLoaded } from "../actions";
import Cv from "../content/cv.pdf";
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
    <div className="top-0 left-0 flex items-center justify-between w-full h-16 px-12 font-mono bg-gray-800 filter drop-shadow-lg z-10">
      <NavLink to="/" className="font-serif text-4xl font-bold animate-fade-in">
        Tom
      </NavLink>
      <div className="hidden md:flex">
        <NavbarItem routeName="/" fadeInDelay="100">
          About
        </NavbarItem>
        <NavbarItem routeName="/projects" fadeInDelay="200">
          Projects
        </NavbarItem>
        <div className="ml-8 opacity-0 animate-fade-in-down-delay-300">
          <a href={Cv} target="_blank" rel="noreferrer">
            <CustomButton1 title="Resumé" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
