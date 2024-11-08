"use client";
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-t-[#33353F] py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-6 md:space-y-0 text-center md:text-left">
        
        {/* Logo Section */}
        <div className="flex items-center justify-center md:justify-start">
          <h4 className="text-3xl font-extrabold bg-gradient-to-tr from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Maryam Faizan
          </h4>
        </div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6 justify-center md:justify-center text-md font-bold">
          <li><Link href="/about" className="hover:text-pink-600 transition decoration-transparent text-white">About</Link></li>
          <li><Link href="/skills" className="hover:text-pink-600 transition decoration-transparent text-white">Skills</Link></li>
          <li><Link href="/projects" className="hover:text-pink-600 transition decoration-transparent text-white">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-pink-600 transition decoration-transparent text-white">Contact</Link></li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 items-center justify-center md:justify-end">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-gray-300 hover:text-pink-600 transition" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-300 hover:text-pink-600 transition" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-300 hover:text-pink-600 transition" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-gray-300 hover:text-pink-600 transition" />
          </a>
        </div>
      </div>
      
      {/* Copyright Info */}
      <div className="text-center mt-4  ml-24 text-xs md:text-sm">
        <p>All rights reserved | by Maryam Faizan <br /> GIAIC Roll No: 130501</p>
      </div>
    </footer>
  );
};

export default Footer;
