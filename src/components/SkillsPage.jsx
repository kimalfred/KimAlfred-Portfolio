import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants/experiences';
import { getIconPath } from '../constants/icons';

const SkillsPage = ({ isDark }) => {
  const [expandedExperiences, setExpandedExperiences] = useState({});

  const toggleExpanded = (index) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text, wordLimit = 30) => {
    const words = text.split(/\s+/).filter(word => word.trim());
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skills = {
    '• Programming Languages': [
      { name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' },
      { name: 'TypeScript' }, { name: 'Python' }, { name: 'PHP' },
      { name: 'Java' }, { name: 'C#' }, { name: 'VB.Net' },
    ],
    '• Frameworks': [
      { name: 'React.js' }, { name: 'React Native' }, { name: 'Tailwind CSS' },
      { name: 'Django' }, { name: 'Node.js' }, { name: 'Express.js' }, { name: 'Next.js' }, { name: 'Nest.js' },
    ],
    '• Database Management': [
      { name: 'MySQL' }, { name: 'Firebase' }, { name: 'MongoDB' }, { name: 'Supabase' }, { name: 'PostgreSQL' },
    ],
    '• Tools': [
      { name: 'Git' }, { name: 'Github' }, { name: 'Postman' }, { name: 'Prisma ORM' }, { name: 'Figma' },
      { name: 'Jest' }, { name: 'Expo' }, { name: 'ClickUp' },
    ],
    '• DevOps': [
      { name: 'Docker' }, { name: 'Github Actions' }, { name: 'CI/CD' },
    ],
    '• Software Engineering': [
      { name: 'SDLC' }, { name: 'Agile' },
    ],
  };

  return (
    <div
      id="skills"
      className={`transition-colors duration-500 bg-transparent`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 pt-0.5 pb-6 grid lg:grid-cols-2 gap-4 items-start"
      >
        {/* ── Skills Card ── */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className={`group relative p-8 rounded-2xl overflow-hidden transition-all duration-300 border
            ${isDark
              ? 'bg-neutral-900/90 border-neutral-800 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-neutral-700 hover:shadow-[0_12px_40px_rgba(239,68,68,0.08)]'
              : 'bg-white border-neutral-200/90 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(239,68,68,0.06)]'
            }`}
        >
          <div className={`absolute top-4 left-0 w-1 h-20 rounded-r-full transition-colors duration-300 ${isDark ? 'bg-neutral-700 group-hover:bg-red-500' : 'bg-neutral-300 group-hover:bg-red-600'}`} />

          <h2 className={`text-2xl font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Technical Skills
          </h2>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className={`text-sm font-bold mb-3 uppercase tracking-wider ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`group/skill flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium shadow-sm transition-all duration-200 border
                        ${isDark
                          ? 'bg-neutral-800/90 text-neutral-300 border-neutral-700/60 hover:bg-red-600 hover:text-white hover:border-red-600'
                          : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-red-600 hover:text-white hover:border-red-600'
                        }`}
                    >
                      {getIconPath(skill.name) && (
                        <img src={getIconPath(skill.name)} alt={skill.name} className="w-5 h-5 object-contain" />
                      )}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Experience Card ── */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className={`group relative p-8 rounded-2xl overflow-hidden transition-all duration-300 h-fit border
            ${isDark
              ? 'bg-neutral-900/90 border-neutral-800 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-neutral-700 hover:shadow-[0_12px_40px_rgba(239,68,68,0.08)]'
              : 'bg-white border-neutral-200/90 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(239,68,68,0.06)]'
            }`}
        >
          <div className={`absolute top-4 left-0 w-1 h-20 rounded-r-full transition-colors duration-300 ${isDark ? 'bg-neutral-700 group-hover:bg-red-500' : 'bg-neutral-300 group-hover:bg-red-600'}`} />

          <h2 className={`text-2xl font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Experience
          </h2>

          <div className="space-y-8">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative pl-6 border-l-2 last:border-transparent group/item ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}
              >
                {/* Timeline dot with ring */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full shadow-md ring-[3px] transition-colors duration-300
                  ${isDark ? 'bg-neutral-500 ring-[#09090b] group-hover/item:bg-red-500' : 'bg-neutral-400 ring-white group-hover/item:bg-red-600'}`}
                />

                {/* Top row: role + year badge */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className={`text-lg font-bold leading-snug ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                    {experience.role}
                  </h3>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap flex-shrink-0 border transition-colors duration-300
                    ${isDark ? 'bg-neutral-800 text-neutral-200 border-neutral-700 group-hover/item:bg-red-600 group-hover/item:text-white group-hover/item:border-red-600' : 'bg-neutral-100 text-neutral-800 border-neutral-200 group-hover/item:bg-red-600 group-hover/item:text-white group-hover/item:border-red-600'}`}
                  >
                    {index === 0 && (
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-500`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 bg-red-500`} />
                      </span>
                    )}
                    {experience.year}
                  </span>
                </div>

                {/* Company */}
                <p className={`text-sm font-semibold mb-2 transition-colors duration-200 ${isDark ? 'text-neutral-400 group-hover/item:text-red-400' : 'text-neutral-600 group-hover/item:text-red-600'}`}>
                  {experience.company}
                </p>

                {/* Divider */}
                <div className={`border-t mb-3 ${isDark ? 'border-neutral-800' : 'border-neutral-100'}`} />

                {/* Description */}
                <div>
                  <ul className={`text-sm mb-3 leading-relaxed space-y-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {(() => {
                      const bullets = (expandedExperiences[index] 
                        ? experience.description 
                        : truncateText(experience.description)
                      ).split('•').filter(item => item.trim());
                      
                      const isExpanded = expandedExperiences[index];
                      const isTruncatable = experience.description.split(/\s+/).filter(word => word.trim()).length > 30;
                      const isTruncated = !isExpanded && isTruncatable;

                      return bullets.map((bullet, idx) => {
                        const isLast = idx === bullets.length - 1;
                        return (
                          <li key={idx} className="flex gap-2">
                            <span className={`transition-colors duration-200 ${isDark ? 'text-neutral-600 group-hover/item:text-red-500' : 'text-neutral-400 group-hover/item:text-red-600'}`}>•</span>
                            <span>
                              {bullet.trim()}
                              {isLast && isTruncated && (
                                <button
                                  onClick={() => toggleExpanded(index)}
                                  className={`ml-1 font-semibold transition-all duration-200 ${
                                    isDark
                                      ? 'text-neutral-300 hover:text-red-400 underline'
                                      : 'text-neutral-700 hover:text-red-600 underline'
                                  }`}
                                >
                                  See More
                                </button>
                              )}
                              {isLast && isExpanded && isTruncatable && (
                                <button
                                  onClick={() => toggleExpanded(index)}
                                  className={`ml-1 font-semibold transition-all duration-200 ${
                                    isDark
                                      ? 'text-neutral-300 hover:text-red-400 underline'
                                      : 'text-neutral-700 hover:text-red-600 underline'
                                  }`}
                                >
                                  See Less
                                </button>
                              )}
                            </span>
                          </li>
                        );
                      });
                    })()}
                  </ul>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg shadow-sm border transition-colors duration-200
                        ${isDark ? 'bg-neutral-800/90 text-neutral-300 border-neutral-700/60 hover:border-red-500/60 hover:text-white' : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:border-red-500/60 hover:text-black'}`}
                    >
                      {getIconPath(tech) && (
                        <img src={getIconPath(tech)} alt={tech} className="w-4 h-4 object-contain" />
                      )}
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
