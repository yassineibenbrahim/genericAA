import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000]
    }
  }
};

const inputVariants = {
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="contact" className="py-32 dark:bg-black bg-white dark:text-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Together</h2>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's start a conversation.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <motion.input
                  whileFocus="focus"
                  variants={inputVariants}
                  className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 
                    rounded-lg px-4 py-3 dark:text-white text-black dark:placeholder-gray-500 placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus-visible:ring-offset-2
                    dark:focus-visible:ring-offset-black focus-visible:ring-offset-white
                    transition-all duration-300 focus-ring"
                  type="text"
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <motion.input
                  whileFocus="focus"
                  variants={inputVariants}
                  className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 
                    rounded-lg px-4 py-3 dark:text-white text-black dark:placeholder-gray-500 placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus-visible:ring-offset-2
                    dark:focus-visible:ring-offset-black focus-visible:ring-offset-white
                    transition-all duration-300 focus-ring"
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <motion.textarea
                whileFocus="focus"
                variants={inputVariants}
                className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 
                  rounded-lg px-4 py-3 dark:text-white text-black dark:placeholder-gray-500 placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus-visible:ring-offset-2
                  dark:focus-visible:ring-offset-black focus-visible:ring-offset-white
                  transition-all duration-300 focus-ring custom-scrollbar"
                id="message"
                rows={6}
                placeholder="Tell us about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ boxShadow: "0 0 0 rgba(147, 51, 234, 0)" }}
              whileHover={{ 
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                scale: 1.02
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-8 py-4
                flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-pink-700 
                transition-all duration-300"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}