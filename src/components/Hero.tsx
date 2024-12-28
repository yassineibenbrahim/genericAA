import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 1.2,
      type: "spring",
      stiffness: 50,
      ease: [0.215, 0.610, 0.355, 1.000], // Valid easing curve
    },
  }),
};

const backgroundVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 dark:bg-black bg-white"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-br dark:from-purple-900 dark:to-black from-purple-100 to-white" />
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="overflow-hidden"
          >
            <h1 className="text-5xl md:text-7xl font-bold dark:text-white text-black mb-8 leading-tight">
              We Create
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Digital Experiences
              </span>
              That Matter
            </h1>
          </motion.div>
          
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-2xl dark:text-gray-300 text-gray-600 mb-12 max-w-2xl"
          >
            Transforming brands through innovative design, cutting-edge technology, 
            and strategic thinking that drives real results.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-[2px] rounded-full"
            >
              <div className="dark:bg-black bg-white rounded-full px-8 py-4 transition group-hover:bg-transparent">
                <span className="flex items-center space-x-2 dark:text-white text-black group-hover:text-white">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative h-screen lg:h-auto"
        >
          <div className="relative w-full h-full max-w-[600px] mx-auto">
            <img
              src="https://storage.googleapis.com/msgsndr/NIUb0Xuq8DCUlSseHnZK/media/6769e3d8fb63bc3b84723c0e.jpeg"
              alt="Digital Experience"
              className="w-full h-full object-cover rounded-2xl shadow-2xl sticky top-0 will-change-transform"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-6 h-10 border-2 dark:border-white/30 border-black/30 rounded-full p-1 cursor-pointer"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 dark:bg-white bg-black rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}