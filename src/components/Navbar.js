import React from 'react';
import NavbarItem from './NavbarItem';

function Navbar() {
    return (
        <div className="text-gray-200 font-semibold font-mono top-0 left-0 flex w-full h-16 absolute bg-gray-800 justify-between items-center px-20 shadow-xl">
            <div className="text-4xl font-serif font-bold cursor-pointer mx-10">
                Tom
            </div>
            <div className="flex items-center">
                <NavbarItem routeName="/">Home</NavbarItem>
                <NavbarItem routeName="/projects">Projects</NavbarItem>
                <NavbarItem routeName="/contact">Contact</NavbarItem>
                <NavbarItem routeName="/resume">Resume</NavbarItem>
            </div>
        </div>
        );
}

export default Navbar;