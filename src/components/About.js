"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode, FiCpu, FiDatabase, FiLayers } from "react-icons/fi";

const icons = [FiLayers, FiCpu, FiCode, FiDatabase];

const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

const About = ({ lang, t }) => {
  const skills = t.skills?.categories || [];
  const ui = t.ui;
  const principles = [
    { number: "01", title: t.about.experience_title, copy: t.about.experience },
    { number: "02", title: t.about.passion_title, copy: t.about.passion },
    { number: "03", title: t.about.goal_title, copy: t.about.goal },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-label"><span>01</span> {ui.profile}</div>

      <div className="about-intro">
        <Reveal>
          <h2>
            {ui.codeIntent}<br /><span>{ui.productsImpact}</span>
          </h2>
        </Reveal>
        <Reveal className="about-intro__copy" delay={0.12}>
          <p>{t.about.description}</p>
          <a href="https://t.me/lopezdev" target="_blank" rel="noopener noreferrer">
            {ui.buildTogether}<FiArrowUpRight />
          </a>
        </Reveal>
      </div>

      <div className="about-principles">
        {principles.map((item, index) => (
          <Reveal className="principle" key={item.number} delay={index * 0.08}>
            <span className="principle__number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="capabilities" delay={0.1}>
        <div className="capabilities__heading">
          <span>{ui.capabilities}</span><h3>{ui.fromIdea}</h3>
        </div>

        <div className="capabilities__grid">
          {skills.map((category, index) => {
            const Icon = icons[index] || FiCode;
            return (
              <motion.article
                className="capability-card"
                key={category.name}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <div className="capability-card__top">
                  <Icon />
                  <span>0{index + 1}</span>
                </div>
                <h4>{category.name}</h4>
                <div className="capability-card__tags">
                  {category.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Reveal>

      <Reveal className="build-protocol">
        <div className="build-protocol__label">{ui.buildProtocol}</div>
        <div className="build-protocol__flow">
          {ui.buildSteps.map((step, index) => (
            <div key={step}><span>0{index + 1}</span><strong>{step}</strong><i /></div>
          ))}
        </div>
        <code>IF (idea.isAmbitious) &#123; build(it); ship(it); evolve(it); &#125;</code>
      </Reveal>

      <div className="about-statement" aria-hidden="true">
        <span>BUILD</span><span>SHIP</span><span>EVOLVE</span>
      </div>
    </section>
  );
};

export default About;
