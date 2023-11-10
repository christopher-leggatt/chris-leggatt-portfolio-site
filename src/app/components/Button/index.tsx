import {
  Button as ChakraButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ButtonType } from "@/app/lib/types";
import { ReactNode } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

type Props = {
  buttonType: ButtonType;
  onButtonClick: Function;
  children: ReactNode;
};

const Button: React.FC<Props> = ({ buttonType, onButtonClick, children }) => {
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
      onClick={() => onButtonClick()}
      px={6}
      py={1.5}
      fontSize="md"
      fontWeight="semibold"
      borderRadius="full"
      bg={backgroundColor}
      color={color}
      _hover={{ bg: hoverBg }}
      rightIcon={<ArrowForwardIcon />}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
