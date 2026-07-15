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
import InterfaceLayer from "../components/InterfaceLayer";
import ContactModal from "../components/ContactModal";
import en from "../locales/en";
import es from "../locales/es";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [showScroll, setShowScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [contactOpen, setContactOpen] = useState(false);
  const t = language === "en" ? en : es;

  useEffect(() => {
    import("@farcaster/frame-sdk").then(({ sdk }) => sdk.actions.ready({ disableNativeGestures: true }));
    const sectionIds = ["top", "about", "projects", "work", "awards"];
    const onScroll = () => {
      setShowScroll(window.scrollY > 650);
      const probe = window.innerHeight * 0.7;
      const current = sectionIds.find((id) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect && rect.top <= probe && rect.bottom > probe;
      });
      if (current) setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="site-shell">
      <BackgroundParticles />
      <InterfaceLayer lang={language} t={t} />
      <Header onLanguageChange={setLanguage} onContactOpen={() => setContactOpen(true)} t={t} />
      <main>
        <About lang={language} t={t} />
        <Projects lang={language} t={t} />
        <WorkHistory lang={language} t={t} />
        <Awards lang={language} onContactOpen={() => setContactOpen(true)} t={t} />
      </main>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} lang={language} t={t} />

      <AnimatePresence>
        {showScroll && (
          <motion.button
            className={`back-to-top back-to-top--${activeSection}`}
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
