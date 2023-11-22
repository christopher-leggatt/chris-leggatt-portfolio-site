import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { transitionVariants } from "./TransitionVariants";

const PageTransition = ({ children }: { children: ReactNode }): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <>{children}</>;
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        initial="initial"
        animate="enter"
        variants={transitionVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
