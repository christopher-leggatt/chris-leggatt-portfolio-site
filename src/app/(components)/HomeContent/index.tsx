"use client";
import Button from "../buttons/Button";
import { useRouter } from "next/navigation";
import Image from "next/legacy/image";
import { customMetadata } from "@/app/data/metadata";
import { ButtonType } from "@/enums";

const HomeContent = () => {
  const { push } = useRouter();

  return (
    <div>
      <div>
        <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
          <h1 className="order-2 col-span-5 md:text-3xl leading-tight md:leading-normal md:order-1 sm:text-4xl">
            I&apos;m{" "}
            <span className="text-teal-500 dark:text-teal-400">Chris</span>. a
            dedicated and passionate software engineer, with a background in
            quality control.{" "}
          </h1>
          <div className="order-1 md:order-2">
            <Image
              alt="Chris Leggatt"
              height={160}
              width={160}
              src={customMetadata.avatarUrl}
              placeholder="blur"
              blurDataURL={customMetadata.avatarUrl}
              className="col-span-1 rounded-full"
              // Debug
              layout="fixed"
              // Debug
            />
          </div>
        </div>
        <div className="space-y-6 text-center md:text-left md:space-y-0 md:space-x-4">
          <Button
            buttonType={ButtonType.PRIMARY}
            onButtonClick={() => push("/blog")}
          >
            My resume
          </Button>
          <Button
            buttonType={ButtonType.SECONDARY}
            onButtonClick={() => push("/about")}
          >
            More about me
          </Button>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="my-18 w-full h-12"></div>
    </div>
  );
};

export default HomeContent;
