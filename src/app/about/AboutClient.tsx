"use client";
import { useRouter } from "next/navigation";
import Button from "@/app/(components)/buttons/Button";
import { ButtonType } from "../enums";
import { TimelineItem, TimelineList } from "../(components)/Timeline/Timeline";


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

// export const ExperienceSection = async () => {
//   const experience = await getExperience();

//   if (!experience) {
//     return null;
//   }

//   return (
//     <TimelineList>
//       {experience.map((item, index) => (
//         <TimelineItem
//           key={index}
//           title={item.title}
//           meta={item.company}
//           link={item.company_url}
//           meta_small={item.duration}
//           content={item.description}
//         />
//       ))}
//     </TimelineList>
//   );
// };
