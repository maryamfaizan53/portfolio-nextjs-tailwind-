"use client";
import Image from 'next/image';
import React from 'react';

const skills = [
  { name: 'HTML5', level: 'Expert' },
  { name: 'CSS3', level: 'Expert' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'React.js', level: 'Expert' },
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Expert' },
  { name: 'Bootstrap', level: 'Expert' },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-8">
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

      <section className="container py-10 relative z-10">
        <h2 className="text-center text-pink-600 text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12" style={{ fontFamily: 'inter, lusitana' }}>
          Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-200 bg-opacity-20 shadow-inner shadow-pink-600 rounded-2xl p-4 sm:p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl"
            >
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">{skill.name}</h4>
              <p className="text-md md:text-lg text-white">{skill.level}</p>
              <div className="mt-3">
                {/* Progress bar simulation */}
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r from-red-300 to-fuchsia-600 ${
                      skill.level === 'Expert' ? 'w-10/12' : 'w-8/12'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;



// "use client"
// import Image from 'next/image';
// import React from 'react';


// const skills = [
//   { name: 'HTML5', level: 'Expert' },
//   { name: 'CSS3', level: 'Expert' },
//   { name: 'JavaScript', level: 'Expert' },
//   { name: 'TypeScript', level: 'Intermediate' },
//   { name: 'React.js', level: 'Expert' },
//   { name: 'Next.js', level: 'Intermediate' },
//   { name: 'Tailwind CSS', level: 'Expert' },
//   { name: 'Bootstrap', level: 'Expert' },
// ];

// const Skills = () => {
//   return (
//     <div className="h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/about-image.png"
//           alt="Beautiful technology mobile background"
//           layout="fill"
//           objectFit="cover"
//           className="z-0 bg-transparent"
//         />
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
//       </div>

//       <section className="container py-10 relative z-10">
//         <h2 className="text-center text-pink-600 text-6xl font-bold mb-12" style={{ fontFamily: 'inter,lusitana' }}>
//         Expertise
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {skills.map((skill) => (
//             <div key={skill.name} className="bg-slate-200 bg-opacity-20 shadow-inner shadow-pink-600 rounded-2xl p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl">
//               <h4 className="text-2xl font-semibold text-white mb-2">{skill.name}</h4>
//               <p className="text-lg text-white">{skill.level}</p>
//               <div className="mt-3">
//                 {/* Progress bar simulation */}
//                 <div className="w-full bg-gray-300 rounded-full h-2">
//                   <div
//                     className={`h-2 rounded-full bg-gradient-to-r from-red-300 to-fuchsia-600 ${
//                       skill.level === 'Expert' ? 'w-10/12' : 'w-8/12'
//                     }`}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Skills;
