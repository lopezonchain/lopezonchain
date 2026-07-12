"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiSend } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Awards = ({ lang, t }) => {
  const award = t.awards.list[0];

  return (
    <>
      <section id="awards" className="award-section">
        <div className="award-section__burst" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => <span key={index} style={{ transform: `rotate(${index * 20}deg)` }} />)}
        </div>
        <div className="section-label section-label--dark"><span>04</span> {lang === "es" ? "RECONOCIMIENTO" : "RECOGNITION"}</div>

        <motion.div
          className="award-layout"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="award-stamp">
            <span>WINNER</span>
            <strong>01</strong>
            <small>HACKATHON / 2025</small>
          </div>
          <div className="award-copy">
            <span className="award-kicker">ELECTRONEUM HACKATHON</span>
            <h2>{award.title}</h2>
            <p>{award.description}</p>
            <a href={award.link} target="_blank" rel="noopener noreferrer">
              {lang === "es" ? "Ver proyecto premiado" : "View winning project"}<FiArrowUpRight />
            </a>
          </div>
          <a className="award-visual" href={award.link} target="_blank" rel="noopener noreferrer" aria-label={award.title}>
            <div>
              <img src={award.image} alt={award.title} width="584" height="210" loading="lazy" />
            </div>
            <span>BEST GAMEFI APP</span>
          </a>
        </motion.div>
      </section>

      <footer className="site-footer">
        <div className="footer-topline">
          <span>{lang === "es" ? "¿TIENES UNA IDEA?" : "HAVE AN IDEA?"}</span>
          <span>MADRID / WORLDWIDE</span>
        </div>
        <h2>{lang === "es" ? "HAGAMOS ALGO" : "LET'S MAKE"}<br /><em>{lang === "es" ? "INCREÍBLE." : "SOMETHING GREAT."}</em></h2>
        <a className="footer-cta" href="https://t.me/lopezdev" target="_blank" rel="noopener noreferrer">
          <span>{lang === "es" ? "INICIAR UNA CONVERSACIÓN" : "START A CONVERSATION"}</span><FiArrowUpRight />
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} LOPEZ SOFTWARE</span>
          <div>
            <a href="https://github.com/lopezonchain" target="_blank" rel="noopener noreferrer"><FiGithub /> GITHUB</a>
            <a href="https://x.com/lopezonchain" target="_blank" rel="noopener noreferrer"><FaXTwitter /> X</a>
            <a href="https://t.me/lopezdev" target="_blank" rel="noopener noreferrer"><FiSend /> TELEGRAM</a>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>BACK TO TOP ↑</button>
        </div>
      </footer>
    </>
  );
};

export default Awards;
