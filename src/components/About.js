"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const About = ({ lang, t }) => {
  const sections = [
    { title: t.about.experience_title, content: t.about.experience, icon: "💼" },
    { title: t.about.tech_title, content: t.about.tech, icon: "⚡" },
    { title: t.about.passion_title, content: t.about.passion, icon: "🚀" },
    { title: t.about.goal_title, content: t.about.goal, icon: "🎯" }
  ];

  const skills = t.skills?.categories || [];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        className="relative max-w-6xl mx-auto w-full z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {/* Section title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-6xl md:text-7xl font-extrabold mb-4 gradient-text bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 animate-gradient">
            {t.nav.about}
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left column */}
          <div className="space-y-6">
            <motion.div className="glass p-8 rounded-2xl glow-hover" variants={itemVariants}>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {t.about.description}
              </p>
            </motion.div>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-2xl glow-hover group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">
                    {section.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 gradient-text bg-gradient-to-r from-cyan-400 to-teal-400">
                      {section.title}
                    </h3>
                    {index === 1 ? (
                      <div className="space-y-2">
                        {section.content.split("\n\n").map((block, bi) => {
                          const [label, ...rest] = block.split("\n");
                          return (
                            <div key={bi}>
                              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/70">{label}</span>
                              <p className="text-sm text-gray-300 leading-relaxed mt-0.5">{rest.join(", ")}</p>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-base text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column - Profile image */}
          <motion.div className="flex items-center justify-center" variants={itemVariants}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-gradient"></div>
              <motion.div
                className="relative glass p-4 rounded-3xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src="/assets/profile.png"
                  alt="About me"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover animate-float"
                />
                <motion.div
                  className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  ✨ Blockchain Dev
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  🤖 AI Agent Builder
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills grid */}
        {skills.length > 0 && (
          <motion.div variants={itemVariants}>
            <motion.div className="text-center mb-10" variants={itemVariants}>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-3 gradient-text bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 animate-gradient">
                {t.skills?.title || "Skills"}
              </h3>
              <div className="w-16 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((category, catIdx) => (
                <motion.div
                  key={catIdx}
                  className="glass p-6 rounded-2xl glow-hover group relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">
                        {category.icon}
                      </span>
                      <h4 className="text-lg font-bold gradient-text bg-gradient-to-r from-cyan-400 to-teal-400">
                        {category.name}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIdx) => (
                        <motion.span
                          key={skillIdx}
                          className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-500/30"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: catIdx * 0.05 + skillIdx * 0.03, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default About;
