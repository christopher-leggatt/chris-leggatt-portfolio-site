import { ButtonType } from "@/types/enums";

const ArrowForward = ({ buttonType }: { buttonType: ButtonType }) => {
  return (
    <svg
      className={`mt-0.5 ml-2 -mr-1 stroke-2 ${
        buttonType === "primary"
          ? 'stroke-white dark:stroke-midnight'
          : 'stroke-midnight dark:stroke-white'
      }`}
      fill="none"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden="true"
    >
      <path
        className="transition opacity-0 group-hover:opacity-100"
        d="M0 5h7"
      ></path>
      <path
        className="transition group-hover:translate-x-[3px]"
        d="M1 1l4 4-4 4"
      ></path>
    </svg>
  );
};

export default ArrowForward;
