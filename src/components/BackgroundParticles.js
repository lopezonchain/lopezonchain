"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundParticles = ({ count = 80 }) => {
  const [particles, setParticles] = useState([]);

  // Función que ajusta la cantidad de partículas según el ancho de la ventana:
  const generateParticles = () => {
    // Si el ancho es menor a 768px se reduce a la mitad la cantidad
    const adjustedCount = window.innerWidth < 1000 ? Math.floor(count / 4) : count;
    return Array.from({ length: adjustedCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 10 + 5, // Tamaño de 5 a 15px
      color: `hsl(${Math.random() * 360}, 100%, 70%)`, // Colores aleatorios
      blur: Math.random() * 4 + 2, // Desenfoque de 2 a 6px
      opacity: Math.random() * 0.5 + 0.5, // Opacidad de 0.5 a 1
    }));
  };

  useEffect(() => {
    // Genera las partículas al montar el componente
    setParticles(generateParticles());

    // Se actualiza el número de partículas al cambiar el tamaño de la ventana
    const handleResize = () => {
      setParticles(generateParticles());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [count]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1, // Asegura que esté detrás del contenido
        background: "linear-gradient(45deg, #000, rgb(0,28,42))", // Fondo con gradiente desde negro a rgb(0,28,42)
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
            scale: 1,
          }}
          animate={{
            x: particle.x + Math.sin(particle.id) * 50 - 25, // Movimiento ondulado
            y: particle.y + Math.cos(particle.id) * 50 - 25,
            opacity: Math.random() * 0.5 + 0.5, // Cambio de opacidad
            scale: Math.random() * 1.5 + 0.5, // Cambio de escala
            rotate: Math.random() * 360, // Rotación
          }}
          transition={{
            duration: Math.random() * 6 + 4, // Duración aleatoria
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            position: "absolute",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            borderRadius: "50%",
            filter: `blur(${particle.blur}px)`,
            pointerEvents: "none",
            boxShadow: `0 0 ${particle.blur * 2}px ${particle.color}`, // Efecto de brillo
          }}
        />
      ))}
    </div>
  );  
};

export default BackgroundParticles;
