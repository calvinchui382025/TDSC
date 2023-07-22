import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: JSX.Element;
}

export const SlideReveal = ({ children }: Props) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        layout // Use layout prop to preserve child component styles
        variants={{
          hidden: { opacity: 0, x: 75 }, // Slide from the right (positive x value)
          visible: { opacity: 1, x: 0 }, // Slide to the original position (0)
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
