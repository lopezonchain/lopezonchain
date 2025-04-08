"use client";

import { motion } from "framer-motion";

const awardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1, ease: "easeOut" } 
  },
};

const Awards = ({ lang, t }) => {
  const awards = t.awards.list;

  return (
    <section id="awards" className="min-h-screen relative bg-black">
      {awards.map((award) => (
        <motion.div
          key={award.id}
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-900 to-pink-700 text-white p-8"
          variants={awardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          <div className="max-w-3xl text-center">
            <div className="mb-8">
              {/* Imagen e ícono grande del premio, con enlace */}
              <a href={award.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full max-w-lg object-contain rounded-2xl shadow-2xl transition-transform transform hover:scale-105 mx-auto"
                />
              </a>
            </div>
            <h3 className="text-6xl font-extrabold mb-4">{award.title}</h3>
            <p className="text-2xl">{award.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Awards;
