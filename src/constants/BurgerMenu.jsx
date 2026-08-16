import { motion, AnimatePresence } from 'framer-motion'
import { Home, Code2, Menu, X, User, FolderOpenDot, Award, Moon, Sun } from 'lucide-react'

export default function BurgerMenu({
  isDark,
  setIsDark,
  menuOpen,
  setMenuOpen,
  scrollToSection
}) {

  /* Container animation */
  const menuContainer = {
    hidden: {
      opacity: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 14,
        staggerChildren: 0.08
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  }

  /* Button animation */
  const menuItem = {
    hidden: {
      opacity: 0,
      y: -8,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 18
      }
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.9,
      transition: { duration: 0.15 }
    }
  }

  const menuItems = [
    { icon: Home, section: 'profile' },
    { icon: User, section: 'about' },
    { icon: Code2, section: 'skills' },
    { icon: FolderOpenDot, section: 'projects' },
    { icon: Award, section: 'certificates' }
  ]

  return (
    <>
      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center overflow-hidden transition-all shadow-md backdrop-blur-md ${
          isDark
            ? 'bg-neutral-900/90 border border-neutral-800 text-neutral-300 hover:text-red-500 hover:border-red-500/50 hover:bg-neutral-800'
            : 'bg-white/90 border border-neutral-200 text-neutral-700 hover:text-red-600 hover:border-red-500/50 hover:bg-neutral-50'
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? 'dark' : 'light'}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Burger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed top-20 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md backdrop-blur-md ${
          isDark
            ? 'bg-neutral-900/90 border border-neutral-800 text-neutral-300 hover:text-red-500 hover:border-red-500/50 hover:bg-neutral-800'
            : 'bg-white/90 border border-neutral-200 text-neutral-700 hover:text-red-600 hover:border-red-500/50 hover:bg-neutral-50'
        }`}
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </motion.button>

      {/* Smooth Vertical Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-[136px] right-6 z-40 flex flex-col items-center gap-3"
          >
            {menuItems.map(({ icon: Icon, section }) => (
              <motion.button
                key={section}
                variants={menuItem}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md backdrop-blur-md ${
                  isDark
                    ? 'bg-neutral-900/90 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-red-600 hover:border-red-600'
                    : 'bg-white/90 border border-neutral-200 text-neutral-700 hover:text-white hover:bg-red-600 hover:border-red-600'
                }`}
              >
                <Icon size={20} />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
