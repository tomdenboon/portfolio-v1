import { useState } from 'react';
import NavbarItem from './NavbarItem';
import Button from './CustomButton';
import { NavLink } from 'react-router-dom';
import Cv from '../assets/resume.pdf';
import { FiMenu } from 'react-icons/fi';
import FadeInAnimationWrapper from './wrappers/FadeInAnimationWrapper';

function Navbar() {
  const [isClickedHamburger, setIsClickedHamburger] = useState(false);

  const toggleHamburger = () => {
    setIsClickedHamburger(!isClickedHamburger);
  };

  const linkIsClicked = () => {
    setIsClickedHamburger(false);
  };

  return (
    <nav>
      <div
        className={
          (isClickedHamburger
            ? 'translate-y-0 ease-out'
            : '-translate-y-full ease-in') +
          ' transform transition  duration-200 absolute flex md:hidden flex-col w-full items-center bg-primary mt-16 z-40 gap-8 p-8 filter shadow-md'
        }
      >
        <div onClick={linkIsClicked}>
          <NavbarItem routeName="/">About</NavbarItem>
        </div>
        <div onClick={linkIsClicked}>
          <NavbarItem routeName="/projects">Projects</NavbarItem>
        </div>
        <div onClick={linkIsClicked}>
          <a href={Cv} target="_blank" rel="noreferrer">
            <Button title="Resumé" />
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
        <div className="hidden items-center md:flex gap-6">
          <FadeInAnimationWrapper delay={100} noDelay direction="down">
            <NavbarItem routeName="/">About</NavbarItem>
          </FadeInAnimationWrapper>
          <FadeInAnimationWrapper delay={200} noDelay direction="down">
            <NavbarItem routeName="/projects">Projects</NavbarItem>
          </FadeInAnimationWrapper>
          <FadeInAnimationWrapper delay={300} noDelay direction="down">
            <a href={Cv} target="_blank" rel="noreferrer">
              <Button title="Resumé" />
            </a>
          </FadeInAnimationWrapper>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
