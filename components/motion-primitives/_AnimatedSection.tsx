'use client'
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({ children, delay=1 }: { children: ReactNode; delay?:number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}