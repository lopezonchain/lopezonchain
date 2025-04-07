"use client";

import { motion } from "framer-motion";

const Projects = ({ lang, t }) => {
  const projects = t.projects.list;

  return (
    <section id="projects" className="min-h-screen bg-gray-900/80 py-16 px-4">
      <motion.h2
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {t.projects.title}
      </motion.h2>
      <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative bg-gray-800/70 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4">
              {/* Imagen del proyecto */}
              <img
                src="/images/project-placeholder.jpg"
                alt="Proyecto"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
            <p className="text-lg">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
