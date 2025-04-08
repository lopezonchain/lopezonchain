"use client";

import { motion } from "framer-motion";

const timelineVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.25, duration: 0.8, ease: "easeOut" },
  }),
};

const WorkHistory = ({ lang, t }) => {
  const history = t.workHistory.list;

  return (
    <section id="work" className="min-h-screen bg-gray-1000/80 py-16 px-4">
      <motion.h2
        className="text-6xl font-extrabold text-center mb-12 text-blue-400"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t.workHistory.title}
      </motion.h2>

      <div className="container mx-auto space-y-12">
        {history.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Tarjeta con imagen diagonal a la derecha */}
            <div className="md:flex relative overflow-hidden shadow-2xl rounded-3xl transform hover:scale-[1.02] transition duration-300 max-h-82">
              {/* Bloque de texto (lado izquierdo) */}
              <div className="md:w-2/3 relative">
                {/* Pseudo-elemento que hace el relleno diagonal */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'rgba(31,41,55,0.7)', 
                    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
                    zIndex: 0, 
                  }}
                />
                {/* Contenedor del contenido real */}
                <div className="relative p-6 md:p-8" style={{ zIndex: 1 }}>
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                    {item.role} – {item.company}
                  </h3>
                  <p className="text-xl text-gray-300 mb-2">
                    {item.period} | {item.location}
                  </p>
                </div>
              </div>


              {/* Contenedor para la imagen (lado derecho) */}
              <div className="md:w-1/3 h-64 md:h-auto">
                <img
                  src={item.image}
                  alt={`${item.company} logo`}
                  className="w-full h-full object-cover"
                  style={{
                    // Clip-path diagonal
                    clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkHistory;
