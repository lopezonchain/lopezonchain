"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiChevronDown, FiMapPin } from "react-icons/fi";

const WorkHistory = ({ lang, t }) => {
  const history = t.workHistory.list;
  const ui = t.ui;
  const [expandedId, setExpandedId] = useState(history[0]?.id ?? null);

  return (
    <section id="work" className="section experience-section">
      <div className="section-label"><span>03</span> {ui.experience}</div>

      <div className="experience-layout">
        <div className="experience-heading">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>{lang === "es" ? "Años resolviendo" : "Years solving"}<br /><em>{lang === "es" ? "lo difícil." : "the hard stuff."}</em></h2>
            <p>{lang === "es" ? "Experiencia real construyendo productos, liderando arquitectura y entregando software de principio a fin. También trabajo con solvencia sobre software existente, desarrollando nuevas funcionalidades, modernizando sistemas y optimizando su rendimiento." : "Real experience building products, leading architecture and shipping software end to end. I am equally comfortable working with established codebases, delivering new features, modernizing systems and improving performance."}</p>
          </motion.div>
          <div className="experience-counter">
            <strong>7+</strong>
            <span>{ui.yearsBuilding}</span>
          </div>
        </div>

        <div className="experience-list">
          {history.map((item, index) => {
            const expanded = expandedId === item.id;
            const live = /present|presente/i.test(item.period);
            return (
              <motion.article
                key={item.id}
                className={`experience-item ${expanded ? "expanded" : ""}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.55 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <button className="experience-item__summary" onClick={() => setExpandedId(expanded ? null : item.id)} aria-expanded={expanded}>
                  <span className="experience-item__number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="experience-item__title">
                    <strong>{item.role}</strong>
                    <span>{item.company} {live && <i>LIVE</i>}</span>
                  </span>
                  <span className="experience-item__period">{item.period}</span>
                  <FiChevronDown className="experience-item__chevron" />
                </button>

                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      className="experience-item__details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="experience-item__image">
                        <img src={item.image} alt={item.company} width="320" height="320" loading="lazy" />
                      </div>
                      <div className="experience-item__body">
                        <div className="experience-location"><FiMapPin />{item.location}</div>
                        <p>{item.description}</p>
                        {item.highlights?.length > 0 && (
                          <ul>{item.highlights.slice(0, 5).map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                        )}
                        <div className="experience-tags">{item.tags?.map((tag) => <span key={tag}>{tag}</span>)}</div>
                        {item.url && <a href={item.url} target="_blank" rel="noopener noreferrer">{ui.visitCompany}<FiArrowUpRight /></a>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
