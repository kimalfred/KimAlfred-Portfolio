import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ArrowRight, ExternalLink } from 'lucide-react';
import { certificates } from '../constants/certificates';

const CertificatesPage = ({ isDark }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div
      id="certificates"
      className={`transition-colors duration-500 ${
        'bg-transparent'
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-90px" }}
        className="max-w-7xl mx-auto px-6 py-4"
      >
        {/* Section Header */}
        <motion.div 
          variants={cardVariants}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3 text-red-600">
            <Award
              size={28}/>
            <h2
              className={`text-3xl md:text-4xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              My Certificates
            </h2>
          </div>
          <p
            className={`text-base max-w-2xl mx-auto ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Academic & Professional certifications showcasing my continuous learning journey related to development
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.slice(0, 3).map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className={`group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 cursor-pointer border
                  ${
                    isDark
                      ? 'bg-neutral-900/90 border-neutral-800 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]'
                      : 'bg-white border-neutral-200 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.12)]'
                  }
              `}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-neutral-950">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%2318181b" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%2371717a"%3ECertificate Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-xs px-3 py-1.5 rounded-full bg-red-600/90 shadow-md">Click to expand</span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start gap-2 mb-3 text-red-600">
                  <Award
                    size={18}
                    className="shrink-0 mt-0.5"
                  />
                  <h3
                    className={`text-lg font-bold leading-snug transition-colors duration-200 ${
                      isDark ? 'text-white group-hover:text-red-400' : 'text-neutral-900 group-hover:text-red-600'
                    }`}
                  >
                    {cert.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  {/* Org Logo */}
                  {cert.orgLogo ? (
                    <img 
                      src={cert.orgLogo} 
                      alt={cert.issuer} 
                      className="w-8 h-8 object-contain rounded-full border border-neutral-700/50" 
                    />
                  ) : (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                      isDark ? 'bg-neutral-800 border-neutral-700 text-neutral-300' : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                    }`}>
                      <Award size={16} />
                    </div>
                  )}
                  
                  <div className="flex flex-col">
                    <p
                      className={`text-sm font-medium mb-0.5 leading-tight ${
                        isDark ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      {cert.issuer}
                    </p>
                    <p
                      className={`text-xs leading-tight ${
                        isDark ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      {cert.date}
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200 ${
                        isDark
                          ? 'bg-neutral-800 text-neutral-300 border-neutral-700/60 hover:border-red-500 hover:text-white'
                          : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:border-red-500 hover:text-black'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Verify Button */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-red-500 bg-red-600 hover:bg-red-500 text-white font-semibold shadow-md shadow-red-600/30 hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300"
                >
                  <ExternalLink size={14} />
                  <span className="text-xs font-semibold">Verify Credential</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <motion.div variants={cardVariants} className="mt-12 text-center">
          <Link
            to="/allcertificates"
            className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl px-8 font-medium transition-all duration-300 border border-red-500/80 shadow-lg shadow-red-500/10
              ${
                isDark
                  ? 'bg-neutral-900 text-white hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]'
                  : 'bg-neutral-950 text-white hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]'
              }`}
          >
            {/* Default Content */}
            <div className="flex items-center gap-2 translate-x-0 opacity-100 transition-all duration-500
                            group-hover:-translate-x-[150%] group-hover:opacity-0">
              <Award size={18} />
              <span>View all my Certificates</span>
            </div>

            {/* Hover Content */}
            <div className="absolute flex items-center gap-2 translate-x-[150%] opacity-0 transition-all duration-500
                            group-hover:translate-x-0 group-hover:opacity-100">
              <span>Explore</span>
              <ArrowRight size={20} />
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Expanded Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl border ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors duration-200 ${
                  isDark
                    ? 'bg-black/60 hover:bg-red-600 text-white'
                    : 'bg-white/90 hover:bg-red-600 hover:text-white text-neutral-900 shadow-md'
                }`}
              >
                <X size={20} />
              </button>

              {/* Certificate Image */}
              <div className="relative bg-neutral-950 flex items-center justify-center p-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[65vh] object-contain rounded-lg"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%2318181b" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%2371717a"%3ECertificate Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      className={`text-2xl font-bold mb-2 tracking-tight ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      {selectedCert.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      {selectedCert.orgLogo ? (
                        <img 
                          src={selectedCert.orgLogo} 
                          alt={selectedCert.issuer} 
                          className="w-10 h-10 object-contain rounded-full border border-neutral-700/50" 
                        />
                      ) : (
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                          isDark ? 'bg-neutral-800 border-neutral-700 text-neutral-300' : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                        }`}>
                          <Award size={20} />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <p
                          className={`text-base font-medium mb-0.5 leading-tight ${
                            isDark ? 'text-neutral-300' : 'text-neutral-700'
                          }`}
                        >
                          {selectedCert.issuer}
                        </p>
                        <p
                          className={`text-sm leading-tight ${
                            isDark ? 'text-neutral-400' : 'text-neutral-500'
                          }`}
                        >
                          {selectedCert.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                      isDark
                        ? 'bg-neutral-800 text-neutral-200 border-neutral-700 hover:bg-red-600 hover:text-white hover:border-red-600'
                        : 'bg-neutral-900 text-white border-neutral-900 hover:bg-red-600 hover:text-white hover:border-red-600'
                    }`}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Verify</span>
                  </motion.a>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-200 ${
                        isDark
                          ? 'bg-neutral-800 text-neutral-300 border-neutral-700/60 hover:border-red-500 hover:text-white'
                          : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:border-red-500 hover:text-black'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificatesPage;