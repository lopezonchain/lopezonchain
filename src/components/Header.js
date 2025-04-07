"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ onLanguageChange, t }) => {
  const [activeLang, setActiveLang] = useState("en");
  const [shrink, setShrink] = useState(false);

  const handleLangChange = (lang) => {
    setActiveLang(lang);
    onLanguageChange(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ opacity: 1 }}
        animate={{
          height: shrink ? "70px" : "100vh",
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        className="fixed top-0 left-0 w-full z-50 shadow-lg overflow-hidden"
        style={
          shrink
            ? { backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)" }
            : { background: "rgba(0,0,0,0.3)" }
        }
      >
        {shrink ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="container mx-auto flex items-center justify-between h-full px-4"
          >
            <h1 className="text-xl font-bold text-blue-500">LopezOnchain</h1>
            <nav className="flex space-x-6">
              <a href="#about" className="hover:text-blue-400 transition text-base">
                {t.nav.about}
              </a>
              <a
                href="#projects"
                className="hover:text-blue-400 transition text-base"
              >
                {t.nav.projects}
              </a>
              <a href="#work" className="hover:text-blue-400 transition text-base">
                {t.nav.work}
              </a>
              <a
                href="#awards"
                className="hover:text-blue-400 transition text-base"
              >
                {t.nav.awards}
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              {/* Redes Sociales 
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 rounded-full" />
              </a>*/}
              <a href="https://github.com/lopezonchain" target="_blank" rel="noopener noreferrer">
                <img src="/assets/github.png" alt="GitHub" className="w-6 h-6 rounded-full" />
              </a>
              <a href="https://warpcast.com/lopezonchain.eth" target="_blank" rel="noopener noreferrer">
                <img src="/assets/warpcast.png" alt="Warpcast" className="w-6 h-6 rounded-full" />
              </a>
              <a href="https://zora.co/@lopezonchain" target="_blank" rel="noopener noreferrer">
                <img src="/assets/zora.jpg" alt="Zora" className="w-6 h-6 rounded-full" />
              </a>
              <a href="https://x.com/lopezonchain" target="_blank" rel="noopener noreferrer">
                <img src="/assets/x.jpg" alt="X" className="w-6 h-6 rounded-full" />
              </a>
              {/* Selector de Idiomas */}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleLangChange("en")}
                  className={`px-2 ${activeLang === "en" ? "font-bold text-blue-500" : ""
                    }`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLangChange("es")}
                  className={`px-2 ${activeLang === "es" ? "font-bold text-blue-500" : ""
                    }`}
                >
                  ES
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full flex flex-col items-center justify-center text-center px-4"
          >
            <h1 className="text-6xl font-extrabold mb-6 text-blue-500">
              LopezOnchain
            </h1>
            <p className="text-2xl mb-8 text-gray-300">
              {t.header.description}
            </p>
            <nav className="flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition text-xl">
                {t.nav.about}
              </a>
              <a
                href="#projects"
                className="hover:text-blue-400 transition text-xl"
              >
                {t.nav.projects}
              </a>
              <a href="#work" className="hover:text-blue-400 transition text-xl">
                {t.nav.work}
              </a>
              <a
                href="#awards"
                className="hover:text-blue-400 transition text-xl"
              >
                {t.nav.awards}
              </a>
            </nav>
            <div className="mt-8 flex items-center space-x-4">
              {/* Redes Sociales versión grande */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/github.png"
                  alt="GitHub"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/warpcast.png"
                  alt="Warpcast"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/zora.jpg"
                  alt="Zora"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/x.jpg"
                  alt="X"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </a>

              {/* Selector de Idiomas */}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleLangChange("en")}
                  className={`px-4 py-2 border border-white hover:bg-blue-500 transition ${activeLang === "en" ? "font-bold text-blue-500" : ""
                    }`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLangChange("es")}
                  className={`px-4 py-2 border border-white hover:bg-blue-500 transition ${activeLang === "es" ? "font-bold text-blue-500" : ""
                    }`}
                >
                  ES
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
