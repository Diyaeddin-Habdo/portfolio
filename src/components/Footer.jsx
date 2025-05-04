import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    // Added border-t and border-gray-200 classes
    <footer className="bg-gray-100 py-6 px-4 mt-10 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm"
      >
        <p className="mb-4 md:mb-0 text-center">
          © {new Date().getFullYear()} Diyaeddin Habdo. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Diyaeddin-Habdo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/diyaeddin-habdo-0b26a3236"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;