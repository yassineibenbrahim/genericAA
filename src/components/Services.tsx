import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Globe, Megaphone, Code, Sparkles, Camera } from 'lucide-react';
import Gallery from './Gallery';

const services = [
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Crafting distinctive visual identities that leave lasting impressions.',
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Data-driven approaches that transform digital presence into market leadership.',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Camera,
    title: 'Content Creation',
    description: 'Compelling storytelling through stunning visuals and engaging narratives.',
    gradient: 'from-cyan-600 to-teal-600'
  },
  {
    icon: Megaphone,
    title: 'Social Impact',
    description: 'Amplifying your message across platforms to reach and engage your audience.',
    gradient: 'from-teal-600 to-green-600'
  },
  {
    icon: Sparkles,
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful interfaces that users love to interact with.',
    gradient: 'from-green-600 to-yellow-600'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Building robust digital solutions that power modern businesses.',
    gradient: 'from-yellow-600 to-red-600'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.215, 0.610, 0.355, 1.000]
    }
  }),
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="services" className="py-32 dark:bg-black bg-white dark:text-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions that transform ideas into impactful digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
              className="group relative p-8 rounded-2xl dark:bg-white/5 bg-black/5 backdrop-blur-sm dark:hover:bg-white/10 hover:bg-black/10 transition-all duration-300"
            >
              <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.gradient} p-4 
                transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.icon className="w-full h-full dark:text-white text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="dark:text-gray-400 text-gray-600 dark:group-hover:text-gray-300 group-hover:text-gray-900 transition-colors">
                {service.description}
              </p>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 
                group-hover:opacity-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mt-32 mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h2>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            A showcase of our creative projects and successful collaborations
          </p>
        </motion.div>

        <Gallery />
      </div>
    </section>
  );
}