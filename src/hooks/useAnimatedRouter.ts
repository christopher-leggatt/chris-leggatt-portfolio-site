"use client";
    import { ExtendedDocument } from "@/app/interfaces";
    import { useRouter } from "next/navigation";

    export default function useAnimatedRouter() {
      const router = useRouter();
      const viewTransitionsStatus = () => {
        const extendedDocument = document as ExtendedDocument;
        let status = "Oops, Your browser doesn't support View Transitions API";
        if (extendedDocument?.startViewTransition) {
          status = "Your browser support View Transitions API! Yay!";
        }
        return status;
      };
      // Navigate to the new route
      const animatedRoute = (url: string) => {
        const extendedDocument = document as ExtendedDocument;
        if (!extendedDocument.startViewTransition) {
          return router.push(url);
        } else {
          extendedDocument.startViewTransition(() => {
            router.push(url);
          });
        }
      };
      return { animatedRoute, viewTransitionsStatus };
    }