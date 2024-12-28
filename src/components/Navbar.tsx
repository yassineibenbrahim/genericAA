import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-[90] backdrop-blur-lg border-b transition-colors duration-300 dark:bg-black/50 dark:border-white/10 bg-white/50 border-black/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            NOVA
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['Work', 'Services', 'Gallery', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative transition-colors dark:text-white/80 dark:hover:text-white text-black/80 
                  hover:text-black focus-ring rounded-lg px-3 py-2 outline-none"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              > 
                <span className="relative z-10">{item}</span>
                <motion.span
                  className="absolute inset-0 rounded-lg bg-purple-500/10 dark:bg-purple-500/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus-ring"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-black" />
              )}
            </motion.button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-colors dark:text-white/80 dark:hover:text-white text-black/80 hover:text-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden backdrop-blur-lg border-t transition-colors duration-300 dark:bg-black/90 dark:border-white/10 bg-white/90 border-black/10"
        >
          <div className="px-4 py-6 space-y-4">
            {['Work', 'Services', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block transition-colors dark:text-white/80 dark:hover:text-white text-black/80 hover:text-black"
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 transition-colors dark:text-white/80 dark:hover:text-white text-black/80 hover:text-black"
            >
              <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}