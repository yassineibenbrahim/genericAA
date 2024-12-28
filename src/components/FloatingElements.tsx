import { motion, useMotionValue } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const elements = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: Math.random() * 60 + 20,
  initialX: Math.random() * 100,
  initialY: Math.random() * 100,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 2,
}));

export default function FloatingElements() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { theme } = useTheme();

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <div 
      className="fixed inset-0 overflow-hidden z-0"
      onMouseMove={handleMouseMove}
    >
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full blur-xl opacity-30 mix-blend-screen
            ${theme === 'dark' 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
              : 'bg-gradient-to-r from-purple-300 to-pink-300'}`}
          style={{
            width: element.size,
            height: element.size,
            left: `${element.initialX}%`,
            top: `${element.initialY}%`,
          }}
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          whileHover={{ scale: 1.5 }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        />
      ))}
    </div>
  );
}