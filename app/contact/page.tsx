"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-700 p-4 sm:p-8">
      {/* Background Image */}
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

      <div className="relative z-10 w-full max-w-lg sm:max-w-2xl md:max-w-3xl px-4 py-8 sm:px-6 md:py-12 bg-opacity-90 bg-transparent backdrop-blur-md rounded-lg shadow-2xl">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-white mb-6 md:mb-8"
          style={{ fontFamily: "inter, sans-serif" }}
        >
          Get In Touch
        </h2>

        <p
          className="text-center text-base sm:text-lg text-white mb-8 sm:mb-12 font-bold"
          style={{ fontFamily: "lusitana, sans-serif" }}
        >
          Whether you want to collaborate on a project or just say hi, feel free
          to drop me a message.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="relative">
            <label htmlFor="name" className="sr-only font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-transparent border border-pink-600 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-transparent border border-pink-600 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-transparent border border-pink-600 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-pink-600 text-white font-bold rounded-xl shadow-md hover:bg-fuchsia-600 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
