"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const About = ({ lang, t }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-16">
      <motion.div
        className="relative bg-gray-900 rounded-3xl p-10 shadow-2xl max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-6xl font-extrabold text-blue-400 mb-6">{t.about_title}</h2>
        <p className="text-xl text-gray-200 leading-relaxed mb-6">{t.about.description}</p>
        <div className="space-y-4 text-left">
          <div>
            <h3 className="text-2xl font-bold text-white">{t.about.experience_title}</h3>
            <p className="text-lg text-gray-300 whitespace-pre-line">
              {t.about.experience}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{t.about.tech_title}</h3>
            <p className="text-lg text-gray-300 whitespace-pre-line">
              {t.about.tech}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{t.about.passion_title}</h3>
            <p className="text-lg text-gray-300 whitespace-pre-line">
              {t.about.passion}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{t.about.goal_title}</h3>
            <p className="text-lg text-gray-300 whitespace-pre-line">
              {t.about.goal}
            </p>
          </div>
        </div>

        {/* Imagen representativa */}
        <div className="mt-8">
          <img
            src="/assets/profile.png"
            alt="About me"
            className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
