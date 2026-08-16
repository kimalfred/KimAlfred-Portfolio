import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FolderOpenDot, ArrowLeft, ChevronDown, X } from 'lucide-react';
import { projects } from '../constants/projects';
import { getIconPath } from '../constants/icons';

const Dropdown = ({ value, options, onChange, isDark }) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-52 sm:w-56">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-haspopup="listbox"
                className={`w-full rounded-xl px-4 py-2 text-left text-xs font-medium border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/40 ${
                    isDark
                        ? 'bg-neutral-900 text-neutral-200 border-neutral-800 hover:border-red-500 focus:border-red-500'
                        : 'bg-white text-neutral-800 border-neutral-200 hover:border-red-500 focus:border-red-500'
                }`}
            >
                <span className="flex items-center justify-between gap-3">
                    <span className="truncate">{value}</span>
                    <ChevronDown
                        size={14}
                        className={`shrink-0 transition-transform duration-200 ${
                            open ? 'rotate-180 text-red-500' : ''
                        }`}
                    />
                </span>
            </button>

            {open && (
                <div
                    role="listbox"
                    className={`absolute z-30 mt-2 w-full rounded-xl border shadow-xl overflow-hidden ${
                        isDark
                            ? 'bg-neutral-900 border-neutral-800'
                            : 'bg-white border-neutral-200'
                    }`}
                >
                    <ul className="dropdown-scrollbar max-h-56 overflow-y-auto py-1 p-1">
                        {options.map((option) => (
                            <li key={option}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onChange(option);
                                        setOpen(false);
                                    }}
                                    className={`w-full px-3 py-2 text-left text-xs transition-colors duration-150 rounded-lg ${
                                        value === option
                                            ? 'bg-red-600 text-white font-semibold'
                                            : isDark
                                                ? 'text-neutral-300 hover:bg-red-600 hover:text-white'
                                                : 'text-neutral-700 hover:bg-red-600 hover:text-white'
                                    }`}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const AllProjectsPage = ({ isDark }) => {
    const navigate = useNavigate();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedTech, setSelectedTech] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = [
        'All',
        ...new Set(
            projects.map((project) => project.category).filter(Boolean)
        )
    ];
    const techOptions = [
        'All',
        ...Array.from(
            new Set(
                projects.flatMap((project) => project.technologies || [])
            )
        ).sort()
    ];
    const filteredProjects = projects.filter((project) => {
        const matchesCategory =
            selectedCategory === 'All' ||
            project.category === selectedCategory;
        const matchesTech =
            selectedTech === 'All' ||
            project.technologies.includes(selectedTech);
        return matchesCategory && matchesTech;
    });

    // Define variants first
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

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        document.body.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleBackToProjects = () => {
        navigate('/');

        setTimeout(() => {
            const section = document.getElementById('projects');
            section?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    };

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            setShowScrollTop(scrollPosition > 200); //px
        };

        window.addEventListener('scroll', handleScroll);
        document.body.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`min-h-screen transition-colors duration-500 ${
                'bg-transparent'
            }`}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-6 py-20"
            >
                {/* Back Button */}
                <motion.div variants={cardVariants} className="mb-8">
                    <button
                        onClick={handleBackToProjects}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
                            isDark
                                ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-red-500 hover:bg-neutral-800'
                                : 'bg-white border-neutral-200 text-neutral-700 hover:text-black hover:border-red-500 hover:bg-neutral-50'
                        }`}
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </button>
                </motion.div>

                {/* Header */}
                <motion.div
                    variants={cardVariants}
                    className="text-center mb-14"
                >
                    <div className="flex justify-center items-center gap-3 mb-3 text-red-600">
                        <FolderOpenDot
                            size={30}
                        />
                        <h1
                            className={`text-3xl md:text-4xl font-bold tracking-tight ${
                                isDark ? 'text-white' : 'text-neutral-900'
                            }`}
                        >
                            All Projects
                        </h1>
                    </div>
                    <p
                        className={`text-base ${
                            isDark ? 'text-neutral-400' : 'text-neutral-600'
                        }`}
                    >
                        Personal projects and collaborative work where I contributed to building and designing websites, showcasing my development skills and experience.
                    </p>
                </motion.div>
                
                {/* Filters */}
                <motion.div variants={cardVariants} className="mb-10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3">
                        <div className="flex items-center gap-2">
                            <span
                                className={`text-xs font-semibold uppercase tracking-wider whitespace-nowrap ${
                                    isDark ? 'text-neutral-400' : 'text-neutral-500'
                                }`}
                            >
                                Type
                            </span>
                            <Dropdown
                                value={selectedCategory}
                                options={categories}
                                onChange={setSelectedCategory}
                                isDark={isDark}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <span
                                className={`text-xs font-semibold uppercase tracking-wider whitespace-nowrap ${
                                    isDark ? 'text-neutral-400' : 'text-neutral-500'
                                }`}
                            >
                                Tech
                            </span>
                            <Dropdown
                                value={selectedTech}
                                options={techOptions}
                                onChange={setSelectedTech}
                                isDark={isDark}
                            />
                        </div>
                    </div>

                    <div
                        className={`text-xs mt-3 text-right ${
                            isDark ? 'text-neutral-400' : 'text-neutral-500'
                        }`}
                    >
                        Showing {filteredProjects.length} of {projects.length} projects
                    </div>
                </motion.div>

                {/* Projects Grid */}
                {filteredProjects.length === 0 && (
                    <div
                        className={`mb-8 rounded-2xl border px-6 py-12 text-center text-sm ${
                            isDark
                                ? 'bg-neutral-900/50 border-neutral-800 text-neutral-400'
                                : 'bg-white border-neutral-200 text-neutral-600'
                        }`}
                    >
                        No projects match this filter yet.
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className={`group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 cursor-pointer border
                                ${
                                    isDark
                                        ? 'bg-neutral-900/90 border-neutral-800 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]'
                                        : 'bg-white border-neutral-200 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.12)]'
                                }
                            `}
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Project Image */}
                            <div className="relative h-44 overflow-hidden bg-neutral-950">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-semibold text-xs px-3 py-1.5 rounded-full bg-red-600/90 shadow-md">Click to expand</span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3
                                    className={`text-lg font-bold mb-2 transition-colors duration-200 ${
                                        isDark ? 'text-white group-hover:text-red-400' : 'text-neutral-900 group-hover:text-red-600'
                                    }`}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className={`text-xs mb-5 line-clamp-4 leading-relaxed ${
                                        isDark ? 'text-neutral-400' : 'text-neutral-600'
                                    }`}
                                >
                                    {project.description}
                                </p>

                                {/* Technologies with Icons */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => {
                                        const icon = getIconPath(tech);
                                        if (!icon) return null;
                                        return (
                                            <div
                                                key={index}
                                                title={tech}
                                                className={`flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-200 hover:scale-110 hover:border-red-500 ${
                                                    isDark ? 'bg-neutral-800/80 border-neutral-700/60' : 'bg-neutral-100 border-neutral-200'
                                                }`}
                                            >
                                                <img
                                                    src={icon}
                                                    alt={tech}
                                                    className="w-4 h-4 object-contain"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Spacer to push buttons to bottom */}
                                <div className="flex-grow"></div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 mt-auto">
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border transition-all duration-300 ${
                                            isDark
                                                ? 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700 hover:text-white hover:border-red-500'
                                                : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200 hover:text-black hover:border-red-500'
                                        }`}
                                    >
                                        <Github size={14} />
                                        <span className="text-xs font-semibold">Code</span>
                                    </motion.a>

                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border transition-all duration-300 ${
                                            isDark
                                                ? 'bg-neutral-800 text-neutral-200 border-neutral-700 hover:bg-red-600 hover:text-white hover:border-red-600'
                                                : 'bg-neutral-900 text-white border-neutral-900 hover:bg-red-600 hover:text-white hover:border-red-600'
                                        }`}
                                    >
                                        <ExternalLink size={14} />
                                        <span className="text-xs font-semibold">Demo</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Scroll To Top Button - OUTSIDE motion.div */}
            {showScrollTop && (
                <motion.button
                    onClick={handleScrollToTop}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 p-3.5 rounded-full shadow-2xl backdrop-blur-md border transition-all duration-200 ${
                        isDark
                            ? 'bg-neutral-900/90 text-neutral-200 border-neutral-800 hover:bg-red-600 hover:text-white hover:border-red-600'
                            : 'bg-white/90 text-neutral-900 border-neutral-200 hover:bg-red-600 hover:text-white hover:border-red-600'
                    }`}
                >
                    <ArrowLeft size={18} className="rotate-90" />
                </motion.button>
            )}

            {/* Expanded Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
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
                                onClick={() => setSelectedProject(null)}
                                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors duration-200 ${
                                    isDark
                                        ? 'bg-black/60 hover:bg-red-600 text-white'
                                        : 'bg-white/90 hover:bg-red-600 hover:text-white text-neutral-900 shadow-md'
                                }`}
                            >
                                <X size={20} />
                            </button>

                            {/* Project Image */}
                            <div className="relative bg-neutral-950 flex items-center justify-center p-4">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full max-h-[55vh] object-contain rounded-lg"
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%2318181b" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%2371717a"%3EProject Image%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span
                                                className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                                                    isDark ? 'bg-neutral-900 text-neutral-300 border-neutral-800' : 'bg-neutral-100 text-neutral-700 border-neutral-200'
                                                }`}
                                            >
                                                {selectedProject.category}
                                            </span>
                                        </div>
                                        <h3
                                            className={`text-2xl font-bold mb-2 tracking-tight ${
                                                isDark ? 'text-white' : 'text-neutral-900'
                                            }`}
                                        >
                                            {selectedProject.title}
                                        </h3>
                                        <p
                                            className={`text-sm leading-relaxed ${
                                                isDark ? 'text-neutral-300' : 'text-neutral-600'
                                            }`}
                                        >
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2 shrink-0">
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                                                isDark
                                                    ? 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700 hover:text-white hover:border-red-500'
                                                    : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200 hover:text-black hover:border-red-500'
                                            }`}
                                        >
                                            <Github size={16} />
                                            <span className="text-sm font-medium">Code</span>
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={selectedProject.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                                                isDark
                                                    ? 'bg-neutral-800 text-neutral-200 border-neutral-700 hover:bg-red-600 hover:text-white hover:border-red-600'
                                                    : 'bg-neutral-900 text-white border-neutral-900 hover:bg-red-600 hover:text-white hover:border-red-600'
                                            }`}
                                        >
                                            <ExternalLink size={16} />
                                            <span className="text-sm font-medium">Demo</span>
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                                        isDark ? 'text-neutral-400' : 'text-neutral-500'
                                    }`}>
                                        Tech Stack
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, index) => {
                                            const icon = getIconPath(tech);
                                            return (
                                                <div
                                                    key={index}
                                                    title={tech}
                                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors duration-200 ${
                                                        isDark
                                                            ? 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-red-500 hover:text-white'
                                                            : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:border-red-500 hover:text-black'
                                                    }`}
                                                >
                                                    {icon && (
                                                        <img
                                                            src={icon}
                                                            alt={tech}
                                                            className="w-4 h-4 object-contain"
                                                        />
                                                    )}
                                                    {tech}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AllProjectsPage;
