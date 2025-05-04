import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white px-6 py-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-600 mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-sm text-blue-500 mb-2">{project.type}</p>
            <p className="text-gray-700">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-500 underline mt-2 inline-block"
            >
              View on Google Drive
            </a>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
