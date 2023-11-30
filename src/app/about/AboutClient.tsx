"use client";
import { useRouter } from "next/navigation";
import Button from "@/app/(components)/buttons/Button";
import { ButtonType } from "../enums";

export const ToolboxButton = () => {
  const { push } = useRouter();

  return (
    <Button
      buttonType={ButtonType.PRIMARY}
      onButtonClick={() => push("/toolbox")}
    >
      Check out my toolbox
    </Button>
  );
};