import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, ArrowLeft, X } from 'lucide-react';
import { certificates } from '../constants/certificates';

const AllCertificatesPage = ({ isDark }) => {
    const navigate = useNavigate();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);

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

    const handleBackToCertificates = () => {
        navigate('/');

        setTimeout(() => {
            const section = document.getElementById('certificates');
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
                        onClick={handleBackToCertificates}
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
                        <Award
                            size={30}                 
                        />
                        <h1
                            className={`text-3xl md:text-4xl font-bold tracking-tight ${
                                isDark ? 'text-white' : 'text-neutral-900'
                            }`}
                        >
                            All Certificates
                        </h1>
                    </div>
                    <p
                        className={`text-base ${
                            isDark ? 'text-neutral-400' : 'text-neutral-600'
                        }`}
                    >
                        Complete collection of my academic & professional certifications
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert) => (
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
                                    className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border transition-all duration-300 ${
                                        isDark
                                            ? 'bg-neutral-800 text-neutral-200 border-neutral-700 hover:bg-red-600 hover:text-white hover:border-red-600'
                                            : 'bg-neutral-900 text-white border-neutral-900 hover:bg-red-600 hover:text-white hover:border-red-600'
                                    }`}
                                >
                                    <ExternalLink size={14} />
                                    <span className="text-xs font-semibold">Verify Credential</span>
                                </motion.a>
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

export default AllCertificatesPage;