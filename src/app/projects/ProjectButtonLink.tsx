import ArrowForwardAnimated from "@/app/(components)/icons/ArrowForwardAnimated";
import { ButtonType } from "@/types/enums";

type ProjectButtonLinkProps = {
  text: string;
  href: string;
  buttonType: ButtonType;
};

const ProjectButtonLink: React.FC<ProjectButtonLinkProps> = ({
  text,
  href,
  buttonType,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`no-underline mt-12 group inline-flex items-center rounded-full px-6 py-1.5 font-semibold transition ${
        buttonType === ButtonType.PRIMARY
          ? "bg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700"
          : buttonType === ButtonType.SECONDARY
          ? "text-midnight dark:text-white"
          : null
      }`}
    >
      {text}
      <ArrowForwardAnimated buttonType={buttonType}/>
    </a>
  );
};

export default ProjectButtonLink;
