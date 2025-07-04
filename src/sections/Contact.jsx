import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-6 py-20 flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-600 mb-12"
      >
        Contact Me
      </motion.h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 max-w-4xl w-full text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <FaEnvelope className="text-blue-600 text-2xl mb-2 mx-auto" />
          <p className="font-semibold text-gray-700">Email</p>
          <a href="mailto:diyaeddinhabdo@gmail.com" className="text-blue-600 text-sm">
            diyahabdo@gmail.com
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <FaPhoneAlt className="text-blue-600 text-2xl mb-2 mx-auto" />
          <p className="font-semibold text-gray-700">Phone</p>
          <a href="tel:+905527262536" className="text-blue-600 text-sm">
            +90 552 726 25 36
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <FaLinkedin className="text-blue-600 text-2xl mb-2 mx-auto" />
          <p className="font-semibold text-gray-700">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/diyaeddin-habdo-0b26a3236"
            target="_blank"
            className="text-blue-600 text-sm"
            rel="noreferrer"
          >
            linkedin.com/in/diyaeddin-habdo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
