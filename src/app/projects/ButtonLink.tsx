import { Link, Icon, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

type ButtonLinkProps = {
  text: string;
  href: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      isExternal
      display="inline-flex"
      alignItems="center"
      borderRadius="full"
      px="6"
      py="1.5"
      fontWeight="semibold"
      bg="midnight"
      color="white"
      _dark={{ bg: "gray.200", color: "midnight" }}
      _hover={{ bg: "slate.700" }}
      textDecoration="none"
    >
      <Text>{text}</Text>
      <Icon as={ExternalLinkIcon} ml={2} w={4} h={4} />
    </Link>
  );
};

export default ButtonLink;
