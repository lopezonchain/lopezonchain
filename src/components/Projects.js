"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const Projects = ({ lang, t }) => {
  const projects = t.projects.list;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  const move = (direction) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="section-label section-label--dark"><span>02</span> {lang === "es" ? "TRABAJO SELECCIONADO" : "SELECTED WORK"}</div>

      <div className="projects-heading">
        <h2>{lang === "es" ? "Construido para" : "Built for the"}<br /><em>{lang === "es" ? "el mundo real." : "real world."}</em></h2>
        <p>{lang === "es" ? "Productos que convierten tecnología compleja en experiencias simples, rápidas y memorables." : "Products that turn complex technology into simple, fast and memorable experiences."}</p>
      </div>

      <div className="project-stage">
        <div className="project-stage__chrome">
          <span className="window-dots"><i /><i /><i /></span>
          <span>/LOPEZ.OS/WORK/{active.title.replace(/\s+/g, "_").toUpperCase()}</span>
          <span><i className="live-pixel" /> LIVE RENDER</span>
        </div>
        <div className="project-stage__visual">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="project-image-wrap"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="project-index">0{activeIndex + 1}</span>
              <img src={active.image} alt={active.title} width="700" height="700" />
              <div className="project-image-wrap__badge">CASE/{String(activeIndex + 1).padStart(2, "0")}</div>
              <div className="project-telemetry" aria-hidden="true">
                <span>RENDER STATUS <b>100%</b></span>
                <i /><i /><i /><i /><i /><i /><i /><i />
                <small>0x{String(active.id).padStart(4, "0")}AFE</small>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="project-stage__content">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
              className="project-copy"
            >
              <span className="project-copy__type">WEB3 / PRODUCT / ENGINEERING</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              {active.visitUrl && (
                <a href={active.visitUrl} target="_blank" rel="noopener noreferrer">
                  {t.projects.visitButtonText || (lang === "es" ? "Visitar" : "Visit project")}<FiArrowUpRight />
                </a>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="project-controls">
            <div className="project-tabs">
              {projects.map((project, index) => (
                <button key={project.id} className={activeIndex === index ? "active" : ""} onClick={() => setActiveIndex(index)} aria-label={`View ${project.title}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
            <div className="project-arrows">
              <button onClick={() => move(-1)} aria-label="Previous project"><FiArrowLeft /></button>
              <button onClick={() => move(1)} aria-label="Next project"><FiArrowRight /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <button key={project.id} onClick={() => setActiveIndex(index)} className={activeIndex === index ? "active" : ""}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{project.title}</strong>
            <FiArrowUpRight />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
