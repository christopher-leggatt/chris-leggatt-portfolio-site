'use client'
import { motion, useReducedMotion } from "framer-motion";
import { TemplateProps } from "./interfaces";

const transitionVariants = {
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
// Debug
// const Template = ({ children }: { children: ReactNode }): JSX.Element => {
const Template: React.FC<TemplateProps> = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <>{children}</>;
  return (
    // <AnimatePresence mode={"wait"}>
      <motion.div
        initial="initial"
        animate="enter"
        variants={transitionVariants}
      >
        {children}
      </motion.div>
    // </AnimatePresence>
  );
};

export default Template;
