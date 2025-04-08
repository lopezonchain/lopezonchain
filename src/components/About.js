"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const About = ({ lang, t }) => {
  // Texto de inspiración (puedes integrarlo a tu locales si lo deseas)
  const title = "Hi, I'm Lopez!";
  const description = `
A passionate onchain full-stack developer, specialized in blockchain with a flair for digital innovation. 
I love crafting modern technological solutions with a creative twist.
  `;
  const experience = `
I've worked on challenging projects that merge conventional web technologies 
with emerging blockchain and cybersecurity solutions.
  `;
  const passion = `
I love building engaging user experiences that are visually striking and functionally robust, 
where design and technology come together to make a difference.
  `;
  const goal = `
To drive digital transformation through scalable, secure, and disruptive solutions.
  `;
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-16">
      <motion.div
        className="relative bg-gray-900/70 rounded-3xl p-10 shadow-2xl max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-6xl font-extrabold text-blue-400 mb-6">{title}</h2>
        <p className="text-xl text-gray-200 leading-relaxed mb-6">{description}</p>
        <div className="space-y-4 text-left">
          <div>
            <h3 className="text-2xl font-bold text-white">Experience:</h3>
            <p className="text-lg text-gray-300">{experience}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Passion:</h3>
            <p className="text-lg text-gray-300">{passion}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Goal:</h3>
            <p className="text-lg text-gray-300">{goal}</p>
          </div>
        </div>
        {/* Imagen representativa (Placeholder) */}
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
