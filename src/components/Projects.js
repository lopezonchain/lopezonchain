"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Projects = ({ lang, t }) => {
  const projects = t.projects.list;
  
  return (
    <section id="projects" className="min-h-screen bg-gray-800/80 py-16 px-4">
      <motion.h2
        className="text-6xl font-extrabold text-center mb-12 text-blue-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t.projects.title}
      </motion.h2>
      <div className="container mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative bg-gray-900/70 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          >
            <div className="mb-6">
              {/* Imagen del proyecto (Placeholder) */}
              <img
                src="/images/project-placeholder.jpg"
                alt="Project"
                className="w-full h-56 object-cover rounded-2xl shadow-md"
              />
            </div>
            <h3 className="text-4xl font-bold mb-4 text-white">{project.title}</h3>
            <p className="text-lg text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
