"use client";
import { useEffect, ReactNode } from "react";

type ScrollSpyWrapperProps = {
  sectionIds: string[];
  children: ReactNode;
};

function useScrollSpy(ids: string[]) {
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            if (window.location.hash !== `#${ids[i]}`) {
              window.history.replaceState(null, "", `#${ids[i]}`);
            }
            found = true;
            break;
          }
        }
      }
      if (!found && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids]);
}

export default function ScrollSpyWrapper({
  sectionIds,
  children,
}: ScrollSpyWrapperProps) {
  useScrollSpy(sectionIds);
  return <>{children}</>;
}
