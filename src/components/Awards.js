"use client";

import { motion } from "framer-motion";

const Awards = ({ lang, t }) => {
  const awards = t.awards.list;

  return (
    <section id="awards" className="min-h-screen bg-gray-900/80 py-16 px-4">
      <motion.h2
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {t.awards.title}
      </motion.h2>
      <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            className="relative bg-gray-800/70 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4">
              {/* Imagen o ícono del premio */}
              <img
                src="/images/award-placeholder.jpg"
                alt="Premio"
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2">{award.title}</h3>
            <p className="text-lg">{award.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
