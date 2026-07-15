"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Awards = ({ lang, onContactOpen, t }) => {
  const award = t.awards.list[0];
  const ui = t.ui;

  return (
    <>
      <section id="awards" className="award-section">
        <div className="award-section__burst" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => <span key={index} style={{ transform: `rotate(${index * 20}deg)` }} />)}
        </div>
        <div className="section-label section-label--dark"><span>04</span> {ui.recognition}</div>

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
              {ui.awardProject}<FiArrowUpRight />
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
          <span>{ui.haveIdea}</span>
          <span>MADRID / WORLDWIDE</span>
        </div>
        <h2>{ui.letsMake}<br /><em>{ui.somethingGreat}</em></h2>
        <button type="button" className="footer-cta" onClick={onContactOpen}>
          <span>{ui.startConversation}</span><FiArrowUpRight />
        </button>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} LOPEZ SOFTWARE</span>
          <div>
            <a href="https://github.com/lopezonchain" target="_blank" rel="noopener noreferrer"><FiGithub /> GITHUB</a>
            <a href="https://x.com/lopezonchain" target="_blank" rel="noopener noreferrer"><FaXTwitter /> X</a>
            <a href="https://www.linkedin.com/in/ia-lopez/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> LINKEDIN</a>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{ui.backTop}</button>
        </div>
      </footer>
    </>
  );
};

export default Awards;
