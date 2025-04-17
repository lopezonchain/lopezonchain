"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = ({ lang, t }) => {
  const projects = t.projects.list;
  const [activeIndex, setActiveIndex] = useState(0);
  // Tiempo de auto-scroll (por defecto 5s)
  const [autoDelay, setAutoDelay] = useState(5000);
  // Estado para controlar el efecto tilt en la tarjeta 3D
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Auto-scroll: cambia de proyecto cada `autoDelay` milisegundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (autoDelay === 60000) {
          setAutoDelay(5000);
        }
        return (prevIndex + 1) % projects.length;
      });
    }, autoDelay);
    return () => clearInterval(interval);
  }, [projects.length, autoDelay]);

  // Al hacer clic en una miniatura: activa ese proyecto y extiende el delay a 1 minuto
  const handleThumbnailClick = (index) => {
    setAutoDelay(60000);
    setActiveIndex(index);
  };

  // Handlers para el efecto tilt sobre el contenedor (no solo sobre la tarjeta)
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); // se calcula en función del contenedor
    const x = e.clientX - rect.left; // posición X relativa
    const y = e.clientY - rect.top;  // posición Y relativa
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Intensidad de giro (máximo 10°)
    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-1000/80 py-16 px-4 flex flex-col items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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

      {/* Carrusel de miniaturas */}
      <div className="max-w-5xl w-full mb-8">
        <div className="flex items-center overflow-x-auto space-x-4 pb-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 flex flex-col items-center cursor-pointer whitespace-nowrap px-2 ${activeIndex === index ? "border-b-4 border-blue-500" : ""
                }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full shadow-md transition-transform duration-300"
              />
              <span className="mt-2 text-white text-sm md:text-base text-center">
                {project.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contenedor para el detalle del proyecto activo  */}
      <a
        href={projects[activeIndex].visitUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
      >
        <div
          className="max-w-5xl w-full flex items-center justify-center min-h-[400px]"
        >
          <motion.div
            className="relative bg-gray-900 p-6 md:p-8 rounded-3xl shadow-2xl"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[activeIndex].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8">
                  {/* Imagen del proyecto */}
                  <div className="mb-4 md:mb-0 md:w-1/2 flex justify-center">
                    <img
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      className="w-full max-w-sm object-cover rounded-2xl shadow-md transition-transform duration-300"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="md:w-1/2 flex flex-col items-center justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
                      {projects[activeIndex].title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300 mb-4 text-center">
                      {projects[activeIndex].description}
                    </p>
                    {t.projects.visitButtonText.trim() &&
                      projects[activeIndex].visitUrl && (
                        <a
                          href={projects[activeIndex].visitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                        >
                          {t.projects.visitButtonText}
                        </a>
                      )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </a>
    </section>
  );
};

export default Projects;
