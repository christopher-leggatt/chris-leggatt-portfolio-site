import ArrowForwardAnimated from "@/app/(components)/icons/ArrowForwardAnimated";

type ProjectButtonLinkProps = {
  text: string;
  href: string;
};

const ProjectButtonLink: React.FC<ProjectButtonLinkProps> = ({
  text,
  href,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center rounded-full px-6 py-1.5 font-semibold transitionbg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700 bg-midnight no-underline`}
    >
      {text}
      <ArrowForwardAnimated />
    </a>
  );
};

export default ProjectButtonLink;
