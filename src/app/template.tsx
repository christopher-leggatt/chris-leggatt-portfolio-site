"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

export default function RootTemplate({ children }: { children: ReactNode }) {
  return (
    <motion.div initial="initial" animate="enter" variants={variants}>
      {children}
    </motion.div>
  );
};
