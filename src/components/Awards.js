"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

          {/* Scroll indicator (solo en el primer award) */}
          {index === 0 && (
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          )}
        </motion.div>
      ))}
    </section>
  );
};

export default Awards;
