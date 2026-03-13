"use client";

import { useEffect } from "react";

/**
 * Mobile-only scroll illumination effect.
 * Elements with `.glow-hover` near the vertical center of the viewport
 * receive the `.is-lit` class, replicating the desktop hover glow.
 * No effect on desktop (≥768px) — hover handles it there.
 */
const ScrollGlowEffect = () => {
  useEffect(() => {
    const isMobile = () => window.innerWidth < 768;

    const update = () => {
      if (!isMobile()) {
        // Clean up any lingering classes when resizing to desktop
        document.querySelectorAll(".glow-hover.is-lit").forEach((el) =>
          el.classList.remove("is-lit")
        );
        return;
      }

      const viewH = window.innerHeight;
      const center = viewH * 0.5;
      // Hot zone: ±38% of viewport height around the center
      const zone = viewH * 0.38;

      document.querySelectorAll(".glow-hover").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - center);

        if (dist < zone) {
          el.classList.add("is-lit");
        } else {
          el.classList.remove("is-lit");
        }
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
};

export default ScrollGlowEffect;
