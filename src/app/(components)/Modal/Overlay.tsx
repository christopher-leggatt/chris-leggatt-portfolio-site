"use client";
import { motion } from "framer-motion";
import { ReactNode, MouseEventHandler } from "react";

interface OverlayProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Overlay: React.FC<OverlayProps> = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen backdrop-brightness-50 z-30 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
