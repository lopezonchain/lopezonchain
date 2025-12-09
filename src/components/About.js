"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.1
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const About = ({ lang, t }) => {
  const sections = [
    { title: t.about.experience_title, content: t.about.experience, icon: "💼" },
    { title: t.about.tech_title, content: t.about.tech, icon: "⚡" },
    { title: t.about.passion_title, content: t.about.passion, icon: "🚀" },
    { title: t.about.goal_title, content: t.about.goal, icon: "🎯" }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        className="relative max-w-6xl mx-auto w-full z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Título principal con efecto */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-6xl md:text-7xl font-extrabold mb-4 gradient-text bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 animate-gradient">
            {t.about_title}
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
        </motion.div>

        {/* Grid de contenido */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Columna izquierda - Información */}
          <div className="space-y-6">
            <motion.div
              className="glass p-8 rounded-2xl glow-hover"
              variants={itemVariants}
            >
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {t.about.description}
              </p>
            </motion.div>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-2xl glow-hover group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                    {section.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                      {section.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Columna derecha - Imagen con efectos */}
          <motion.div
            className="flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Efecto de brillo detrás */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-gradient"></div>
              
              {/* Imagen */}
              <motion.div
                className="relative glass p-4 rounded-3xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src="/assets/profile.png"
                  alt="About me"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover animate-float"
                />
                
                {/* Badges decorativos */}
                <motion.div
                  className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  ✨ Blockchain Dev
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  🔥 Web3 Expert
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
