import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

export interface Project {
  title: string;
  category: string;
  image: string;
  color: string;
  size: string;
  description: string;
  technologies: string[];
  scope: string;
}

const projects: Project[] = [
  {
    title: 'Future Vision',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80',
    color: 'from-purple-600 to-blue-600',
    size: 'large',
    description: 'A comprehensive brand identity project for a forward-thinking tech company, focusing on innovative visual elements and future-proof design systems.',
    technologies: ['Figma', 'Illustrator', 'After Effects', 'Photoshop'],
    scope: 'Complete brand identity including logo design, typography, color palette, and brand guidelines.'
  },
  {
    title: 'Urban Pulse',
    category: 'Digital Campaign',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80',
    color: 'from-blue-600 to-cyan-600',
    size: 'small',
    description: 'An engaging digital campaign that captured the essence of urban lifestyle and culture through dynamic content and strategic social media presence.',
    technologies: ['Social Media', 'Content Strategy', 'Video Production', 'Analytics'],
    scope: 'Multi-platform digital campaign including social media strategy, content creation, and performance tracking.'
  },
  {
    title: 'Eco Future',
    category: 'Website Design',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    color: 'from-cyan-600 to-teal-600',
    size: 'medium',
    description: 'A sustainable technology website showcasing eco-friendly innovations and green tech solutions with an emphasis on user experience.',
    technologies: ['React', 'Tailwind CSS', 'Three.js', 'Green Hosting'],
    scope: 'Full website design and development with interactive 3D elements and sustainable hosting solutions.'
  },
  {
    title: 'Tech Innovate',
    category: 'Product Launch',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    color: 'from-teal-600 to-green-600',
    size: 'small',
    description: 'A successful product launch campaign for an innovative tech gadget, including digital presence and marketing materials.',
    technologies: ['Product Design', 'Marketing', 'UI/UX', 'Motion Graphics'],
    scope: 'End-to-end product launch strategy including marketing materials, website, and launch event coordination.'
  },
  {
    title: 'Creative Flow',
    category: 'Art Direction',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
    color: 'from-red-600 to-orange-600',
    size: 'medium',
    description: 'Art direction for a creative agency\'s digital presence, focusing on unique visual storytelling and brand narrative.',
    technologies: ['Photography', 'Typography', 'Creative Direction', 'Brand Strategy'],
    scope: 'Complete art direction including photoshoots, typography selection, and visual storytelling guidelines.'
  },
  {
    title: 'Digital Dreams',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    color: 'from-orange-600 to-yellow-600',
    size: 'large',
    description: 'A cutting-edge UI/UX design project for a digital platform, emphasizing user experience and modern design principles.',
    technologies: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    scope: 'Comprehensive UI/UX design including user research, wireframing, prototyping, and final design implementation.'
  }
];

const getSizeClass = (size: string) => {
  switch (size) {
    case 'large':
      return 'h-[600px]';
    case 'medium':
      return 'h-[400px]';
    case 'small':
      return 'h-[300px]';
    default:
      return 'h-[400px]';
  }
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.215, 0.610, 0.355, 1.000]
    }
  }),
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="work" className="py-32 dark:bg-black bg-white dark:text-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Transforming visions into digital masterpieces
          </p>
        </motion.div>

        <div className="masonry">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
              variants={projectVariants}
              className={`group relative w-full ${getSizeClass(project.size)} mb-6 overflow-hidden rounded-2xl cursor-pointer`}
            >
              <div className="absolute inset-0 dark:bg-black/60 bg-black/40 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-40" />
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-multiply group-hover:opacity-40 transition-opacity duration-300`} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm font-medium text-white/80 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full"
                  >
                    {project.category}
                  </motion.span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg
                      opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="transform group-hover:-translate-y-2 transition-transform duration-300"
                >
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="h-1 w-12 bg-white rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}