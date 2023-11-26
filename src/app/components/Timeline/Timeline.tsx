'use client';

import { ReactNode } from "react";
import { TimelineBullet } from "../icons/TimelineBullet";
import { TimelineItemProps } from "@/app/interfaces";

export const TimelineList = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  meta,
  link = null,
  meta_small,
  content,
}) => {
  return (
    <article className="relative grid md:grid-cols-5 md:gap-10 before:content-[''] mx-12 before:block before:h-full before:absolute before:left-[-25px] md:before:left-[-37px] before:border-l-2 before:border-gray-300 dark:before:border-gray-700 md:space-x-4 pb-12">
      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-28">
          <h3 className="p-0 m-0">{title}</h3>
          <TimelineBullet />
          {link ? (
            <a className="p-0 m-0" href={link}>
              {meta}
            </a>
          ) : (
            <p className="p-0 m-0">{meta}</p>
          )}
          <p className="p-0 m-0 text-sm text-gray-500">{meta_small}</p>
        </div>
      </div>
      <div
        className="relative pb-4 -mt-6 md:border-b md:border-gray-300 md:dark:border-gray-400 md:col-span-3"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
};
