import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white px-6 py-20"
    >
      <div className="max-w-4xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-600 mb-4"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-lg leading-7 max-w-2xl mx-auto"
        >
          I am <strong>Diyaeddin Habdo</strong>, a Computer Engineering graduate from Malatya Turgut Özal University (2025). I love building scalable and efficient full-stack applications using modern frameworks and best practices.
          <br />
          I’m highly motivated, detail-oriented, and I enjoy solving real-world problems with code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left"
        >
          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="font-semibold text-blue-600">📍 Location</p>
            <p className="text-gray-700">Malatya, Turkey</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="font-semibold text-blue-600">🎓 Education</p>
            <p className="text-gray-700">B.Sc. in Computer Engineering, Malatya Turgut Özal University (Graduated 2025)</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="font-semibold text-blue-600">📧 Email</p>
            <p className="text-gray-700">diyaeddinhabdo@gmail.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
