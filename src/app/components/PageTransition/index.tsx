import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { transitionVariants } from './TransitionVariants';

const PageTransition = ({
  children
}: {
  children: ReactNode;
}): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <>{children}</>;
  return (
    <motion.div initial="initial" animate="enter" variants={transitionVariants}>
      {children}
    </motion.div>
  );
};

export default PageTransition;
