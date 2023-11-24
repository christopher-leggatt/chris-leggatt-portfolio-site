"use client";
import { AnimatedLinkProps } from "@/app/types";
import useAnimatedRouter from "@/hooks/useAnimatedRouter";
import Link from "next/link";
import React from "react";


export default function AnimatedLink({ href, children }: AnimatedLinkProps) {
  const { animatedRoute } = useAnimatedRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        animatedRoute(href);
      }}
      passHref
    >
      {children}
    </Link>
  );
}