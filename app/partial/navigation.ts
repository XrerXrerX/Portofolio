/** @format */

"use client";

import { useEffect, useState } from "react";

/** Single source of truth for in-page navigation. */
export const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contactme", label: "Contact" },
] as const;

export const SCROLL_CONTAINER_ID = "scroll-container";

/**
 * Scrolls a section into view without a hash jump, so navigation feels like an
 * SPA rather than a document jump. The hash is still written to the URL via
 * replaceState so links stay shareable and the back button is untouched.
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  el.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });

  window.history.replaceState(null, "", `#${id}`);
}

/**
 * Returns the id of the section currently filling most of the scroll
 * container. Ratios are tracked in a map because an IntersectionObserver
 * callback only reports the entries that *changed* — deciding from that slice
 * alone would pick the wrong section whenever a neighbour is more visible.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");
  const key = ids.join(",");

  useEffect(() => {
    const root = document.getElementById(SCROLL_CONTAINER_ID);
    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        }

        let best = "";
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });

        if (best) setActive(best);
      },
      { root, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
