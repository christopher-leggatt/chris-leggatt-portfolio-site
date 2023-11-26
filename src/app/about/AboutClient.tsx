"use client";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import { customMetadata } from "@/app/data/metadata";
import { ButtonType } from "../enums";

const AboutClient = () => {
  const router = useRouter();

  return (
    <div>
      <Button
        onButtonClick={() => router.push(customMetadata.resume)}
        buttonType={ButtonType.PRIMARY}
      >
        View my resume
      </Button>
      <Button
        buttonType={ButtonType.PRIMARY}
        onButtonClick={() => router.push("/toolbox")}
      >
        Check out my toolbox
      </Button>
    </div>
  );
};

export default AboutClient;
