'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "fashion blog Website",
      description:
        "A fully responsive blog website built with Next.js and Tailwind CSS with sanity and stripe.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS" , "Sanity" , "stripe"],
      image: "/fashion.png",
      link: "https://fashionblog-git-main-maryams-projects-5804c59d.vercel.app/",
    },


       
    {
      title: "Clothing Website",
      description:
        "A fully responsive clothing website built with Next.js and Tailwind CSS with sanity and stripe.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS" , "Sanity" , "stripe"],
      image: "/hero.png",
      link: "https://vercel.com/maryams-projects-5804c59d/hackathon-main-project-2/H5ji7u5hy47BHa5vzXNdR2PT8Jdz",
    },
        {
      title: "Furniture Website",
      description:
         "A fully responsive furniture website built with Next.js and Tailwind CSS with sanity and stripe with log in signup through clerk and deployed on vercel.",
     techStack: ["Next.js", "TypeScript", "Tailwind CSS" , "Sanity" , "stripe" , "Vercel"],
      image: "/fur.png",
      link: "https://main-hackathon-proj-final-updates-latest-v6-with-stripe-jli4.vercel.app/",
    },

    {
      title: "Portfolio Website",
      description:
         "A fully responsive  website built with Next.js and Tailwind CSS with sanity and stripe with log in signup through clerk and deployed on vercel.",
     techStack: ["Next.js", "TypeScript", "Tailwind CSS" , "Sanity" , "stripe" , "Vercel"],
      image: "/pp.png",
      link: "https://portfolioby-nextjs.vercel.app/",
    },
        {
      title: "Admin dashboard",
      description:
       "A fully responsive clothing website built with Next.js and Tailwind CSS with sanity and stripe with login and signup through clerk.",
     techStack: ["Next.js", "TypeScript", "Tailwind CSS" , "Sanity" , "stripe", "MongoDb", "Clerk"],
      image: "/1save.png",
      link: "https://real-time-dashboard-with-mongodb-maryam.vercel.app/",
    },
    {
      title: "Rainbow Rattle Toy Website",
      description:
        "A fully responsive website built with Next.js and Tailwind CSS.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/rr.png",
      link: "https://rainbow-rattle.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio website.",
      techStack: ["React", "Tailwind CSS", "Next.js"],
      image: "/portfolio.png",
      link: "https://maryamfaizan53.github.io/My-Resume/",
    },
    {
      title: "Login Page",
      description: "A modern, responsive and interactive login page.",
      techStack: ["React", "Tailwind CSS", "Next.js"],
      image: "/login.png",
      link: "https://maryamfaizan53.github.io/world-s-tourist-attractions/",
    },
    {
      title: "Tourist Populars",
      description: "A modern, responsive Tourist places website.",
      techStack: ["React", "Tailwind CSS", "Next.js"],
      image: "/countries.png",
      link: "https://maryamfaizan53.github.io/world-s-tourist-attractions/",
    },
    {
      title: "To-Do List",
      description: "A modern, responsive and interactive To-Do List website.",
      techStack: ["HTML", "CSS", "TypeScript"],
      image: "/todolist.png",
      link: "https://maryamfaizan53.github.io/to-do-list/",
    },
    {
      title: "E-commerce Website",
      description: "A modern, responsive E-Commerce website.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "/amazon.png",
      link: "https://maryamfaizan53.github.io/amazon_clone/",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about-image.png"
          alt="Beautiful technology mobile background"
          layout="fill"
          objectFit="cover"
          className="z-0 bg-transparent"
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl px-4 sm:px-8 py-12 text-center md:text-left">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-pink-600 mb-8">
          My Projects
        </h1>

        {/* Projects Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 sm:h-64 w-full mb-4">
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h2 className="text-xl lg:text-2xl text-pink-600 font-semibold mb-4">
                {project.title}
              </h2>
              <p className="text-white text-sm lg:text-lg mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs lg:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Link */}
              <div className="flex justify-center">
                <Link
                  href={project.link}
                  className="bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white px-4 py-2 rounded-xl font-bold text-sm lg:text-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:from-pink-700 hover:to-fuchsia-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


