import { Button as ChakraButton, useColorModeValue } from "@chakra-ui/react";
import { ButtonType } from "@/app/lib/types";
import { ReactNode } from "react";

type Props = {
  buttonType: ButtonType;
  onButtonClick: () => void;
  children: ReactNode;
};

const Button: React.FC<Props> = ({
  buttonType,
  onButtonClick,
  children,
}) => {
  const backgroundColor = useColorModeValue(
    buttonType === ButtonType.PRIMARY ? "midnight" : "transparent",
    buttonType === ButtonType.SECONDARY ? "gray.200" : "transparent"
  );
  const color = useColorModeValue(
    buttonType === ButtonType.PRIMARY ? "white" : "midnight",
    buttonType === ButtonType.SECONDARY ? "midnight" : "white"
  );
  const hoverBg = useColorModeValue(
    buttonType === ButtonType.PRIMARY ? "slate.700" : undefined,
    buttonType === ButtonType.SECONDARY ? undefined : undefined
  );
  const svgStroke = useColorModeValue(
    buttonType === ButtonType.PRIMARY ? "white" : "midnight",
    buttonType === ButtonType.SECONDARY ? "midnight" : "white"
  );

  return (
    <ChakraButton
      aria-label="button"
      onClick={onButtonClick}
      px={6}
      py={1.5}
      fontSize="md"
      fontWeight="semibold"
      borderRadius="full"
      bg={backgroundColor}
      color={color}
      _hover={{ bg: hoverBg }}
    >
      {children}
      <svg
        fill="none"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        aria-hidden="true"
        style={{
          marginTop: "2px",
          marginLeft: "8px",
          marginRight: "-4px",
          strokeWidth: "2",
          stroke: svgStroke,
        }}
      >
        <path
          className="transition-opacity opacity-0 group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="transition-transform group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        ></path>
      </svg>
    </ChakraButton>
  );
};

export default Button;