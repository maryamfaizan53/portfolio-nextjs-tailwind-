"use client";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="flex items-center justify-between h-24 px-4 lg:px-8">
        <h4 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
          Maryam Faizan
        </h4>

        {/* Mobile menu icon */}
        <button
          className="text-fuchsia-600 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Close icon
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu icon
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center space-x-6 font-extrabold">
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="lg:hidden bg-black px-4 pb-4 space-y-2 font-extrabold">
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300">
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300">
            <Link href="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300">
            <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li className="text-fuchsia-600 hover:text-white transition-colors duration-300">
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;


// "use client";
// import React from "react";
// import Link from "next/link";


// const Nav = () => {
//   return (
//     <nav>
//       <div className="flex bg-black h-24 w-full justify-between items-center px-4">
//         <div>
//         <h4 className="text-5xl font-extrabold bg-gradient-to-tr from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
//             Maryam Faizan
//           </h4>
//         </div>

//         {/* Navigation Links with text shadow */}
//         <ul className="flex items-center space-x-6 font-extrabold">
//           <li className="text-fuchsia-600 hover:text-white transition-colors duration-300 shadow-md">
//             <Link href="/">Home</Link>
//           </li>
//           <li className="text-fuchsia-600 hover:text-white transition-colors duration-300 shadow-md">
//             <Link href="/about">About</Link>
//           </li>
//           <li className="text-fuchsia-600 hover:text-white transition-colors duration-300 shadow-md">
//             <Link href="/skills">Skills</Link>
//           </li>
//           <li className="text-fuchsia-600 hover:text-white transition-colors duration-300 shadow-md">
//             <Link href="/projects">Projects</Link>
//           </li>
//           <li className="text-fuchsia-600 hover:text-white transition-colors duration-300 shadow-md">
//             <Link href="/contact">Contact</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Nav;


