
import React from 'react';
import { ReactTyped } from 'react-typed';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpeg'; // kendi resmini koy burada

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-white via-blue-50 to-blue-100 px-6"
    >
      {/* Background SVG wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" className="w-full h-24">
          <path d="M0,0V46.29c47.88,22.2,103.79,32.41,158,28,70-6,136-33,206-32,72,.9,142,33,213,34s138-30,210-32,144,29,213,32c63,3,127-13,200-30V0Z" fill="#e0f2fe"></path>
        </svg>
      </div>

      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Diyaeddin HABDO's Profile Image"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-32 h-32 md:w-70 md:h-70 rounded-full object-cover border-8 border-white shadow-lg z-10"
      />

      {/* Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-800 mt-6"
      >
        Hi, I'm <span className="text-blue-600">Diyaeddin</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-2 text-lg md:text-2xl text-gray-600"
      >
        <ReactTyped
          strings={['Computer Engineer','Full Stack Developer',]}
          typeSpeed={60}
          backSpeed={30}
          loop
        />
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          style={{ color: 'white' }}
        >
          Contact Me
        </a>
        <a
          href="#projects"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          View Projects
        </a>
        <a
        href="https://diyaeddin-habdo.github.io/portfolio/DiyaeddinHabdoCV.pdf"
        download={true}
        className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
      >
        Download CV
        </a>

      </motion.div>
    </section>
  );
};

export default Hero;