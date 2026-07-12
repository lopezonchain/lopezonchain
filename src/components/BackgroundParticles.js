"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const BackgroundParticles = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      <div className="global-noise" aria-hidden="true" />
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
    </>
  );
};

export default BackgroundParticles;
