import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-50 px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-600 text-center mb-12"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-800">
            Bera Ar-Ge Yazılım, Malatya – <span className="text-blue-600">Intern</span>
          </h3>
          <p className="text-gray-500 text-sm">June 2024 – August 2024</p>

          <ul className="mt-4 text-gray-700 space-y-2 list-disc list-inside">
            <li>Developed a full-featured e-commerce website during internship.</li>
            <li>Built a role-based admin panel for product and user management.</li>
            <li>Implemented secure token-based API authentication.</li>
            <li>Focused on scalability and maintainability using modern development practices.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
