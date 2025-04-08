"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = ({ lang, t }) => {
  const projects = t.projects.list;
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll: cambia de proyecto cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  // Al hacer clic en una miniatura se cambia el proyecto activo
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
  id="projects"
  className="min-h-screen bg-gray-800/80 py-16 px-4 flex flex-col items-center"
>
  <motion.h2
    className="text-6xl font-extrabold mb-8 text-blue-400"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.5 }}
  >
    {t.projects.title}
  </motion.h2>

  {/* Contenedor responsivo para el carrusel de miniaturas */}
  <div className="max-w-5xl w-full mb-8">
    <div className="flex overflow-x-auto space-x-4 pb-4">
      {projects.map((project, index) => (
        <div
          key={project.id}
          onClick={() => handleThumbnailClick(index)}
          className={`flex-shrink-0 flex flex-col items-center cursor-pointer whitespace-nowrap px-2 ${
            activeIndex === index ? "border-b-4 border-blue-500" : ""
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full shadow-md"
          />
          <span className="mt-2 text-white text-sm md:text-base text-center">
            {project.title}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Contenedor responsivo para el detalle del proyecto activo */}
  <div className="max-w-5xl w-full">
    <div className="relative bg-gray-900/70 p-6 md:p-8 rounded-3xl shadow-2xl transition-transform duration-500">
      <AnimatePresence mode="wait">
        <motion.div
          key={projects[activeIndex].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          {/* Ajuste del layout con grid/flex */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            {/* Imagen del proyecto */}
            <div className="mb-4 md:mb-0 md:w-1/2 flex justify-center">
              <img
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                className="w-full max-w-sm object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* Texto + botón */}
            <div className="md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {projects[activeIndex].title}
              </h3>
              <p className="text-base md:text-lg text-gray-300 mb-4">
                {projects[activeIndex].description}
              </p>
              <a
                href={projects[activeIndex].visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                {t.projects.visitButtonText}
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>

  );
};

export default Projects;
