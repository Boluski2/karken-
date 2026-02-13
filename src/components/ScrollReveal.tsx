import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getInitialVariant = () => {
    const base = { opacity: 0 };
    switch (direction) {
      case 'left':
        return { ...base, x: -50 };
      case 'right':
        return { ...base, x: 50 };
      case 'down':
        return { ...base, y: -50 };
      case 'up':
      default:
        return { ...base, y: 50 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialVariant()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitialVariant()}
      transition={{
        duration: 0.6,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
