'use client';
import { motion } from 'motion/react';

export default function ScrollReveal({children}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:0.05, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}