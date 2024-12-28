import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const { theme } = useTheme();
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    const handleElementMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.matches('a, button, [role="button"], input, select, textarea') ||
        target.closest('a, button, [role="button"], input, select, textarea');
      setIsPointer(!!isInteractive);
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementMouseEnter);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[100] will-change-transform"
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className={`relative w-8 h-8 rounded-full ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20' 
              : 'bg-gradient-to-r from-purple-500/10 to-pink-500/10'
          }`}
        >
          <motion.div
            className={`absolute inset-0 rounded-full ${
              theme === 'dark'
                ? 'border border-white/20'
                : 'border border-black/20'
            }`}
            animate={{
              scale: isPointer ? [0.8, 1.2, 0.8] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[101] will-change-transform"
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 0.5 : 1,
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className={`w-1.5 h-1.5 rounded-full ${
            theme === 'dark' ? 'bg-white' : 'bg-black'
          }`}
        />
      </motion.div>
    </>
  );
}