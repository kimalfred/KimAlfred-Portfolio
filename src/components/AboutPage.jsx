/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  User,
  Github,
  Music2,
} from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

const AboutPage = ({ isDark }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, date: '', count: 0 });

  const renderBlock = useCallback((block, activity) => {
    return React.cloneElement(block, {
      onMouseEnter: (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({
          visible: true,
          x: rect.left + rect.width / 2,
          y: rect.top - 10,
          date: activity.date,
          count: activity.count,
        });
      },
      onMouseLeave: () => setTooltip((prev) => ({ ...prev, visible: false })),
    });
  }, []);

  return (
    <div
      id="about"
      className={`transition-colors duration-500 bg-transparent`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-4 space-y-4"
      >
        {/* About Me + Right column */}
        <div className="grid lg:grid-cols-2 gap-4">

          {/* About Me */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className={`group relative p-7 rounded-2xl overflow-hidden transition-all duration-300 border
              ${isDark
                ? 'bg-neutral-900/90 border-neutral-800 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-neutral-700 hover:shadow-[0_12px_40px_rgba(239,68,68,0.08)]'
                : 'bg-white border-neutral-200/90 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(239,68,68,0.06)]'
              }`}
          >
            <div className={`absolute top-4 left-0 w-1 h-16 rounded-r-full transition-colors duration-300 ${isDark ? 'bg-neutral-700 group-hover:bg-red-500' : 'bg-neutral-300 group-hover:bg-red-600'}`} />

            {/* Header row */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg shadow-sm border transition-colors duration-300 ${
                  isDark 
                    ? 'bg-neutral-800 border-neutral-700 text-neutral-300 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600' 
                    : 'bg-neutral-100 border-neutral-200 text-neutral-700 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600'
                }`}>
                  <User size={13} />
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>About Me</span>
              </div>

              <span className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full transition-colors duration-300 border
                ${isDark ? 'bg-neutral-800 text-neutral-300 border-neutral-700 group-hover:border-red-500/40' : 'bg-neutral-100 text-neutral-700 border-neutral-200 group-hover:border-red-500/40'}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Open to work
              </span>
            </div>

            {/* Avatar + name */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center text-base font-black shadow-md flex-shrink-0 border transition-all duration-300
                ${isDark ? 'bg-neutral-800 text-white border-neutral-700 group-hover:border-red-500' : 'bg-neutral-900 text-white border-neutral-900 group-hover:border-red-600'}`}>
                KA
                <span className="absolute -bottom-1.5 -right-1.5 text-lg leading-none">👋</span>
              </div>
              <div>
                <h2 className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  Kim Alfred
                </h2>
                <p className={`text-xs font-semibold ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Full-Stack Developer <span className="text-red-500 font-bold mx-1">·</span> CS Graduate
                </p>
              </div>
            </div>

            <div className={`border-t mb-5 ${isDark ? 'border-neutral-800' : 'border-neutral-100'}`} />

            {/* Description */}
            <div className="mb-6">
              <p className={`text-sm leading-[1.85] ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                Hi there. I'm a Computer Science graduate and Software Developer with a passion for building things that live on the internet.
              </p>

              <p className={`text-sm leading-[1.85] mt-4 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                I enjoy developing real-world applications, solving problems through code, and creating products where design and engineering work together
                seamlessly. I'm constantly learning new technologies and improving my skills to build efficient, scalable, and user-focused solutions.
              </p>
            </div>

            <div className={`border-t pt-5 ${isDark ? 'border-neutral-800' : 'border-neutral-100'}`}>
              {/* Minimalist contacts */}
              <div className="space-y-3">
                {[
                  { icon: Phone, label: '+63 927 732 4896', href: 'tel:+639277324896', sublabel: 'Call or text' },
                  { icon: Mail, label: 'kimalfredmolina1224@gmail.com', href: 'mailto:kimalfredmolina1224@gmail.com', sublabel: 'Email' },
                ].map(({ icon: Icon, label, href, sublabel }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: 3 }}
                    className="flex items-center justify-between group/link"
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={14}
                        className={`flex-shrink-0 transition-colors duration-200 ${isDark ? 'text-neutral-500 group-hover/link:text-red-500' : 'text-neutral-400 group-hover/link:text-red-600'}`}
                      />
                      <span className={`text-sm truncate transition-colors duration-200 ${isDark ? 'text-neutral-300 group-hover/link:text-red-400' : 'text-neutral-700 group-hover/link:text-red-600'}`}>
                        {label}
                      </span>
                    </div>
                    <span className={`text-[10px] ml-3 flex-shrink-0 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                      {sublabel}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-4">

            {/* Education */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`group relative p-7 rounded-2xl overflow-hidden transition-all duration-300 border
                ${isDark
                  ? 'bg-neutral-900/90 border-neutral-800 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-neutral-700 hover:shadow-[0_12px_40px_rgba(239,68,68,0.08)]'
                  : 'bg-white border-neutral-200/90 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(239,68,68,0.06)]'
                }`}
            >
              <div className={`absolute top-4 left-0 w-1 h-16 rounded-r-full transition-colors duration-300 ${isDark ? 'bg-neutral-700 group-hover:bg-red-500' : 'bg-neutral-300 group-hover:bg-red-600'}`} />

              <div className="flex items-center gap-2 mb-4">
                <div className={`p-1.5 rounded-lg shadow-sm border transition-colors duration-300 ${
                  isDark 
                    ? 'bg-neutral-800 border-neutral-700 text-neutral-300 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600' 
                    : 'bg-neutral-100 border-neutral-200 text-neutral-700 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600'
                }`}>
                  <GraduationCap size={13} />
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Education</span>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className={`text-base font-bold leading-snug mb-1 ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                    B.S. Computer Science
                  </h2>
                  <p className={`text-sm font-semibold transition-colors duration-200 ${isDark ? 'text-neutral-400 group-hover:text-red-400' : 'text-neutral-600 group-hover:text-red-600'}`}>
                    Taguig City University
                  </p>
                </div>
                <span className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap flex-shrink-0 border transition-colors duration-300
                  ${isDark ? 'bg-neutral-800 text-neutral-200 border-neutral-700 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600' : 'bg-neutral-100 text-neutral-800 border-neutral-200 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600'}`}>
                  2022 – 2026
                </span>
              </div>

              <div className={`border-t mt-4 mb-3 ${isDark ? 'border-neutral-800' : 'border-neutral-100'}`} />

              <div className="flex items-center gap-2">
                <MapPin size={13} className={isDark ? 'text-neutral-500' : 'text-neutral-400'} />
                <span className={`text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Taguig City, Philippines</span>
              </div>
            </motion.div>

            {/* Spotify */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`group relative p-7 rounded-2xl overflow-hidden transition-all duration-300 border
                ${isDark
                  ? 'bg-neutral-900/90 border-neutral-800 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-neutral-700 hover:shadow-[0_12px_40px_rgba(239,68,68,0.08)]'
                  : 'bg-white border-neutral-200/90 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(239,68,68,0.06)]'
                }`}
            >
              <div className={`absolute top-4 left-0 w-1 h-16 rounded-r-full transition-colors duration-300 ${isDark ? 'bg-neutral-700 group-hover:bg-red-500' : 'bg-neutral-300 group-hover:bg-red-600'}`} />

              <style>{`
                @keyframes musicBounce {
                  0%, 100% { transform: scaleY(0.4); }
                  50% { transform: scaleY(1); }
                }
              `}</style>

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg shadow-sm border transition-colors duration-300 ${
                    isDark 
                      ? 'bg-neutral-800 border-neutral-700 text-neutral-300 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600' 
                      : 'bg-neutral-100 border-neutral-200 text-neutral-700 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600'
                  }`}>
                    <Music2 size={13} />
                  </div>
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      Playlist while coding
                    </span>
                    <p className={`text-[10px] mt-0.5 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                      what&apos;s on loop rn 🎧
                    </p>
                  </div>
                </div>

                <div className="flex items-end gap-[3px] h-5">
                  {[0.9, 1.3, 0.7, 1.1, 0.85].map((duration, i) => (
                    <div
                      key={i}
                      className={`w-[3px] rounded-full origin-bottom transition-colors duration-300 ${isDark ? 'bg-neutral-500 group-hover:bg-red-500' : 'bg-neutral-400 group-hover:bg-red-600'}`}
                      style={{
                        height: `${[55, 100, 40, 80, 60][i]}%`,
                        animation: `musicBounce ${duration}s ease-in-out infinite`,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <iframe
                className="w-full rounded-xl"
                src="https://open.spotify.com/embed/playlist/5RqOuJMNqLY1BA40vh8MCT?utm_source=generator&theme=0"
                title="Spotify playlist"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ height: '152px', border: 'none' }}
              />
            </motion.div>

          </div>
        </div>

        {/* GitHub Activity */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className={`group relative p-8 rounded-2xl overflow-hidden transition-all duration-300 border
              ${isDark
                ? 'bg-neutral-900/90 border-neutral-800 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-neutral-700 hover:shadow-[0_12px_40px_rgba(239,68,68,0.08)]'
                : 'bg-white border-neutral-200/90 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(239,68,68,0.06)]'
              }`}
          >
            <div className={`absolute top-4 left-0 w-1 h-20 rounded-r-full transition-colors duration-300 ${isDark ? 'bg-neutral-700 group-hover:bg-red-500' : 'bg-neutral-300 group-hover:bg-red-600'}`} />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl shadow-sm border transition-colors duration-300 ${
                  isDark 
                    ? 'bg-neutral-800 border-neutral-700 text-neutral-300 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600' 
                    : 'bg-neutral-100 border-neutral-200 text-neutral-700 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600'
                }`}>
                  <Github size={16} />
                </div>
                <div>
                  <h2 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    GitHub Activity
                  </h2>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {selectedYear === currentYear ? 'Current year activity' : `Activity for ${selectedYear}`}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                {[2026, 2025, 2024, 2023, 2022].map((year) => (
                  <motion.button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-1.5 text-sm rounded-xl font-semibold transition-all duration-200 border
                      ${selectedYear === year
                        ? 'bg-red-600 border-red-600 text-white shadow-md'
                        : isDark
                          ? 'bg-neutral-800/80 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white hover:border-red-500'
                          : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:bg-neutral-200 hover:text-black hover:border-red-500'
                      }`}
                  >
                    {year}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className={`border-t mb-6 ${isDark ? 'border-neutral-800' : 'border-neutral-100'}`} />

            <div className={`relative min-h-[170px] ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedYear}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 w-full"
                >
                  <div className="hidden md:flex justify-center">
                    <GitHubCalendar username="kimalfredmolina" year={selectedYear} colorScheme={isDark ? 'dark' : 'light'} blockSize={12} blockMargin={4} fontSize={13} renderBlock={renderBlock} />
                  </div>
                  <div className="hidden sm:block md:hidden overflow-x-auto pb-4">
                    <div className="w-max pr-4">
                      <GitHubCalendar username="kimalfredmolina" year={selectedYear} colorScheme={isDark ? 'dark' : 'light'} blockSize={11} blockMargin={3} fontSize={13} renderBlock={renderBlock} />
                    </div>
                  </div>
                  <div className="block sm:hidden overflow-x-auto pb-4">
                    <div className="w-max pr-4">
                      <GitHubCalendar username="kimalfredmolina" year={selectedYear} colorScheme={isDark ? 'dark' : 'light'} blockSize={11} blockMargin={3} fontSize={12} renderBlock={renderBlock} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {tooltip.visible && (
                <div
                  className={`fixed px-3 py-2 rounded-lg text-xs font-semibold pointer-events-none z-50 shadow-xl border
                    ${isDark ? 'bg-neutral-950 text-neutral-100 border-red-500' : 'bg-neutral-950 text-white border-red-500'}`}
                  style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px`, transform: 'translate(-50%, -100%)', whiteSpace: 'nowrap' }}
                >
                  <div className="font-bold">{tooltip.count} contribution{tooltip.count !== 1 ? 's' : ''}</div>
                  <div className="text-neutral-400">{tooltip.date}</div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default AboutPage;