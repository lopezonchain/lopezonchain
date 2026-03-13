"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const awardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const Awards = ({ lang, t }) => {
  const awards = t.awards.list;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showEmpty, setShowEmpty] = useState(false);
  const emptyRef = useRef(null);

  const handleArrowClick = () => {
    setShowEmpty(true);
    setTimeout(() => {
      emptyRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <section id="awards" className="min-h-screen relative bg-black overflow-hidden">
      {/* Fondo animado global */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-900/20 via-teal-900/20 to-black opacity-50"></div>
      </div>

      {awards.map((award, index) => (
        <motion.div
          key={award.id}
          className="min-h-screen flex flex-col justify-center items-center relative p-8 overflow-hidden"
          variants={awardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          {/* Gradiente de fondo animado para cada award */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-teal-700 to-sky-600 opacity-80 animate-gradient" style={{ backgroundSize: '200% 200%' }}></div>
          
          {/* Efectos de partículas decorativas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"
              animate={{ 
                scale: hoveredIndex === index ? 1.2 : 1,
                opacity: hoveredIndex === index ? 0.4 : 0.2
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
              animate={{ 
                scale: hoveredIndex === index ? 1.3 : 1,
                opacity: hoveredIndex === index ? 0.5 : 0.2
              }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
          </div>

          <div className="max-w-5xl w-full text-center relative z-10">
            {/* Contenedor de la imagen con efectos avanzados */}
            <motion.div 
              className="mb-12 relative"
              initial={{ scale: 0.8, rotateY: -15 }}
              whileInView={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <a 
                href={award.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative group"
              >
                {/* Múltiples capas de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-500 rounded-3xl blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-glow"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 via-teal-600 to-sky-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-gradient" style={{ backgroundSize: '200% 200%' }}></div>
                
                {/* Imagen del award */}
                <motion.div
                  className="relative glass p-4 rounded-3xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 3
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full max-w-2xl mx-auto object-contain rounded-2xl shadow-2xl"
                  />
                  
                  {/* Overlay con efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>

                {/* Badge de "Click to view" */}
                <motion.div
                  className="absolute top-8 right-8 glass px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <span className="flex items-center gap-2">
                    🔗 View Award
                  </span>
                </motion.div>
              </a>
            </motion.div>

            {/* Título con efecto especial */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-5xl md:text-7xl font-extrabold mb-6 text-white relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">{award.title}</span>
                {/* Efecto de subrayado animado */}
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.div>
              </motion.h3>
            </motion.div>

            {/* Descripción mejorada */}
            <motion.p 
              className="text-xl md:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {award.description}
            </motion.p>

            {/* Decoración adicional - Estrellas */}
            <motion.div 
              className="flex justify-center gap-4 mt-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-4xl md:text-5xl"
                  animate={{ 
                    rotate: 360,
                    scale: hoveredIndex === index ? 1.2 : 1
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 0.5, ease: "easeInOut" }
                  }}
                  style={{ 
                    filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))',
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  ⭐
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Flecha clickable (solo en el último award) */}
          {index === awards.length - 1 && !showEmpty && (
            <motion.button
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer group"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={handleArrowClick}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8 text-white/50 group-hover:text-cyan-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          )}
        </motion.div>
      ))}

      {/* Sección vacía - aparece al pulsar la flecha */}
      <AnimatePresence>
        {showEmpty && (
          <motion.div
            ref={emptyRef}
            className="min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden px-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-teal-900/10 pointer-events-none" />
            <motion.div
              className="glass p-10 rounded-3xl text-center max-w-lg relative z-10 border border-white/10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                🏗️
              </motion.div>
              <h3 className="text-3xl font-extrabold mb-3 gradient-text bg-gradient-to-r from-cyan-400 to-teal-400">
                {lang === "es" ? "En construcción..." : "Under construction..."}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {lang === "es"
                  ? "De momento no hay más premios aquí, pero estoy trabajando en ello 👀"
                  : "No more awards here yet, but I'm working on it 👀"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Awards;
