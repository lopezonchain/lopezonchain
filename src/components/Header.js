"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowDownRight, FiGithub, FiMenu, FiSend, FiX } from "react-icons/fi";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const navItems = (t) => [
  { href: "#about", label: t.nav.about },
  { href: "#projects", label: t.nav.projects },
  { href: "#work", label: t.nav.work },
  { href: "#awards", label: t.nav.awards },
];

const tickerItems = [
  "AI AGENTS",
  "SOFTWARE ARCHITECTURE",
  "FULL-STACK ENGINEERING",
  "PRODUCT STRATEGY",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "MCP INTEGRATIONS",
  "BLOCKCHAIN INFRASTRUCTURE",
  "SMART CONTRACTS",
  "API DESIGN",
  "DISTRIBUTED SYSTEMS",
  "PERFORMANCE OPTIMIZATION",
  "LEGACY MODERNIZATION",
  "DEVELOPER TOOLING",
  "PAYMENTS",
  "DATA PLATFORMS",
  "UX ENGINEERING",
  "CYBERSECURITY",
  "DATABASE ARCHITECTURE",
  "AUTOMATION",
];

const Header = ({ onLanguageChange, onContactOpen, t }) => {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

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

  const trackPointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${((event.clientX - rect.left) / rect.width - 0.5) * 2}`);
    event.currentTarget.style.setProperty("--pointer-y", `${((event.clientY - rect.top) / rect.height - 0.5) * 2}`);
  };

  return (
    <>
      <header
        className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}
      >
        <a className="brand-mark" href="#top" onClick={(e) => goTo(e, "#top")} aria-label="Lopez home">
          <span className="brand-glyph" aria-hidden="true">
            <svg viewBox="0 0 48 48" role="img">
              <rect x="0.75" y="0.75" width="46.5" height="46.5" fill="currentColor" stroke="var(--paper)" strokeOpacity="0.18" strokeWidth="1.5" />
              <path d="M12 10H19V30H35V37H12V10Z" fill="var(--ink)" />
              <rect className="brand-glyph__cursor" x="28" y="10" width="7" height="7" fill="var(--coral)" />
            </svg>
          </span>
          <span className="brand-name">LOPEZ<span>SOFTWARE BUILDER</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems(t).map((item, index) => (
            <a key={item.href} href={item.href} onClick={(e) => goTo(e, item.href)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="nav-socials" aria-label="Social links">
            <a href="https://github.com/lopezonchain" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://x.com/lopezonchain" target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter /></a>
            <a href="https://www.linkedin.com/in/ia-lopez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
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

      <section id="top" className="hero-shell hero-shell--console" ref={heroRef} onMouseMove={trackPointer}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-ghost-type" aria-hidden="true"><span>ENGINEER</span><span>SYSTEMS</span></div>
        <div className="hero-crosshair" aria-hidden="true" />

        <div className="hero-console">
          <div className="hero-manifesto">
            <div className="eyebrow">
              <span className="availability-dot" />
              {language === "es" ? "Disponible para proyectos ambiciosos" : "Available for ambitious projects"}
            </div>
            <h1>
              <span>SOFTWARE</span>
              <span>BLOCKCHAIN</span>
              <span className="hero-manifesto__accent">{language === "es" ? "AGENTES IA" : "AI AGENTS"}</span>
            </h1>
            <div className="hero-manifesto__foot"><span>01/03</span><span>{language === "es" ? "BUILDER & ARQUITECTO DE SOFTWARE" : "SOFTWARE BUILDER & ARCHITECT"}</span></div>
          </div>

          <div className="identity-core">
            <div className="identity-core__halo identity-core__halo--outer" />
            <div className="identity-core__halo identity-core__halo--inner" />
            <svg className="identity-core__copy" viewBox="0 0 300 300" aria-hidden="true">
              <defs><path id="core-copy-path" d="M 150,150 m -121,0 a 121,121 0 1,1 242,0 a 121,121 0 1,1 -242,0" /></defs>
              <text><textPath href="#core-copy-path">LOPEZ • SOFTWARE BUILDER • ARCHITECT • AI AGENTS • BLOCKCHAIN • </textPath></text>
            </svg>
            <div className="identity-core__portrait">
              <img src="/assets/profile.png" alt="Illustrated portrait of Lopez" width="605" height="569" />
              <div className="hero-card__scanline" />
            </div>
            <span className="identity-core__node identity-core__node--one" />
            <span className="identity-core__node identity-core__node--two" />
            <span className="identity-core__node identity-core__node--three" />

            <div className="signal-card signal-card--one"><span>SYSTEM</span><strong>ONLINE</strong><i /></div>
            <div className="signal-card signal-card--two"><span>ACTIVE STACK</span><strong>AI / MCP / EVM</strong><small>BLOCK: 020481</small></div>
            <div className="signal-card signal-card--three"><span>MADRID</span><strong>40.4168° N</strong><small>3.7038° W</small></div>
          </div>

          <div className="hero-intro">
            <span className="hero-intro__index">[ LOPEZ.OS / v2.6 ]</span>
            <p>{t.header.description}</p>
            <div className="hero-ctas">
              <a href="#projects" className="primary-cta" onClick={(e) => goTo(e, "#projects")}>
                {language === "es" ? "Entrar al sistema" : "Enter the system"}<FiArrowDownRight />
              </a>
              <button type="button" onClick={onContactOpen} className="text-cta">
                {language === "es" ? "Abrir canal" : "Open channel"}<FiSend />
              </button>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/lopezonchain" target="_blank" rel="noopener noreferrer"><FiGithub /><span>GITHUB</span></a>
              <a href="https://x.com/lopezonchain" target="_blank" rel="noopener noreferrer"><FaXTwitter /><span>X / TWITTER</span></a>
              <a href="https://www.linkedin.com/in/ia-lopez/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /><span>LINKEDIN</span></a>
            </div>
            <div className="hero-intro__stats">
              <div><strong>7+</strong><span>{language === "es" ? "AÑOS" : "YEARS"}</span></div>
              <div><strong>01</strong><span>{language === "es" ? "PREMIO" : "AWARD"}</span></div>
              <div><strong>∞</strong><span>{language === "es" ? "IDEAS" : "IDEAS"}</span></div>
            </div>
          </div>
        </div>

        <div className="hero-ticker" aria-label="Specialties">
          <div>
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span key={`${item}-${i}`}>{item}<b>✦</b></span>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mobile-menu__top">
              <span>LOPEZ / SOFTWARE BUILDER</span>
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
              <a href="https://www.linkedin.com/in/ia-lopez/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
