"use client";

import { motion } from "framer-motion";

const AnimatedHeaderDescription = ({ text }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.p
      className="text-xl md:text-2xl mb-8 text-gray-200/90 leading-relaxed max-w-3xl mx-auto"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-2 transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 hover:bg-clip-text cursor-default"
          whileHover={{ 
            scale: 1.1,
            rotate: 2,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedHeaderDescription;
  