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

  // Llamada al sdk.actions.ready() en useEffect para ejecutarse una vez que el componente está montado
  useEffect(() => {
    (async () => {
      await sdk.actions.ready({ disableNativeGestures: true });
    })();
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
    <div className="relative bg-black text-white overflow-hidden">
      <Header onLanguageChange={setLanguage} t={t} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-[100vh] overflow-hidden relative z-10"
      >
        <BackgroundParticles />
        <About lang={language} t={t} />
        <Projects lang={language} t={t} />
        <WorkHistory lang={language} t={t} />
        <Awards lang={language} t={t} />
      </motion.main>

      {/* Botón de scroll hacia arriba */}
      {showScroll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 cursor-pointer"
          onClick={scrollToTop}
        >
          <FiArrowUpCircle size={40} className="text-blue-500" />
        </motion.div>
      )}
    </div>
  );
}
