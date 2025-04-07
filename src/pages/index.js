"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import WorkHistory from '../components/WorkHistory';
import Awards from '../components/Awards';
import BackgroundParticles from '../components/BackgroundParticles';

import en from '../locales/en';
import es from '../locales/es';

export default function Home() {
  const [language, setLanguage] = useState('en');
  const t = language === 'en' ? en : es;

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
    </div>
  );
}
