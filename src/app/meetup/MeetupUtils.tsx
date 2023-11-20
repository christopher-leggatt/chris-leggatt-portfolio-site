import { Checkbox, Link, Text, Flex } from "@chakra-ui/react";
import { MeetupItemProps } from "../interfaces";

export const MeetupItem: React.FC<MeetupItemProps> = ({ id, name, link, checked }) => {
  return (
    <Flex align="center" justify="start" gap={3}>
    <Checkbox id={id} name={id} isChecked={checked} isReadOnly />
    <Text>
      <Link href={link} isExternal>{name}</Link>
    </Text>
  </Flex>
  );
};
