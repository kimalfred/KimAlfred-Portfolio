import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Moon, Sun, Download, Eye } from 'lucide-react';
import Profile from '../assets/kim2.jpg'
import BannerGif from '../assets/code.gif'
import CatGIF from '../assets/cat.gif'
import BmoGIF from '../assets/bmo.gif'
import cv from '../assets/Molina-Kim-Alfred-Resume.pdf';
import BurgerMenu from '../constants/BurgerMenu'
import TextType from './TextType';

export default function ProfileCard({ isDark, setIsDark }) {

  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [showResumeModal, setShowResumeModal] = useState(false);

  //GIF 
  const bannerImages = [
    BannerGif,
    CatGIF,
    BmoGIF
  ];

  const fullName = "Kim Alfred Molina";
  const email = "kimalfredmolina1224@gmail.com";

  // Typing animation effect with erasing with banner rotation effect every 10 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [bannerImages.length]);



  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  // Function to scroll to specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.06
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 4,
      y: 2,
      transition: { duration: 2 }
    }
  };

  return (
    <div className={`transition-colors duration-500 bg-transparent`}>

      <BurgerMenu
        isDark={isDark}
        setIsDark={setIsDark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToSection={scrollToSection}
      />

      <motion.div
        id="profile"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 pt-12 pb-4"
      >
        {/* Banner Section */}
        <motion.div
          variants={itemVariants}
          className={`relative h-80 mb-20 rounded-2xl flex items-center justify-center transition-colors duration-500 border ${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
            }`}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentBannerIndex}
                src={bannerImages[currentBannerIndex]}
                alt="Banner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover rounded-2xl"
              />
            </AnimatePresence>
          </div>

          {/* Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="absolute -bottom-16 left-6 z-10"
          >
            <div className={`w-40 h-40 rounded-full border-4 overflow-hidden shadow-2xl transition-colors duration-300 ${isDark ? 'border-[#09090b]' : 'border-white'
              }`}>
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Info */}
        <motion.div variants={itemVariants}>
          {/* Desktop Layout */}
          <div className="hidden md:flex items-start justify-between">
            <div className="relative">
              <div>
                <h1 className={`text-4xl font-bold mb-1 tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  <TextType
                    text={["Kim Alfred", "Kim Alfred A. Molina"]}
                    typingSpeed={70}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    deletingSpeed={40}
                    variableSpeedEnabled={false}
                    variableSpeedMin={60}
                    variableSpeedMax={120}
                    cursorBlinkDuration={0.5}
                  />
                </h1>
                <p className={`text-lg font-semibold tracking-wide ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Software Developer <span className="text-red-500 font-bold mx-1">|</span> Full Stack Web Developer
                </p>
              </div>

              {/* Social Links - Desktop Fixed Position */}
              <div className="absolute top-0 left-[380px] flex gap-2.5">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/kimalfredmolina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-full transition-all duration-300 shadow-md border ${
                    isDark
                      ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                      : 'bg-white border-neutral-200 text-neutral-700 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                  }`}
                  title="GitHub"
                >
                  <Github size={18} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/kim-alfred-a-molina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-full transition-all duration-300 shadow-md border ${
                    isDark
                      ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                      : 'bg-white border-neutral-200 text-neutral-700 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                  }`}
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </motion.a>

                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyEmail}
                    className={`p-2.5 rounded-full transition-all duration-300 shadow-md border ${
                      isDark
                        ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                        : 'bg-white border-neutral-200 text-neutral-700 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                    }`}
                    title="Copy Email"
                  >
                    <Mail size={18} />
                  </motion.button>

                  <AnimatePresence>
                    {copied && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className={`absolute -bottom-10 left-1/2 -translate-x-1/2
                          whitespace-nowrap text-xs px-3 py-1 rounded-md shadow-lg border z-20
                          ${isDark ? 'bg-neutral-900 border-red-500/40 text-neutral-100' : 'bg-neutral-950 border-neutral-800 text-white'}`}
                      >
                        Kim Alfred Email address copied!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* View Resume Button - Desktop Right Side */}
            <div className="flex gap-3">
              <a
                href={cv}
                onClick={(e) => {
                  e.preventDefault();
                  setShowResumeModal(true);
                }}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative z-10 flex h-12 items-center justify-center gap-2 rounded-xl px-6 font-medium transition-all duration-300 border border-red-500/80 shadow-md shadow-red-500/10 ${
                    isDark
                      ? 'bg-neutral-900 text-neutral-200 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]'
                      : 'bg-white text-neutral-900 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                  }`}
                >
                  {/* Text */}
                  <span className="transition-transform duration-500 group-hover:-translate-y-[150%] group-hover:opacity-0 flex items-center gap-2">
                    <Eye size={18} />
                    View my Resume
                  </span>
                  {/* Icon slides up */}
                  <span className="absolute translate-y-[150%] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-2 text-white">
                    <Eye size={20} />
                    <span>View Resume</span>
                  </span>
                </motion.div>
              </a>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col">
            {/* Name and Title */}
            <div className="mb-4">
              <h1 className={`text-2xl font-bold mb-1 tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                <TextType
                  text={["Kim Alfred", "Kim Alfred Molina"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="_"
                  deletingSpeed={50}
                  variableSpeedEnabled={false}
                  variableSpeedMin={60}
                  variableSpeedMax={120}
                  cursorBlinkDuration={0.5}
                />
              </h1>
              <p className={`text-base font-semibold ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Software Developer <span className="text-red-500 font-bold mx-1">|</span> Full Stack Web Developer
              </p>
            </div>

            {/* Social Links - Mobile */}
            <div className="flex gap-2.5 mb-4">
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/kimalfredmolina"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full transition-all duration-300 shadow-md border ${
                  isDark
                    ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                    : 'bg-white border-neutral-200 text-neutral-700 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                }`}
                title="GitHub"
              >
                <Github size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/kim-alfred-a-molina/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full transition-all duration-300 shadow-md border ${
                  isDark
                    ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                    : 'bg-white border-neutral-200 text-neutral-700 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                }`}
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>

              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  className={`p-2.5 rounded-full transition-all duration-300 shadow-md border ${
                    isDark
                      ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                      : 'bg-white border-neutral-200 text-neutral-700 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                  }`}
                  title="Copy Email"
                >
                  <Mail size={18} />
                </motion.button>

                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className={`absolute -bottom-10 left-1/2 -translate-x-1/2
                        whitespace-nowrap text-xs px-3 py-1 rounded-md shadow-lg border z-10
                        ${isDark ? 'bg-neutral-900 border-red-500/40 text-neutral-100' : 'bg-neutral-950 border-neutral-800 text-white'}`}
                    >
                      Email copied!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* View Resume Button - Mobile Full Width */}
            <div className="flex gap-3">
              <a
                href={cv}
                onClick={(e) => {
                  e.preventDefault();
                  setShowResumeModal(true);
                }}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl flex-1"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative z-10 flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 font-medium transition-all duration-300 border border-red-500/80 shadow-md shadow-red-500/10 ${
                    isDark
                      ? 'bg-neutral-900 text-neutral-200 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]'
                      : 'bg-white text-neutral-900 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                  }`}
                >
                  {/* Text */}
                  <span className="transition-transform duration-500 group-hover:-translate-y-[150%] group-hover:opacity-0 flex items-center gap-2">
                    <Eye size={18} />
                    View my Resume
                  </span>
                  {/* Icon slides up */}
                  <span className="absolute translate-y-[150%] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-2 text-white">
                    <Eye size={20} />
                    <span>View Resume</span>
                  </span>
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 flex items-center justify-center p-4"
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full h-[85vh] max-w-5xl rounded-2xl overflow-hidden shadow-2xl border ${isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
                }`}
            >
              {/* Close Button */}
              <div className={`absolute top-4 left-4 z-10 flex items-center gap-2 ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-neutral-100 border border-neutral-200'
                } p-1.5 rounded-xl shadow-md`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowResumeModal(false)}
                  className={`p-2 rounded-lg transition-colors font-bold text-sm ${isDark
                    ? 'text-neutral-300 hover:bg-red-600 hover:text-white'
                    : 'text-neutral-700 hover:bg-red-600 hover:text-white'
                    }`}
                >
                  ✕
                </motion.button>
              </div>

              {/* PDF Viewer */}
              <iframe
                src={cv}
                className="w-full h-full border-none"
                title="Resume PDF"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
