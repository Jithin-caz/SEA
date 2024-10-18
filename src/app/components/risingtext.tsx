'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface RiseUpTextProps {
  children: ReactNode;
}

const RiseUpText: React.FC<RiseUpTextProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start the animation when 20% of the element is in the viewport
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    
    >
      {children}
    </motion.div>
  );
};

export default RiseUpText;
