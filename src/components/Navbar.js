import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import CustomButton1 from "./CustomButton";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isNavbarLoaded } from "../actions";
import Cv from "../content/cv.pdf";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [isClickedHamburger, setIsClickedHamburger] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("did load");
    dispatch(isNavbarLoaded(false));
    console.log("did did try to dispatch");
    setTimeout(() => {
      dispatch(isNavbarLoaded(true));
    }, 600);
  }, [dispatch]);

  const toggleHamburger = () => {
    setIsClickedHamburger(!isClickedHamburger);
  };

  const linkIsClicked = () => {
    setIsClickedHamburger(false);
  };

  return (
    <div>
      <div
        className={
          (isClickedHamburger
            ? "translate-y-0 ease-out"
            : "-translate-y-full ease-in") +
          " transform transition  duration-200 absolute flex md:hidden flex-col w-full items-center bg-primary mt-16 z-40 gap-8 p-8 filter shadow-md"
        }
      >
        <div onClick={linkIsClicked}>
          <NavbarItem routeName="/" fadeInDelay="100">
            About
          </NavbarItem>
        </div>
        <div onClick={linkIsClicked}>
          <NavbarItem routeName="/projects" fadeInDelay="200">
            Projects
          </NavbarItem>
        </div>
        <div onClick={linkIsClicked}>
          <a href={Cv} target="_blank" rel="noreferrer">
            <CustomButton1 title="Resumé" />
          </a>
        </div>
      </div>
      <div className="top-0 left-0 absolute flex items-center justify-between w-full h-16 px-12 font-mono bg-primary filter z-40 md:shadow-md">
        <NavLink
          to="/"
          className="font-serif text-4xl font-bold animate-fade-in"
        >
          Tom
        </NavLink>
        <FiMenu
          className="flex md:hidden text-3xl cursor-pointer"
          onClick={toggleHamburger}
        />
        <div className="hidden items-center md:flex">
          <div className="opacity-0 animate-fade-in-down-delay-100">
            <NavbarItem routeName="/">About</NavbarItem>
          </div>
          <div className="opacity-0 animate-fade-in-down-delay-200">
            <NavbarItem routeName="/projects">Projects</NavbarItem>
          </div>
          <div className="ml-8 opacity-0 animate-fade-in-down-delay-300">
            <a href={Cv} target="_blank" rel="noreferrer">
              <CustomButton1 title="Resumé" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
