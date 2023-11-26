'use client'
import React, { useCallback, useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { usePlausible } from "next-plausible";
import { PopoverLinkProps } from "@/app/interfaces";

const PopoverLink: React.FC<PopoverLinkProps> = ({ children, href }) => {
  const [imagePreview, setImagePreview] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  let inImagePreview = false;
  let inLink = false;
  const plausible = usePlausible();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  let handleMouseEnterImage = () => {
    inImagePreview = true;
    setIsHovering(true);
  };

  let handleMouseLeaveImage = () => {
    inImagePreview = false;
    setIsHovering(inLink);
  };

  let handleMouseEnterLink = () => {
    inLink = true;
    setIsHovering(true);
  };

  let handleMouseLeaveLink = () => {
    inLink = false;
    setIsHovering(inImagePreview);
  };

  const handleFetchImage = useCallback(
    async (url: string) => {
      const res = await fetch(`${origin}/api/link-preview?url=${url}`);
      const data = await res.json();
      setImagePreview(data.image);
      plausible("Link Preview");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [origin]
  );

  useEffect(() => {
    handleFetchImage(href);
    return () => setImagePreview("");
  }, [href, handleFetchImage]);

  return (
    <span>
      <span className="relative z-10 hidden md:inline-block">
        <NextLink
          href={href}
          className={`${isHovering && "underline"}`}
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
          onFocus={handleMouseEnterLink}
          onBlur={handleMouseLeaveLink}
        >
          {children}
        </NextLink>
        {isHovering && (
          <NextLink href={href} passHref>
            <span
              className="w-56 h-44 absolute top-[-195px] left-1/2 transform -translate-x-[7rem] translate-y-8 flex items-start justify-center"
              onMouseLeave={handleMouseLeaveImage}
              onMouseEnter={handleMouseEnterImage}
              onFocus={handleMouseEnterImage}
              onBlur={handleMouseLeaveImage}
            >
              {imagePreview ? (
                <Image
                  fill
                  className="object-cover object-top w-56 h-40 bg-white rounded-md shadow-lg hover:ring-4 hover:ring-emerald-400"
                  src={imagePreview}
                  alt={children}
                />
              ) : (
                <span className="flex items-center justify-center w-56 h-40 bg-white rounded-md shadow-lg text-slate-800">
                  Loading...
                </span>
              )}
            </span>
          </NextLink>
        )}
      </span>
      <a
        href={href}
        className={`${isHovering && "underline"} md:hidden`}
        onMouseEnter={handleMouseEnterLink}
        onMouseLeave={handleMouseLeaveLink}
        onFocus={handleMouseEnterLink}
        onBlur={handleMouseLeaveLink}
      >
        {children}
      </a>
    </span>
  );
};

export default PopoverLink;
