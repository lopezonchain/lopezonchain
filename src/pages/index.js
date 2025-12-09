"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpCircle } from 'react-icons/fi'; // Importamos el icono de flecha hacia arriba
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import WorkHistory from '../components/WorkHistory';
import Awards from '../components/Awards';
import BackgroundParticles from '../components/BackgroundParticles';
import { sdk } from '@farcaster/frame-sdk'

import en from '../locales/en';
import es from '../locales/es';

export default function Home() {
  const [language, setLanguage] = useState('en');
  const t = language === 'en' ? en : es;

  useEffect(() => {
    import('@farcaster/frame-sdk').then(({ sdk }) => {
      sdk.actions.ready({ disableNativeGestures: true });
    });
  }, []);

  // Función para hacer scroll suave a la parte superior
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Estado para controlar la visibilidad del botón de scroll
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll vertical es mayor a 100px mostramos el botón
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Limpiamos el event listener al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <Header onLanguageChange={setLanguage} t={t} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-[100vh] overflow-x-hidden relative z-10"
      >
        <BackgroundParticles />
        <About lang={language} t={t} />
        <Projects lang={language} t={t} />
        <WorkHistory lang={language} t={t} />
        <Awards lang={language} t={t} />
      </motion.main>

      {/* Botón de scroll hacia arriba mejorado */}
      {showScroll && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-[90] cursor-pointer group"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Fondo con brillo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Botón */}
          <div className="relative glass p-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 shadow-2xl">
            <FiArrowUpCircle size={28} className="text-white" />
          </div>
        </motion.button>
      )}
    </div>
  );
}
