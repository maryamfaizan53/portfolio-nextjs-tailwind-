"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative min-h-screen max-w-full">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/about-image.png"
          alt="Beautiful technology mobile background"
          layout="fill"
          objectFit="cover"
          className="z-0 bg-transparent"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto  p-8 bg-transparent rounded-lg shadow-lg z-20">
        {/* Title */}
        <h2 className="text-center mb-4 text-6xl font-bold text-fuchsia-600">
          About Me
        </h2>

        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center justify-center z-20">
          {/* Profile Image */}
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10 flex justify-center">
            <Image
              src="/aboutme.jpg" // Ensure this image is in the public directory
              alt="My profile picture"
              width={300}
              height={300}
              className="rounded-full shadow-2xl shadow-pink-600 hover:translate-x-4"
            />
          </div>

          {/* About Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p
              className="text-lg mb-4 text-white font-extrabold"
              style={{ fontFamily: 'lusitana, sans-serif' }}
            >
              I am a passionate front-end developer with experience in building modern, responsive web applications using JavaScript, TypeScript, React, and Next.js. I love creating beautiful and functional user interfaces that provide a great user experience. <br />
              My goal is to continuously improve my skills and stay updated with the latest technologies in web development. I thrive in collaborative environments and enjoy tackling challenging projects.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <h2
          className="text-5xl text-center mt-12 font-semibold text-pink-600"
          style={{ fontFamily: 'inter, lusitana' }}
        >
          Skills
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <li className="bg-fuchsia-800 p-4 rounded-xl text-center shadow-md font-bold text-white">
            JavaScript
          </li>
          <li className="bg-fuchsia-800 p-4 rounded-xl text-center shadow-md font-bold text-white">
            TypeScript
          </li>
          <li className="bg-fuchsia-800 p-4 rounded-xl text-center shadow-md font-bold text-white">
            React
          </li>
          <li className="bg-fuchsia-800 p-4 rounded-xl text-center shadow-md font-bold text-white">
            Next.js
          </li>
          <li className="bg-fuchsia-800 p-4 rounded-xl text-center shadow-md font-bold text-white">
            HTML & CSS
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
