import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { Project } from './Work';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEscape);
      };
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-white dark:bg-black/90 rounded-2xl overflow-hidden"
        >
          <div className="relative h-64 md:h-80">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-multiply`} />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm 
              flex items-center justify-center focus-ring"
          >
            <X className="w-5 h-5 text-white" />
          </motion.button>

          <div className="p-8 overflow-y-auto max-h-[60vh] custom-scrollbar">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium dark:bg-white/10 
              bg-black/10 dark:text-white/80 text-black/80 mb-4">
              {project.category}
            </span>
            <h3 className="text-3xl font-bold dark:text-white text-black mb-4">{project.title}</h3>
            <p className="dark:text-gray-400 text-gray-600 mb-6">
              {project.description}
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium dark:text-white text-black mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm dark:bg-white/5 bg-black/5 
                        dark:text-white/70 text-black/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium dark:text-white text-black mb-2">Project Scope</h4>
                <p className="dark:text-gray-400 text-gray-600">{project.scope}</p>
              </div>
            </div>
          </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}