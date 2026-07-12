"use client";

import { useEffect, useRef, useState } from "react";

const sections = ["top", "about", "projects", "work", "awards"];

const InterfaceLayer = ({ lang }) => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [active, setActive] = useState("top");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => setTime(new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Madrid",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date()));
    updateTime();
    const timer = setInterval(updateTime, 1000);

    const move = (event) => {
      cursorRef.current?.style.setProperty("transform", `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
      dotRef.current?.style.setProperty("transform", `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });

    const updateSectionProgress = () => {
      const viewport = window.innerHeight;
      sections.slice(1).forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (rect.height + viewport)));
        const centered = progress - 0.5;
        const rise = Math.max(0, 1 - progress * 2.1) * 110;
        element.style.setProperty("--section-progress", progress.toFixed(4));
        element.style.setProperty("--scroll-shift", `${(centered * 110).toFixed(2)}px`);
        element.style.setProperty("--scroll-shift-reverse", `${(centered * -110).toFixed(2)}px`);
        element.style.setProperty("--scroll-rise", `${rise.toFixed(2)}px`);
        element.style.setProperty("--scroll-rise-soft", `${(rise * 0.35).toFixed(2)}px`);
        element.style.setProperty("--scroll-rotate", `${(centered * 4).toFixed(2)}deg`);
        element.style.setProperty("--scan-position", `${(progress * 100).toFixed(2)}%`);
        element.style.setProperty("--scroll-orb-y", `${(progress * 55).toFixed(2)}%`);
        element.style.setProperty("--scroll-orb-y-secondary", `${(12 + progress * 38).toFixed(2)}%`);
        element.style.setProperty("--scroll-spin", `${(progress * 180).toFixed(2)}deg`);
        element.style.setProperty("--scroll-scale", (0.8 + progress * 0.35).toFixed(3));
        element.style.setProperty("--reveal-inset", `${(Math.max(0, 1 - progress * 3) * 42).toFixed(2)}%`);
        element.style.setProperty("--reveal-opacity", Math.min(1, progress * 3.2).toFixed(3));
        element.style.setProperty("--depth-scale", (0.94 + Math.min(1, progress * 2.4) * 0.06).toFixed(4));
      });
    };
    updateSectionProgress();
    window.addEventListener("scroll", updateSectionProgress, { passive: true });
    window.addEventListener("resize", updateSectionProgress, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
    }, { rootMargin: "-40% 0px -50% 0px" });
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      clearInterval(timer);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", updateSectionProgress);
      window.removeEventListener("resize", updateSectionProgress);
      observer.disconnect();
    };
  }, []);

  const chapterLabels = {
    about: lang === "es" ? "PERFIL" : "PROFILE",
    projects: lang === "es" ? "PROYECTOS" : "PROJECTS",
    work: lang === "es" ? "EXPERIENCIA" : "EXPERIENCE",
    awards: lang === "es" ? "RECONOCIMIENTO" : "RECOGNITION",
  };

  const chapterNumber = sections.indexOf(active);

  return (
    <>
      <div className="pointer-aura" aria-hidden="true" />
      <div className="system-cursor" ref={cursorRef} aria-hidden="true"><span /></div>
      <div className="system-cursor-dot" ref={dotRef} aria-hidden="true" />

      <aside className={`system-rail system-rail--${active}`} aria-label={lang === "es" ? "Progreso de la página" : "Page progress"}>
        <span className="system-rail__word">LOPEZ.OS</span>
        <nav>
          {sections.map((id, index) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-label={`Section ${index}`}>
              <span>{String(index).padStart(2, "0")}</span><i />
            </a>
          ))}
        </nav>
        <span className="system-rail__word">SCROLL ↘</span>
      </aside>

      <div className="system-status" aria-hidden="true">
        <span><i /> NETWORK ACTIVE</span>
        <span>MADRID {time}</span>
      </div>

      {active !== "top" && (
        <div className={`scroll-chapter-flash scroll-chapter-flash--${active}`} key={active} aria-hidden="true">
          <span>{String(chapterNumber).padStart(2, "0")}</span>
          <strong>{chapterLabels[active]}</strong>
          <i />
        </div>
      )}
    </>
  );
};

export default InterfaceLayer;
