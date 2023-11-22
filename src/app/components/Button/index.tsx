import { ReactNode } from "react";
import ArrowForward from "@/app/components/icons/ArrowForward";
import React from "react";
import { ButtonProps } from "@/app/interfaces";

const Button: React.FC<ButtonProps> = ({
  buttonType,
  onButtonClick,
  children,
}) => {
  return (
    <button
      aria-label="button"
      type="button"
      className={`group inline-flex items-center rounded-full px-6 py-1.5 font-semibold transition ${
        buttonType === ButtonType.PRIMARY
          ? "bg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700"
          : buttonType === ButtonType.SECONDARY
          ? "text-midnight dark:text-white"
          : null
      }`}
      onClick={() => onButtonClick()}
    >
      {children}
    </button>
  );
};

export default Button;
