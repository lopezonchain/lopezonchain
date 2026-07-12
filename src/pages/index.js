"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import WorkHistory from "../components/WorkHistory";
import Awards from "../components/Awards";
import BackgroundParticles from "../components/BackgroundParticles";
import en from "../locales/en";
import es from "../locales/es";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [showScroll, setShowScroll] = useState(false);
  const t = language === "en" ? en : es;

  useEffect(() => {
    import("@farcaster/frame-sdk").then(({ sdk }) => sdk.actions.ready({ disableNativeGestures: true }));
    const onScroll = () => setShowScroll(window.scrollY > 650);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <BackgroundParticles />
      <Header onLanguageChange={setLanguage} t={t} />
      <main>
        <About lang={language} t={t} />
        <Projects lang={language} t={t} />
        <WorkHistory lang={language} t={t} />
        <Awards lang={language} t={t} />
      </main>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ y: -3 }}
            aria-label={language === "es" ? "Volver arriba" : "Back to top"}
          >
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
