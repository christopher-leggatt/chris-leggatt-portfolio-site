import React from "react";

const ArrowForwardAnimated = () => {
  return (
    <svg
      className={`mt-0.5 ml-2 -mr-1 stroke-2 stroke-white dark:stroke-midnight`}
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

export default ArrowForwardAnimated;
