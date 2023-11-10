import { Icon } from "@chakra-ui/react";

const Divider = () => {
  return (
    <Icon viewBox="0 0 47.5 47.5" id="wavy">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 47.5 47.5"
      >
        <defs>
          <clipPath id="a">
            <path d="M0 38h38V0H0v38Z"></path>
          </clipPath>
        </defs>
        <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
          <path
            fill="currentColor"
            d="M0 0c-2.589 0-4.005 2.549-5.374 5.014C-6.463 6.974-7.589 9-9 9c-1.412 0-2.537-2.026-3.626-3.986C-13.996 2.549-15.412 0-18 0c-2.65 0-3.853 2.706-4.914 5.094C-23.962 7.454-24.744 9-26 9a1 1 0 0 0 0 2c2.65 0 3.853-2.706 4.914-5.094C-20.038 3.547-19.256 2-18 2c1.412 0 2.537 2.026 3.626 3.986C-13.004 8.451-11.588 11-9 11c2.589 0 4.005-2.549 5.374-5.014C-2.537 4.026-1.411 2 0 2c1.256 0 2.037 1.547 3.086 3.906C4.147 8.294 5.351 11 8 11a1 1 0 1 0 0-2C6.744 9 5.963 7.454 4.914 5.094 3.853 2.706 2.649 0 0 0"
            transform="translate(28 14)"
          ></path>
        </g>
      </svg>
      ;
    </Icon>
  );
};

export default Divider;
