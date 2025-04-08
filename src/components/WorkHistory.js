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
    <section id="work" className="min-h-screen bg-gray-800/80 py-16 px-4">
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
            className="relative bg-gray-900/70 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-transform transform hover:scale-105"
          >
            <h3 className="text-4xl font-bold mb-4 text-white">
              {item.role} – {item.company}
            </h3>
            <p className="text-xl text-gray-300 mb-2">
              {item.period} | {item.location}
            </p>
            {/* Logo representativo de la empresa (Placeholder) */}
            <div className="mt-6 flex justify-center">
              <img
                src="/assets/profile.png"
                alt="Company logo"
                className="w-24 h-24 rounded-full object-cover shadow-lg transition-transform transform hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkHistory;
