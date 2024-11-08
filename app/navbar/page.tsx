"use client";
import React from "react";
import Link from "next/link";


const Nav = () => {
  return (
    <nav>
      <div className="flex bg-black h-24 w-full justify-between items-center px-4">
        <div>
        <h4 className="text-5xl font-extrabold bg-gradient-to-tr from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Maryam Faizan
          </h4>
        </div>

        {/* Navigation Links with text shadow */}
        <ul className="flex items-center space-x-6 font-extrabold">
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300 shadow-md">
            <Link href="/">Home</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300 shadow-md">
            <Link href="/about">About</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300 shadow-md">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300 shadow-md">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300 shadow-md">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
