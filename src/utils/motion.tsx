'use client';

import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Motion components with proper typing
const FramerMotionDiv = dynamic(() => 
  import('framer-motion').then(mod => mod.motion.div), 
  { ssr: false }
);

const FramerMotionButton = dynamic(() => 
  import('framer-motion').then(mod => mod.motion.button), 
  { ssr: false }
);

const FramerMotionImage = dynamic(() => 
  import('framer-motion').then(mod => mod.motion.img), 
  { ssr: false }
);

const FramerMotionSection = dynamic(() => 
  import('framer-motion').then(mod => mod.motion.section), 
  { ssr: false }
);

const FramerAnimatePresence = dynamic(() => 
  import('framer-motion').then(mod => mod.AnimatePresence), 
  { ssr: false }
);

// React component wrappers to handle proper typing
export function MotionDiv({ children, ...rest }: any) {
  return <FramerMotionDiv {...rest}>{children}</FramerMotionDiv>;
}

export function MotionButton({ children, ...rest }: any) {
  return <FramerMotionButton {...rest}>{children}</FramerMotionButton>;
}

export function MotionImage({ ...rest }: any) {
  return <FramerMotionImage {...rest} />;
}

export function MotionSection({ children, ...rest }: any) {
  return <FramerMotionSection {...rest}>{children}</FramerMotionSection>;
}

export function AnimatePresence({ children, ...rest }: any) {
  return <FramerAnimatePresence {...rest}>{children}</FramerAnimatePresence>;
}

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