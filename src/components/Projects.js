"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = ({ lang, t }) => {
  const projects = t.projects.list;
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoDelay, setAutoDelay] = useState(5000);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleThumbnailClick = (index) => {
    setAutoDelay(60000);
    setActiveIndex(index);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setMousePosition({ x: e.clientX, y: e.clientY });

    const rotateX = -((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 flex flex-col items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fondo con efectos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Título */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-6xl md:text-7xl font-extrabold mb-4 gradient-text bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 animate-gradient">
          {t.projects.title}
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
      </motion.div>

      {/* Carrusel de miniaturas mejorado */}
      <motion.div
        className="max-w-6xl w-full mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex pt-12 items-center justify-center overflow-x-auto space-x-6 pb-6 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => handleThumbnailClick(index)}
              className="flex-shrink-0 flex flex-col items-center cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`relative ${activeIndex === index ? 'ring-4 ring-cyan-500 rounded-full' : ''}`}>
                {/* Efecto de brillo en activo */}
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-xl opacity-50 animate-pulse-glow"></div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full shadow-lg transition-all duration-300 relative z-10"
                />
              </div>
              <span className={`mt-3 text-sm md:text-base text-center font-medium transition-all duration-300 whitespace-nowrap ${activeIndex === index
                ? 'text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text'
                : 'text-white/70 group-hover:text-white'
                }`}>
                {project.title}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tarjeta del proyecto activo */}
      <motion.div
        className="max-w-6xl w-full flex items-center justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full glass p-8 md:p-10 rounded-3xl shadow-2xl glow-hover"
          style={{
            transform: `perspective(1500px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: "preserve-3d"
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Borde animado */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-500 opacity-20 blur-xl animate-gradient pointer-events-none"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={projects[activeIndex].id}
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:space-x-10">
                {/* Imagen del proyecto */}
                <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <img
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      className="relative w-full max-w-md object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Contenido */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <motion.h3 
                    className="text-4xl md:text-5xl font-bold mb-6 gradient-text bg-gradient-to-r from-cyan-400 to-teal-400"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {projects[activeIndex].title}
                  </motion.h3>

                  <motion.p
                    className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {projects[activeIndex].description}
                  </motion.p>

                  {t.projects.visitButtonText.trim() && projects[activeIndex].visitUrl && (
                    <motion.a
                      href={projects[activeIndex].visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center px-8 py-4 text-lg font-bold text-white rounded-xl overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 animate-gradient"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        {t.projects.visitButtonText}
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Indicadores de progreso */}
      <motion.div
        className="flex space-x-3 mt-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
              ? 'w-12 bg-gradient-to-r from-cyan-500 to-teal-500'
              : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
