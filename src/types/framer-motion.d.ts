declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
  
  // Add more types as needed
  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    [key: string]: any;
  }
} 