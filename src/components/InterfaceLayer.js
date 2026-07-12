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
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="pointer-aura" aria-hidden="true" />
      <div className="system-cursor" ref={cursorRef} aria-hidden="true"><span /></div>
      <div className="system-cursor-dot" ref={dotRef} aria-hidden="true" />

      <aside className="system-rail" aria-label={lang === "es" ? "Progreso de la página" : "Page progress"}>
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
    </>
  );
};

export default InterfaceLayer;
