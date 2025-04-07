"use client";

import { motion } from "framer-motion";

const About = ({ lang, t }) => {
  const text = t.about;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-16"
    >
      <motion.div
        className="relative bg-gray-800/80 rounded-xl p-8 shadow-2xl max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-6">{text.title}</h2>
        <p className="text-xl mb-8">{text.description}</p>
        <img
          src="assets/profile.png"
          alt="Profile image"
          className="w-full max-w-md rounded-lg shadow-lg mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default About;
