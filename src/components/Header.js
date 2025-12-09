"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeaderDescription from "./AnimatedHeaderDescription";
import { FiMenu, FiX } from "react-icons/fi"; // Iconos para el botón hamburguesa

const Header = ({ onLanguageChange, t }) => {
  const [activeLang, setActiveLang] = useState("en");
  const [shrink, setShrink] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Estado para el efecto tilt en el header expandido
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLangChange = (lang) => {
    setActiveLang(lang);
    onLanguageChange(lang);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      // Si el header está shrink (pequeño), necesitamos restar su altura
      // Si el header está expandido, el contenido ya tiene pt-[100vh] así que solo un pequeño offset
      const offset = shrink ? 80 : 20;
      
      window.scrollTo({
        top: offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Establece inicialmente y escucha el evento resize
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      setShrink(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculamos la altura del header: 100vh si no se ha hecho scroll, 70px si es shrink
  const headerHeight = shrink ? "70px" : "100vh";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Handlers para el efecto tilt en el header expandido
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // posición relativa X
    const y = e.clientY - rect.top;  // posición relativa Y
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calcula el tilt de forma proporcional (máximo 10° en cada eje)
    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <>
      {/* Header principal */}
      <motion.header
        initial={{ opacity: 1 }}
        animate={{
          height: headerHeight,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        className={`fixed top-0 left-0 w-full z-[100] ${shrink ? "shadow-lg rounded-xl mt-4 mx-4" : ""

          }`}
        style={
          shrink
            ? { backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)" }
            : { background: "rgba(0,0,0,0.3)" }
        }
      >
        {/* Header expandido (100vh) con efectos modernos */}
        {!shrink && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Efectos de fondo animados */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-teal-500/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
            </div>

            <motion.div
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transformStyle: "preserve-3d"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass relative z-10 p-10 md:p-12 rounded-3xl shadow-2xl glow-hover max-w-4xl w-full"
            >
              {/* Borde animado con gradiente */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-500 opacity-20 blur-xl animate-gradient"></div>
              
              <div className="relative z-10">
                <motion.h1 
                  className="text-6xl md:text-8xl font-extrabold mb-6 gradient-text animate-gradient bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Lopez Onchain
                </motion.h1>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <AnimatedHeaderDescription text={t.header.description} />
                </motion.div>

                <motion.nav 
                  className="flex flex-wrap justify-center gap-6 mt-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  {[
                    { href: "#about", label: t.nav.about },
                    { href: "#projects", label: t.nav.projects },
                    { href: "#work", label: t.nav.work },
                    { href: "#awards", label: t.nav.awards }
                  ].map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="relative px-6 py-2 text-lg font-medium text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 hover:bg-clip-text transition-all duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </motion.a>
                  ))}
                </motion.nav>

                {/* Botones de idioma modernos */}
                <motion.div 
                  className="mt-10 flex items-center justify-center gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  {["en", "es"].map((lang) => (
                    <motion.button
                      key={lang}
                      onClick={() => handleLangChange(lang)}
                      className={`relative px-5 py-3 rounded-xl glass transition-all duration-300 cursor-pointer overflow-hidden group ${
                        activeLang === lang ? "ring-2 ring-cyan-500" : ""
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      <img 
                        src={`/assets/flag-${lang}.png`} 
                        alt={lang === "en" ? "English" : "Español"} 
                        className="w-7 h-7 relative z-10" 
                      />
                    </motion.button>
                  ))}
                </motion.div>

                {/* Iconos sociales mejorados */}
                <motion.div 
                  className="mt-10 flex items-center justify-center gap-5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  {[
                    { href: "https://t.me/lopezdev", icon: "telegram", label: "Telegram" },
                    { href: "https://github.com/lopezonchain", icon: "github", label: "GitHub" },
                    { href: "https://farcaster.xyz/lopezonchain.eth", icon: "warpcast", label: "Farcaster" },
                    { href: "https://zora.co/@lopezonchain", icon: "zora", label: "Zora" },
                    { href: "https://x.com/lopezonchain", icon: "x", label: "X" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.icon}
                      href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                      className="relative group"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                      <img
                        src={`/assets/${social.icon}.${social.icon === 'zora' || social.icon === 'x' ? 'jpg' : 'png'}`}
                        alt={social.label}
                        className="w-12 h-12 rounded-full object-cover relative z-10 ring-2 ring-white/10 group-hover:ring-cyan-500/50 transition-all duration-300"
                      />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Header "shrink" (70px de alto) - Versión moderna */}
        {shrink && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="container mx-auto flex items-center justify-between h-full px-4"
          >
            <motion.h1 
              className="text-xl md:text-2xl font-bold gradient-text bg-gradient-to-r from-cyan-400 to-teal-400 cursor-pointer"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lopez Onchain
            </motion.h1>
            {isMobile && (
              <button
                onClick={toggleMobileMenu}
                className="p-2 border border-white rounded hover:bg-blue-500 transition"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            )}
            {!isMobile && (
              <>
                <nav className="flex space-x-6">
                  {[
                    { href: "#about", label: t.nav.about },
                    { href: "#projects", label: t.nav.projects },
                    { href: "#work", label: t.nav.work },
                    { href: "#awards", label: t.nav.awards }
                  ].map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="relative text-base font-medium text-white/90 hover:text-white transition-colors group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                    </motion.a>
                  ))}
                </nav>
                <div className="flex items-center space-x-3">
                  {[
                    { href: "https://t.me/lopezdev", icon: "telegram" },
                    { href: "https://github.com/lopezonchain", icon: "github" },
                    { href: "https://farcaster.xyz/lopezonchain.eth", icon: "warpcast" },
                    { href: "https://zora.co/@lopezonchain", icon: "zora" },
                    { href: "https://x.com/lopezonchain", icon: "x" }
                  ].map((social) => (
                    <motion.a
                      key={social.icon}
                      href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="group"
                    >
                      <img
                        src={`/assets/${social.icon}.${social.icon === 'zora' || social.icon === 'x' ? 'jpg' : 'png'}`}
                        alt={social.icon}
                        className="w-7 h-7 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-cyan-500/50 transition-all duration-300"
                      />
                    </motion.a>
                  ))}
                  <div className="flex space-x-2 ml-2">
                    {["en", "es"].map((lang) => (
                      <motion.button
                        key={lang}
                        onClick={() => handleLangChange(lang)}
                        className={`p-2 glass rounded-lg transition-all duration-300 cursor-pointer ${
                          activeLang === lang ? "ring-2 ring-cyan-500" : ""
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img src={`/assets/flag-${lang}.png`} alt={lang} className="w-6 h-6" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </motion.header>

      {/* MENÚ MÓVIL DESPLEGABLE (OVERLAY) */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobile && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen bg-gray-800 bg-opacity-40 flex flex-col items-center justify-center z-50 px-4"
          >
            <nav className="flex flex-col space-y-6">
              <a
                onClick={(e) => {
                  handleNavClick(e, "#about");
                  toggleMobileMenu();
                }}
                href="#about"
                className="hover:text-blue-400 transition text-2xl cursor-pointer"
              >
                {t.nav.about}
              </a>
              <a
                onClick={(e) => {
                  handleNavClick(e, "#projects");
                  toggleMobileMenu();
                }}
                href="#projects"
                className="hover:text-blue-400 transition text-2xl cursor-pointer"
              >
                {t.nav.projects}
              </a>
              <a
                onClick={(e) => {
                  handleNavClick(e, "#work");
                  toggleMobileMenu();
                }}
                href="#work"
                className="hover:text-blue-400 transition text-2xl cursor-pointer"
              >
                {t.nav.work}
              </a>
              <a
                onClick={(e) => {
                  handleNavClick(e, "#awards");
                  toggleMobileMenu();
                }}
                href="#awards"
                className="hover:text-blue-400 transition text-2xl cursor-pointer"
              >
                {t.nav.awards}
              </a>
            </nav>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <a
                href="https://t.me/lopezonchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/telegram.png"
                  alt="Telegram"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </a>
              <a
                href="https://github.com/lopezonchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/github.png"
                  alt="GitHub"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <a
                href="https://farcaster.xyz/lopezonchain.eth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/warpcast.png"
                  alt="Farcaster"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <a
                href="https://zora.co/@lopezonchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/zora.jpg"
                  alt="Zora"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <a
                href="https://x.com/lopezonchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/x.jpg"
                  alt="X"
                  className="w-8 h-8 rounded-full"
                />
              </a>
            </div>
            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => {
                  handleLangChange("en");
                  toggleMobileMenu();
                }}
                className={`p-3 border border-white rounded transition hover:bg-blue-500 cursor-pointer ${activeLang === "en" ? "font-bold text-blue-500" : ""
                  }`}
              >
                <img src="/assets/flag-en.png" alt="English" className="w-8 h-8" />
              </button>
              <button
                onClick={() => {
                  handleLangChange("es");
                  toggleMobileMenu();
                }}
                className={`p-3 border border-white rounded transition hover:bg-blue-500 cursor-pointer ${activeLang === "es" ? "font-bold text-blue-500" : ""
                  }`}
              >
                <img src="/assets/flag-es.png" alt="Español" className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
