// // // 'use client'
// // // import React from 'react';
// // // import { FaGithub, FaLinkedin } from 'react-icons/fa';
// // // import { SiUpwork } from 'react-icons/si';
// // // import { TypeAnimation } from 'react-type-animation';
// // // import Image from 'next/image';

// // // const Hero = () => {
// // //   // Function to open external links in a new tab
// // //   const openLink = (url: string) => {
// // //     if (typeof window !== 'undefined') {
// // //       window.open(url, '_blank', 'noopener,noreferrer');
// // //     }
// // //   };

// // //   return (
// // //     <div className="relative w-full h-screen">
// // //       {/* Background Image */}
// // //       <div className="absolute inset-0">
// // //         <Image
// // //           src="/about-image.png"
// // //           alt="Beautiful technology mobile background"
// // //           layout="fill"
// // //           objectFit="cover"
// // //           className="z-0 bg-transparent"
// // //         />
// // //         <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
// // //       </div>

// // //       <main className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left w-full h-full lg:w-3/4 xl:w-1/2 mx-auto">
        
// // //         {/* Profile Image */} 
// // //         <div className="relative z-0 m-0 mt-40 lg:mt-0 lg:mr-8 w-screen">
// // //           <Image
// // //             src="/hero-image.png"
// // //             alt="profile pic"
// // //             width={640}
// // //             height={640}
// // //             className="rounded-full shadow-lg shadow-pink-600 hover:translate-x-4"
// // //           />
// // //         </div>
// // //          {/* {/* <div className="flex flex-col md:flex-row items-center justify-center z-20 hover:translate-x-4"> */}
         

// // //         {/* Text Section */}
// // //         <div className="relative z-20 w-full mt-8 lg:mt-0 lg:ml-8 flex flex-col items-center lg:items-start text-white">
// // //           {/* Static Text */}
// // //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
// // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
// // //               Hello, I&apos;m
// // //             </span>
// // //           </h1>

// // //           {/* Type Animation */}
// // //           <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
// // //             <TypeAnimation
// // //               sequence={[
// // //                 'Maryam Faizan',
// // //                 1000,
// // //                 'A Web Developer',
// // //                 1000,
// // //                 'A Programmer',
// // //                 1000,
// // //                 'UI/UX Designer',
// // //                 1000,
// // //               ]}
// // //               wrapper="span"
// // //               speed={30}
// // //               repeat={Infinity}
// // //             />
// // //           </div>

// // //           {/* Description */}
// // //           <p className="mt-4 text-lg font-light max-w-lg">
// // //             I am a full-stack web developer with a passion for creating interactive
// // //             and responsive web applications. I have experience working with JavaScript,
// // //             TypeScript, React, Next.js, Node.js, Express, Bootstrap, HTML, CSS, and Git.
// // //             I am a quick learner and always looking to expand my knowledge and skill set.
// // //             I am a team player and excited to work with others to create amazing applications.
// // //           </p>

// // //           {/* Social Icons */}
// // //           <div className="w-full flex justify-center mt-5 space-x-8 text-4xl">
// // //             <FaGithub
// // //               className="text-purple-700 hover:text-zinc-600 cursor-pointer shadow-md"
// // //               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
// // //               onClick={() => openLink('https://github.com')}
// // //               aria-label="GitHub"
// // //             />
// // //             <FaLinkedin
// // //               className="text-purple-700 hover:text-zinc-600 cursor-pointer shadow-md"
// // //               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
// // //               onClick={() => openLink('https://linkedin.com')}
// // //               aria-label="LinkedIn"
// // //             />
// // //             <SiUpwork
// // //               className="text-purple-700 hover:text-zinc-600 cursor-pointer shadow-md"
// // //               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
// // //               onClick={() => openLink('https://upwork.com')}
// // //               aria-label="Upwork"
// // //             />
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;

// // // // 'use client'
// // // // import React from 'react';
// // // // import { FaGithub, FaLinkedin } from 'react-icons/fa';
// // // // import { SiUpwork } from 'react-icons/si';
// // // // import { TypeAnimation } from 'react-type-animation';
// // // // import Image from 'next/image';

// // // // const Hero = () => {
// // // //   // Function to open external links in a new tab
// // // //   const openLink = (url: string) => {
// // // //     if (typeof window !== 'undefined') {
// // // //       window.open(url, '_blank', 'noopener,noreferrer');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="relative w-full h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-600">
// // // //       {/* Background Image */}
// // // //       <div className="absolute inset-0">
// // // //         <Image
// // // //           src="/about-image.png"
// // // //           alt="Beautiful technology mobile background"
// // // //           layout="fill"
// // // //           objectFit="cover"
// // // //           className="z-0 opacity-40"
// // // //         />
// // // //         <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
// // // //       </div>

// // // //       <main className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left w-full h-full lg:w-3/4 xl:w-1/2 mx-auto">
        
// // // //         {/* Profile Image */}
// // // //         <div className="relative z-20 mt-40 lg:mt-0 lg:mr-8 w-72 h-72 sm:w-80 sm:h-80">
// // // //           <Image
// // // //             src="/hero-image.png"
// // // //             alt="profile pic"
// // // //             width={640}
// // // //             height={640}
// // // //             className="rounded-full shadow-lg shadow-pink-600 hover:scale-105 transform transition-all duration-300 ease-in-out"
// // // //           />
// // // //         </div>

// // // //         {/* Text Section */}
// // // //         <div className="relative z-20 w-full mt-8 lg:mt-0 lg:ml-8 flex flex-col items-center lg:items-start text-white">
// // // //           {/* Static Text */}
// // // //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-shadow-lg mb-2">
// // // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
// // // //               Hello, I&apos;m
// // // //             </span>
// // // //           </h1>

// // // //           {/* Type Animation */}
// // // //           <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-2 text-shadow-lg">
// // // //             <TypeAnimation
// // // //               sequence={[
// // // //                 'Maryam Faizan',
// // // //                 1000,
// // // //                 'A Web Developer',
// // // //                 1000,
// // // //                 'A Programmer',
// // // //                 1000,
// // // //                 'UI/UX Designer',
// // // //                 1000,
// // // //               ]}
// // // //               wrapper="span"
// // // //               speed={30}
// // // //               repeat={Infinity}
// // // //             />
// // // //           </div>

// // // //           {/* Description */}
// // // //           <p className="mt-4 text-lg font-light max-w-lg px-4 lg:px-0">
// // // //             I am a full-stack web developer with a passion for creating interactive
// // // //             and responsive web applications. I have experience working with JavaScript,
// // // //             TypeScript, React, Next.js, Node.js, Express, Bootstrap, HTML, CSS, and Git.
// // // //             I am a quick learner and always looking to expand my knowledge and skill set.
// // // //             I am a team player and excited to work with others to create amazing applications.
// // // //           </p>

// // // //           {/* Social Icons */}
// // // //           <div className="w-full flex justify-center mt-6 space-x-8 text-4xl sm:text-5xl">
// // // //             <FaGithub
// // // //               className="text-purple-700 hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-white hover:bg-purple-700 transition-all duration-300 ease-in-out"
// // // //               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
// // // //               onClick={() => openLink('https://github.com')}
// // // //               aria-label="GitHub"
// // // //             />
// // // //             <FaLinkedin
// // // //               className="text-purple-700 hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-white hover:bg-blue-700 transition-all duration-300 ease-in-out"
// // // //               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
// // // //               onClick={() => openLink('https://linkedin.com')}
// // // //               aria-label="LinkedIn"
// // // //             />
// // // //             <SiUpwork
// // // //               className="text-purple-700 hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-white hover:bg-yellow-600 transition-all duration-300 ease-in-out"
// // // //               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
// // // //               onClick={() => openLink('https://upwork.com')}
// // // //               aria-label="Upwork"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Hero;

// // 'use client'
// // import React from 'react';
// // import { FaGithub, FaLinkedin } from 'react-icons/fa';
// // import { SiUpwork } from 'react-icons/si';
// // import { TypeAnimation } from 'react-type-animation';
// // import Image from 'next/image';

// // const Hero = () => {
// //   // Function to open external links in a new tab
// //   const openLink = (url: string) => {
// //     if (typeof window !== 'undefined') {
// //       window.open(url, '_blank', 'noopener,noreferrer');
// //     }
// //   };

// //   return (
// //     <div className="relative w-full h-screen">
// //       {/* Background Image */}
// //       <div className="absolute inset-0">
// //         <Image
// //           src="/about-image.png"
// //           alt="Beautiful technology mobile background"
// //           layout="fill"
// //           objectFit="cover"
// //           className="z-0 bg-transparent"
// //         />
// //         <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
// //       </div>

// //       <main className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left w-full h-full lg:w-3/4 xl:w-1/2 mx-auto">
        
// //         {/* Profile Image */}
// //         <div className="relative z-20 w-72 h-72 lg:w-64 lg:h-64 mt-8 lg:mt-0 lg:mr-8">
// //           <Image
// //             src="/hero-image.png"
// //             alt="profile pic"
// //             width={840}
// //             height={840}
// //             className="rounded-full shadow-lg shadow-pink-600 hover:scale-150 mt-32 transition-transform duration-300 ease-in-out"
// //           />
// //         </div>

// //         {/* Text Section */}
// //         <div className="relative z-20 w-full mt-4 lg:mt-0 lg:ml-8 flex flex-col items-center lg:items-start text-white">
// //           {/* Static Text */}
// //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-shadow-lg mb-2">
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
// //               Hello, I&apos;m
// //             </span>
// //           </h1>

// //           {/* Type Animation */}
// //           <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-2 text-shadow-lg">
// //             <TypeAnimation
// //               sequence={[
// //                 'Maryam Faizan',
// //                 1000,
// //                 'A Web Developer',
// //                 1000,
// //                 'A Programmer',
// //                 1000,
// //                 'UI/UX Designer',
// //                 1000,
// //               ]}
// //               wrapper="span"
// //               speed={30}
// //               repeat={Infinity}
// //             />
// //           </div>

// //           {/* Description */}
// //           <p className="mt-4 text-lg font-light max-w-lg px-4 lg:px-0">
// //             I am a full-stack web developer with a passion for creating interactive
// //             and responsive web applications. I have experience working with JavaScript,
// //             TypeScript, React, Next.js, Node.js, Express, Bootstrap, HTML, CSS, and Git.
// //             I am a quick learner and always looking to expand my knowledge and skill set.
// //             I am a team player and excited to work with others to create amazing applications.
// //           </p>

// //           {/* Social Icons */}
// //           <div className="w-full flex justify-center mt-5 space-x-8 text-4xl sm:text-5xl">
// //             <FaGithub
// //               className="text-purple-700 hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-white hover:bg-purple-700 transition-all duration-300 ease-in-out"
// //               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
// //               onClick={() => openLink('https://github.com')}
// //               aria-label="GitHub"
// //             />
// //             <FaLinkedin
// //               className="text-purple-700 hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-white hover:bg-blue-700 transition-all duration-300 ease-in-out"
// //               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
// //               onClick={() => openLink('https://linkedin.com')}
// //               aria-label="LinkedIn"
// //             />
// //             <SiUpwork
// //               className="text-purple-700 hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-white hover:bg-yellow-600 transition-all duration-300 ease-in-out"
// //               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
// //               onClick={() => openLink('https://upwork.com')}
// //               aria-label="Upwork"
// //             />
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default Hero;

// 'use client'
// import React from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { SiUpwork } from 'react-icons/si';
// import { TypeAnimation } from 'react-type-animation';
// import Image from 'next/image';

// const Hero = () => {
//   // Function to open external links in a new tab
//   const openLink = (url: string) => {
//     if (typeof window !== 'undefined') {
//       window.open(url, '_blank', 'noopener,noreferrer');
//     }
//   };

//   return (
//     <div className="relative w-full h-screen">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/about-image.png"
//           alt="Beautiful technology mobile background"
//           layout="fill"
//           objectFit="cover"
//           className="z-0 bg-transparent"
//         />
//         <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
//       </div>

//       <main className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left w-full h-full lg:w-3/4 xl:w-1/2 mx-auto px-4 sm:px-6 md:px-8">
        
//         {/* Profile Image */}
//         <div className="relative z-20 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mt-8 lg:mt-0 lg:mr-8">
//           <Image
//             src="/hero-image.png"
//             alt="profile pic"
//             width={840}
//             height={840}
//             className="rounded-full shadow-lg shadow-pink-600 hover:scale-110 transition-transform duration-300 ease-in-out"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="relative z-20 w-full mt-8 lg:mt-0 lg:ml-8 flex flex-col items-center lg:items-start text-white">
//           {/* Static Text */}
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-shadow-lg mb-2">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
//               Hello, I&apos;m
//             </span>
//           </h1>

//           {/* Type Animation */}
//           <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-2 text-shadow-lg">
//             <TypeAnimation
//               sequence={[
//                 'Maryam Faizan',
//                 1000,
//                 'A Web Developer',
//                 1000,
//                 'A Programmer',
//                 1000,
//                 'UI/UX Designer',
//                 1000,
//               ]}
//               wrapper="span"
//               speed={30}
//               repeat={Infinity}
//             />
//           </div>

//           {/* Description */}
//           <p className="mt-4 text-lg font-light max-w-lg px-4 lg:px-0">
//             I am a full-stack web developer with a passion for creating interactive
//             and responsive web applications. I have experience working with JavaScript,
//             TypeScript, React, Next.js, Node.js, Express, Bootstrap, HTML, CSS, and Git.
//             I am a quick learner and always looking to expand my knowledge and skill set.
//             I am a team player and excited to work with others to create amazing applications.
//           </p>

//           {/* Social Icons */}
//           <div className="w-full flex justify-center mt-5 space-x-8 text-4xl sm:text-5xl">
//             <FaGithub
//               className="text-purple-700 hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-white hover:bg-purple-700 transition-all duration-300 ease-in-out"
//               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
//               onClick={() => openLink('https://github.com')}
//               aria-label="GitHub"
//             />
//             <FaLinkedin
//               className="text-purple-700 hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-white hover:bg-blue-700 transition-all duration-300 ease-in-out"
//               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
//               onClick={() => openLink('https://linkedin.com')}
//               aria-label="LinkedIn"
//             />
//             <SiUpwork
//               className="text-purple-700 hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-white hover:bg-yellow-600 transition-all duration-300 ease-in-out"
//               style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
//               onClick={() => openLink('https://upwork.com')}
//               aria-label="Upwork"
//             />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Hero;
'use client'
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const Hero = () => {
  // Function to open external links in a new tab
  const openLink = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about-image.png"
          alt="Beautiful technology mobile background"
          layout="fill"
          objectFit="cover"
          className="z-0 bg-transparent"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      </div>

      <main className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left w-full h-screen lg:w-3/4 xl:w-1/2 mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Profile Image */}
        <div className="relative z-20 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mt-8 lg:mt-0 lg:mr-8">
          <Image
            src="/hero-image.png"
            alt="profile pic"
            width={840}
            height={840}
            className="rounded-full shadow-lg shadow-pink-600 hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Text Section */}
        <div className="relative z-20 w-full mt-4 lg:mt-0 lg:ml-8 flex flex-col items-center lg:items-start text-white">
          {/* Static Text */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-shadow-lg mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Hello, I&apos;m
            </span>
          </h1>

          {/* Type Animation */}
          <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-2 text-shadow-lg">
            <TypeAnimation
              sequence={[
                'Maryam Faizan',
                1000,
                'A Web Developer',
                1000,
                'A Programmer',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="mt-4 text-lg font-light max-w-lg px-4 lg:px-0">
            I am a full-stack web developer with a passion for creating interactive
            and responsive web applications. I have experience working with JavaScript,
            TypeScript, React, Next.js, Node.js, Express, Bootstrap, HTML, CSS, and Git.
            I am a quick learner and always looking to expand my knowledge and skill set.
            I am a team player and excited to work with others to create amazing applications.
          </p>

          {/* Social Icons */}
          <div className="w-full flex justify-center sm:justify-start mt-5 space-x-8 sm:space-x-6 text-4xl sm:text-5xl flex-wrap">
  <FaGithub
    className="text-white hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-pink-600 hover:bg-fuchsia-600 transition-all duration-300 ease-in-out"
    style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
    onClick={() => openLink('https://github.com')}
    aria-label="GitHub"
  />
  <FaLinkedin
    className="text-white hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-pink-600 hover:bg-fuchsia-600 transition-all duration-300 ease-in-out"
    style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
    onClick={() => openLink('https://linkedin.com')}
    aria-label="LinkedIn"
  />
  <SiUpwork
    className="text-white hover:text-white cursor-pointer shadow-md p-2 rounded-full bg-pink-600 hover:bg-fuchsia-600 transition-all duration-300 ease-in-out"
    style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
    onClick={() => openLink('https://upwork.com')}
    aria-label="Upwork"
  />
</div>

        </div>
      </main>
    </div>
  );
};

export default Hero;

