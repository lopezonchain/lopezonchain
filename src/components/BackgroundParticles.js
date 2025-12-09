"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const BackgroundParticles = ({ count = 60 }) => {
  const [particles, setParticles] = useState([]);

  // Paleta de colores cyan/teal tech
  const colorPalette = useMemo(() => [
    'rgba(6, 182, 212, 0.6)',    // Cyan
    'rgba(20, 184, 166, 0.6)',   // Teal
    'rgba(14, 165, 233, 0.6)',   // Sky Blue
    'rgba(34, 211, 238, 0.6)',   // Light Cyan
    'rgba(56, 189, 248, 0.6)',   // Blue
    'rgba(99, 102, 241, 0.6)',   // Indigo accent
  ], []);

  const generateParticles = () => {
    const adjustedCount = window.innerWidth < 1000 ? Math.floor(count / 3) : count;
    return Array.from({ length: adjustedCount }, (_, i) => {
      const particleType = Math.random();
      return {
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: particleType > 0.7 ? Math.random() * 8 + 12 : Math.random() * 6 + 3,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        blur: particleType > 0.7 ? Math.random() * 6 + 4 : Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.3,
        duration: Math.random() * 15 + 10,
        type: particleType > 0.8 ? 'star' : 'circle',
      };
    });
  };

  useEffect(() => {
    setParticles(generateParticles());

    const handleResize = () => {
      setParticles(generateParticles());
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [count, colorPalette]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1,
        background: "radial-gradient(ellipse at top, rgba(10, 10, 30, 1) 0%, rgba(0, 0, 0, 1) 100%)",
      }}
    >
      {/* Gradientes de fondo animados */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.08) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "radial-gradient(circle at 80% 70%, rgba(245, 87, 108, 0.08) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Partículas flotantes */}
      {particles.map((particle) => {
        return (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: particle.opacity,
              scale: 1,
            }}
            animate={{
              x: [
                particle.x,
                particle.x + Math.sin(particle.id * 0.5) * 80,
                particle.x,
              ],
              y: [
                particle.y,
                particle.y + Math.cos(particle.id * 0.5) * 80,
                particle.y,
              ],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
              scale: [1, 1.2],
              rotate: particle.type === 'star' ? 360 : 0,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              rotate: particle.type === 'star' ? { duration: particle.duration, repeat: Infinity, ease: "linear" } : {},
            }}
            style={{
              position: "absolute",
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.type === 'star' 
                ? `linear-gradient(45deg, ${particle.color}, rgba(255, 255, 255, 0.8))`
                : particle.color,
              borderRadius: particle.type === 'star' ? '30%' : '50%',
              filter: `blur(${particle.blur}px)`,
              pointerEvents: "none",
              boxShadow: `0 0 ${particle.blur * 3}px ${particle.color}, 0 0 ${particle.blur * 6}px ${particle.color}`,
              willChange: "transform, opacity",
            }}
          />
        );
      })}

      {/* Efecto de viñeta sutil */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );  
};

export default BackgroundParticles;
