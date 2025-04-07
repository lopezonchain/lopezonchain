"use client";

import { motion } from "framer-motion";

const WorkHistory = ({ lang, t }) => {
  const history = t.workHistory.list;

  return (
    <section id="work" className="min-h-screen bg-gray-800/20 py-16 px-4">
      <motion.h2
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {t.workHistory.title}
      </motion.h2>
      <div className="container mx-auto space-y-8">
        {history.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative bg-gray-900/70 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition transform hover:scale-105"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-semibold mb-2">
              {item.role} – {item.company}
            </h3>
            <p className="text-base text-gray-400 mb-1">
              {item.period} | {item.location}
            </p>
            {/* Logo o imagen de la empresa */}
            <div className="mt-4">
              <img
                src="/images/company-placeholder.jpg"
                alt="Logo de la empresa"
                className="w-20 h-20 object-contain rounded-full mx-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkHistory;
