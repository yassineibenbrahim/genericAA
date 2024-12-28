import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'
];

const getImagesForSlide = (index: number, isMobile: boolean) => {
  if (isMobile) {
    return [images[index]];
  } else {
    const start = index * 3;
    return images.slice(start, start + 3);
  }
};

const totalSlides = Math.ceil(images.length / 3);

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = totalSlides - 1;
      if (nextIndex >= totalSlides) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div id="gallery" className="relative h-[300px] md:h-[400px] lg:h-[500px] my-20 px-16">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-4 px-4 w-full will-change-transform">
          {(isMobile ? [images[currentIndex]] : getImagesForSlide(currentIndex, false)).map((image, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden h-full">
              <img
                src={image}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                fetchpriority={idx === 0 ? "high" : "low"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: isMobile ? images.length : totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      <button
        className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 z-20
          backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors
          focus-ring"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 z-20
          backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors
          focus-ring"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}