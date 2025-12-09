"use client";

import { motion } from "framer-motion";

const timelineVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WorkHistory = ({ lang, t }) => {
  const history = t.workHistory.list;

  return (
    <section id="work" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Título */}
      <motion.div
        className="text-center mb-16 z-10 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-6xl md:text-7xl font-extrabold mb-4 gradient-text bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 animate-gradient">
          {t.workHistory.title}
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
      </motion.div>

      {/* Timeline container */}
      <div className="container mx-auto max-w-6xl relative">
        {/* Línea vertical del timeline - desktop: centro, mobile: derecha */}
        <div className="absolute md:left-1/2 right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-teal-500 to-sky-500 md:transform md:-translate-x-1/2 rounded-full z-[15]"></div>

        <div className="space-y-16">
          {history.map((item, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={item.id}
                custom={index}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                {/* Timeline dot - desktop: centro, mobile: derecha */}
                <div className="absolute right-[14px] md:right-auto md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-[20] flex">
                  <motion.div
                    className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 ring-4 md:ring-8 ring-black"
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 blur-lg opacity-50 animate-pulse-glow"></div>
                  </motion.div>
                </div>

                {/* Contenido */}
                <div className={`md:flex md:items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                  {/* Espacio vacío para centrar */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Tarjeta */}
                  <motion.div
                    className={`md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'} relative z-[10]`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="glass p-8 rounded-3xl glow-hover group relative overflow-hidden">
                      {/* Efecto de gradiente en hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>

                      {/* Contenido de la tarjeta */}
                      <div className="relative z-10">
                        {/* Imagen */}
                        <div className="mb-6 overflow-hidden rounded-2xl aspect-[4/3]">
                          <motion.img
                            src={item.image}
                            alt={`${item.company} logo`}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Información */}
                        <div>
                          <motion.h3 
                            className="text-3xl font-bold mb-3 gradient-text bg-gradient-to-r from-cyan-400 to-teal-400"
                            initial={{ x: -20 }}
                            whileInView={{ x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {item.role}
                          </motion.h3>
                          
                          <motion.p 
                            className="text-2xl font-semibold text-white mb-4"
                            initial={{ x: -20 }}
                            whileInView={{ x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {item.company}
                          </motion.p>

                          <div className="flex flex-wrap items-center gap-4 text-gray-300">
                            <motion.div 
                              className="flex items-center gap-2 glass px-4 py-2 rounded-full"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: 0.4, type: "spring" }}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-sm font-medium">{item.period}</span>
                            </motion.div>

                            <motion.div 
                              className="flex items-center gap-2 glass px-4 py-2 rounded-full"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: 0.5, type: "spring" }}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-sm font-medium">{item.location}</span>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Decoración de esquina */}
                      <div className={`absolute ${isLeft ? 'top-0 right-0' : 'top-0 left-0'} w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl`}></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
