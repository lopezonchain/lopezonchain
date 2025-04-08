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
        // Se elimina "overflow-hidden" para permitir la expansión completa
        className={`fixed top-0 left-0 w-full z-51 ${
          shrink ? "shadow-lg rounded-xl mt-4 mx-4" : ""

        }`}
        style={
          shrink
            ? { backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)" }
            : { background: "rgba(0,0,0,0.3)" }
        }
      >
        {/* Header expandido (100vh) con efecto 3D en forma de tarjeta */}
        {!shrink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full flex flex-col items-center justify-center text-center px-4"
            style={{ perspective: "1000px" }}  // Para efecto 3D
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              // Aplica el tilt dinámico según la posición del mouse
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gray-800 p-8 rounded-3xl shadow-2xl"
            >
              <h1 className="text-6xl font-extrabold mb-6 text-blue-500">
                Lopez Onchain
              </h1>
              <AnimatedHeaderDescription text={t.header.description} />
              <nav className="flex flex-wrap justify-center gap-4">
                <a href="#about" className="hover:text-blue-400 transition text-xl">
                  {t.nav.about}
                </a>
                <a href="#projects" className="hover:text-blue-400 transition text-xl">
                  {t.nav.projects}
                </a>
                <a href="#work" className="hover:text-blue-400 transition text-xl">
                  {t.nav.work}
                </a>
                <a href="#awards" className="hover:text-blue-400 transition text-xl">
                  {t.nav.awards}
                </a>
              </nav>
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={() => handleLangChange("en")}
                  className={`px-4 py-2 border border-white rounded transition hover:bg-blue-500 cursor-pointer ${
                    activeLang === "en" ? "font-bold text-blue-500" : ""
                  }`}
                >
                  <img src="/assets/flag-en.png" alt="English" className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleLangChange("es")}
                  className={`px-4 py-2 border border-white rounded transition hover:bg-blue-500 cursor-pointer ${
                    activeLang === "es" ? "font-bold text-blue-500" : ""
                  }`}
                >
                  <img src="/assets/flag-es.png" alt="Español" className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="https://t.me/lopezonchain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/telegram.png"
                    alt="Telegram"
                    className="w-10 h-10 rounded-full object-cover"
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
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </a>
                <a
                  href="https://warpcast.com/lopezonchain.eth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/warpcast.png"
                    alt="Warpcast"
                    className="w-10 h-10 rounded-full object-cover"
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
                    className="w-10 h-10 rounded-full object-cover"
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
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Header "shrink" (70px de alto) */}
        {shrink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="container mx-auto flex items-center justify-between h-full px-4"
          >
            <h1 className="text-xl font-bold text-blue-500 cursor-pointer" onClick={scrollToTop}>Lopez Onchain</h1>
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
                  <a href="#about" className="hover:text-blue-400 transition text-base">
                    {t.nav.about}
                  </a>
                  <a href="#projects" className="hover:text-blue-400 transition text-base">
                    {t.nav.projects}
                  </a>
                  <a href="#work" className="hover:text-blue-400 transition text-base">
                    {t.nav.work}
                  </a>
                  <a href="#awards" className="hover:text-blue-400 transition text-base">
                    {t.nav.awards}
                  </a>
                </nav>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://t.me/lopezonchain"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/telegram.png"
                      alt="Telegram"
                      className="w-6 h-6 rounded-full object-cover"
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
                      className="w-6 h-6 rounded-full"
                    />
                  </a>
                  <a
                    href="https://warpcast.com/lopezonchain.eth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/warpcast.png"
                      alt="Warpcast"
                      className="w-6 h-6 rounded-full"
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
                      className="w-6 h-6 rounded-full"
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
                      className="w-6 h-6 rounded-full"
                    />
                  </a>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleLangChange("en")}
                      className={`p-2 border border-white rounded transition hover:bg-blue-500 cursor-pointer ${
                        activeLang === "en" ? "font-bold text-blue-500" : ""
                      }`}
                    >
                      <img src="/assets/flag-en.png" alt="English" className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => handleLangChange("es")}
                      className={`p-2 border border-white rounded transition hover:bg-blue-500 cursor-pointer ${
                        activeLang === "es" ? "font-bold text-blue-500" : ""
                      }`}
                    >
                      <img src="/assets/flag-es.png" alt="Español" className="w-6 h-6" />
                    </button>
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
                onClick={toggleMobileMenu}
                href="#about"
                className="hover:text-blue-400 transition text-2xl cursor-pointer"
              >
                {t.nav.about}
              </a>
              <a
                onClick={toggleMobileMenu}
                href="#projects"
                className="hover:text-blue-400 transition text-2xl cursor-pointer"
              >
                {t.nav.projects}
              </a>
              <a
                onClick={toggleMobileMenu}
                href="#work"
                className="hover:text-blue-400 transition text-2xl cursor-pointer"
              >
                {t.nav.work}
              </a>
              <a
                onClick={toggleMobileMenu}
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
                href="https://warpcast.com/lopezonchain.eth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/warpcast.png"
                  alt="Warpcast"
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
                className={`p-3 border border-white rounded transition hover:bg-blue-500 cursor-pointer ${
                  activeLang === "en" ? "font-bold text-blue-500" : ""
                }`}
              >
                <img src="/assets/flag-en.png" alt="English" className="w-8 h-8" />
              </button>
              <button
                onClick={() => {
                  handleLangChange("es");
                  toggleMobileMenu();
                }}
                className={`p-3 border border-white rounded transition hover:bg-blue-500 cursor-pointer ${
                  activeLang === "es" ? "font-bold text-blue-500" : ""
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
