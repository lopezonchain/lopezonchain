"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const timelineVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const WorkHistory = ({ lang, t }) => {
  const history = t.workHistory.list;
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <section id="work" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div
        className="text-center mb-16 z-10 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-6xl md:text-7xl font-extrabold mb-4 gradient-text bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 animate-gradient">
          {t.workHistory.title}
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full" />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Timeline line */}
        <div className="absolute md:left-1/2 right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-teal-500 to-sky-500 md:-translate-x-1/2 rounded-full z-[15]" />

        <div className="space-y-16">
          {history.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedId === item.id;
            const isFeatured = !!item.featured;
            const isLive = /present|presente/i.test(item.period);

            return (
              <motion.div
                key={item.id}
                custom={index}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute right-[14px] md:right-auto md:left-1/2 top-8 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-[20]">
                  <motion.div
                    className={`rounded-full ring-black ${isFeatured ? "w-6 h-6 md:w-8 md:h-8 ring-4 md:ring-8 bg-gradient-to-r from-cyan-400 to-teal-400" : "w-4 h-4 md:w-6 md:h-6 ring-4 md:ring-8 bg-gradient-to-r from-cyan-500 to-teal-500"}`}
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 blur-lg opacity-60 animate-pulse-glow" />
                  </motion.div>
                </div>

                <div className={`md:flex md:items-start ${isLeft ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden md:block md:w-1/2" />

                  <motion.div
                    className={`md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"} relative z-[10]`}
                    layout
                  >
                    <div className={`glass p-8 rounded-3xl glow-hover group relative overflow-hidden ${isFeatured ? "border-cyan-500/30" : ""}`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      {isLive && <LiveBadge />}
                      <CardContent item={item} isExpanded={isExpanded} onToggle={toggleExpand} isFeatured={isFeatured} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const LiveBadge = () => (
  <div className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/40 z-20 backdrop-blur-sm">
    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
    <span className="text-xs font-bold text-cyan-300 tracking-widest">LIVE</span>
  </div>
);

const CardContent = ({ item, isExpanded, onToggle, isFeatured = false }) => (
  <div className="relative z-10">
    {/* Image */}
    <div className="mb-6 overflow-hidden rounded-2xl aspect-[4/3]">
      <motion.img
        src={item.image}
        alt={item.company}
        className={`w-full h-full object-cover transition-transform duration-500 ${isFeatured ? "group-hover:scale-102" : "group-hover:scale-105"}`}
      />
    </div>

    {/* Role */}
    <h3 className={`font-bold mb-1 gradient-text bg-gradient-to-r from-cyan-400 to-teal-400 ${isFeatured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>
      {item.role}
    </h3>

    {/* Company + link */}
    <div className="flex items-center gap-2 mb-4">
      <p className={`font-semibold text-white ${isFeatured ? "text-2xl" : "text-xl"}`}>{item.company}</p>
      {item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>

    {/* Period & location */}
    <div className="flex flex-wrap gap-3 mb-5">
      <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full text-sm text-gray-300">
        <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="font-medium">{item.period}</span>
      </div>
      <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full text-sm text-gray-300">
        <svg className="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="font-medium">{item.location}</span>
      </div>
    </div>

    {/* Description */}
    {item.description && (
      <p className="text-gray-300 text-sm leading-relaxed mb-5">{item.description}</p>
    )}

    {/* Tags */}
    {item.tags?.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 text-xs font-semibold rounded-full border ${isFeatured ? "bg-cyan-500/20 text-cyan-200 border-cyan-400/40" : "bg-cyan-500/15 text-cyan-300 border-cyan-500/25"}`}
          >
            {tag}
          </span>
        ))}
      </div>
    )}

    {/* Expand highlights */}
    {item.highlights?.length > 0 && (
      <>
        <motion.button
          onClick={() => onToggle(item.id)}
          className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>{isExpanded ? "Hide details" : "Show highlights"}</span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-4 space-y-2 overflow-hidden"
            >
              {item.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                  className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 shrink-0" />
                  {h}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </>
    )}
  </div>
);

export default WorkHistory;
