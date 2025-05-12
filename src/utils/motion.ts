import dynamic from 'next/dynamic';

// Lazy load Framer Motion components with suspended loading
export const MotionDiv = dynamic(() => 
  import('framer-motion').then(mod => mod.motion.div), 
  { ssr: false }
);

export const MotionButton = dynamic(() => 
  import('framer-motion').then(mod => mod.motion.button), 
  { ssr: false }
);

export const MotionImage = dynamic(() => 
  import('framer-motion').then(mod => mod.motion.img), 
  { ssr: false }
);

export const MotionSection = dynamic(() => 
  import('framer-motion').then(mod => mod.motion.section), 
  { ssr: false }
);

export const AnimatePresence = dynamic(() => 
  import('framer-motion').then(mod => mod.AnimatePresence), 
  { ssr: false }
);

// Common animation variants to reuse
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Use these staggered children animations for lists
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Default transition settings for smooth animations
export const defaultTransition = {
  type: 'tween',
  duration: 0.5,
  ease: 'easeInOut',
}; 