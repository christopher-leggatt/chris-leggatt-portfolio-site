"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Overlay from "./Overlay";
import { useModal } from "@/contexts/ModalContext";
import { customMetadata } from "@/app/data/metadata";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = () => {
  const { closeModal } = useModal();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  return (
    <Overlay onClick={closeModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[clamp(50%,758px,90%)] h-[min(50%,426px)] m-auto flex flex-col items-center justify-center z-26 opacity-100"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <iframe
          className="w-full h-full border-0 bg-dark dark:bg-white"
          src={customMetadata.demoUrl}
          allowFullScreen
        ></iframe>
      </motion.div>
    </Overlay>
  );
};

export default Modal;
