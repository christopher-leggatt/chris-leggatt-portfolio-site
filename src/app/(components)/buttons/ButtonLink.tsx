import { ReactNode } from "react";

interface ButtonLinkProps {
  buttonType: ButtonType;
  href: string;
  children?: ReactNode;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  buttonType,
  href,
  children,
}) => {
  return (
    <a
      className={`no-underline mt-12 group inline-flex items-center rounded-full px-6 py-1.5 font-semibold transition ${
        buttonType === ButtonType.PRIMARY
          ? "bg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700"
          : buttonType === ButtonType.SECONDARY
          ? "text-midnight dark:text-white"
          : null
      }`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ButtonLink;
