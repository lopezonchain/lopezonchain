"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiCopy, FiMail, FiSend, FiX } from "react-icons/fi";

const ContactModal = ({ open, onClose, lang }) => {
  const [copied, setCopied] = useState("");

  const copyContact = async (type, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
  <AnimatePresence>
    {open && (
      <motion.div
        className="contact-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={(event) => event.target === event.currentTarget && onClose()}
      >
        <motion.div
          className="contact-modal__window"
          initial={{ opacity: 0, y: 30, scale: .94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: .96 }}
          transition={{ duration: .45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-modal__topline">
            <span><i /> {lang === "es" ? "CANAL DE CONTACTO" : "CONTACT CHANNEL"}</span>
            <button onClick={onClose} aria-label={lang === "es" ? "Cerrar" : "Close"}><FiX /></button>
          </div>

          <div className="contact-modal__heading">
            <span>LOPEZ.OS / CONNECT</span>
            <h2>{lang === "es" ? "Elige cómo" : "Choose how"}<br /><em>{lang === "es" ? "empezamos." : "we start."}</em></h2>
            <p>{lang === "es" ? "Cuéntame qué quieres construir y encontraremos el canal adecuado." : "Tell me what you want to build and we will use the right channel to move it forward."}</p>
          </div>

          <div className="contact-modal__options">
            <div className="contact-option contact-option--telegram">
              <a className="contact-option__primary" href="https://t.me/lopezdev" target="_blank" rel="noopener noreferrer" onClick={onClose}>
                <span className="contact-option__number">01</span>
                <span className="contact-option__icon"><FiSend /></span>
                <span className="contact-option__send-label">{lang === "es" ? "ENVIAR MENSAJE" : "SEND MESSAGE"}</span>
                <span className="contact-option__copy"><strong>Telegram</strong><small>{lang === "es" ? "Rápido, directo, informal" : "Fast, direct, informal"}</small></span>
                <FiArrowUpRight className="contact-option__arrow" />
              </a>
              <button className="contact-option__copy-action" onClick={() => copyContact("telegram", "@lopezonchain")}>
                <FiCopy /> {copied === "telegram" ? (lang === "es" ? "COPIADO" : "COPIED") : "@LOPEZONCHAIN"}
              </button>
            </div>
            <div className="contact-option contact-option--email">
              <a className="contact-option__primary" href="mailto:lopezonchain@gmail.com?subject=Project%20inquiry" onClick={onClose}>
                <span className="contact-option__number">02</span>
                <span className="contact-option__icon"><FiMail /></span>
                <span className="contact-option__send-label">{lang === "es" ? "ENVIAR MENSAJE" : "SEND MESSAGE"}</span>
                <span className="contact-option__copy"><strong>Email</strong><small>{lang === "es" ? "Propuestas, detalles, proyectos" : "Proposals, details, projects"}</small></span>
                <FiArrowUpRight className="contact-option__arrow" />
              </a>
              <button className="contact-option__copy-action" onClick={() => copyContact("email", "lopezonchain@gmail.com")}>
                <FiCopy /> {copied === "email" ? (lang === "es" ? "COPIADO" : "COPIED") : "LOPEZONCHAIN@GMAIL.COM"}
              </button>
            </div>
          </div>

          <div className="contact-modal__footer"><span>LOPEZ SOFTWARE BUILDER</span><span>{lang === "es" ? "RESPUESTA HABITUAL EN 24H" : "USUALLY REPLIES WITHIN 24H"}</span></div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  );
};

export default ContactModal;
