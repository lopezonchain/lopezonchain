"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowDownRight, FiGithub, FiMenu, FiSend, FiX } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const navItems = (t) => [
  { href: "#about", label: t.nav.about },
  { href: "#projects", label: t.nav.projects },
  { href: "#work", label: t.nav.work },
  { href: "#awards", label: t.nav.awards },
];

const Header = ({ onLanguageChange, t }) => {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const setLang = (next) => {
    setLanguage(next);
    onLanguageChange(next);
  };

  const goTo = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}
      >
        <a className="brand-mark" href="#top" onClick={(e) => goTo(e, "#top")} aria-label="Lopez Onchain — home">
          <span className="brand-glyph">L/</span>
          <span className="brand-name">LOPEZ<span>ONCHAIN</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems(t).map((item, index) => (
            <a key={item.href} href={item.href} onClick={(e) => goTo(e, item.href)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="language-switch" aria-label="Language selector">
            {['en', 'es'].map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                className={language === item ? "active" : ""}
                aria-label={item === 'en' ? 'English' : 'Español'}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="menu-trigger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <FiMenu />
          </button>
        </div>
      </header>

      <section id="top" className="hero-shell">
        <div className="hero-grid" aria-hidden="true" />
        <motion.div
          className="hero-orbit hero-orbit--one"
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        <motion.div
          className="hero-orbit hero-orbit--two"
          animate={{ rotate: -360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />

        <div className="hero-layout">
          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="availability-dot" />
              {language === "es" ? "Disponible para proyectos ambiciosos" : "Available for ambitious projects"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>{language === "es" ? "CONSTRUYO" : "I BUILD"}</span>
              <span className="hero-outline">{language === "es" ? "SISTEMAS" : "SYSTEMS"}</span>
              <span>{language === "es" ? "QUE MUEVEN" : "THAT MOVE"} <em>ONCHAIN.</em></span>
            </motion.h1>

            <motion.div
              className="hero-bottom"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              <p>{t.header.description}</p>
              <div className="hero-ctas">
                <a href="#projects" className="primary-cta" onClick={(e) => goTo(e, "#projects")}>
                  {language === "es" ? "Ver proyectos" : "Explore work"}<FiArrowDownRight />
                </a>
                <a href="https://t.me/lopezdev" target="_blank" rel="noopener noreferrer" className="text-cta">
                  {language === "es" ? "Hablemos" : "Let's talk"}<FiSend />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.aside
            className="hero-card"
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-card__frame">
              <img src="/assets/profile.png" alt="Illustrated portrait of Lopez" width="605" height="569" />
              <div className="hero-card__scanline" />
              <span className="hero-card__label">LOPEZ // 2026</span>
            </div>
            <div className="hero-card__meta">
              <span>SOFTWARE ARCHITECT</span>
              <span>40.4168° N<br />3.7038° W</span>
            </div>
          </motion.aside>
        </div>

        <div className="hero-ticker" aria-label="Specialties">
          <div>
            {["AI AGENTS", "WEB3", "MCP", "FULL-STACK", "SMART CONTRACTS", "PRODUCT DESIGN", "AI AGENTS", "WEB3", "MCP", "FULL-STACK", "SMART CONTRACTS", "PRODUCT DESIGN"].map((item, i) => (
              <span key={`${item}-${i}`}>{item}<b>✦</b></span>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mobile-menu__top">
              <span>LOPEZ/ONCHAIN</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><FiX /></button>
            </div>
            <nav>
              {navItems(t).map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => goTo(e, item.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span>0{index + 1}</span>{item.label}<FiArrowDownRight />
                </motion.a>
              ))}
            </nav>
            <div className="mobile-menu__socials">
              <a href="https://github.com/lopezonchain" target="_blank" rel="noopener noreferrer"><FiGithub /> GitHub</a>
              <a href="https://x.com/lopezonchain" target="_blank" rel="noopener noreferrer"><FaXTwitter /> X</a>
              <a href="https://t.me/lopezdev" target="_blank" rel="noopener noreferrer"><FiSend /> Telegram</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
