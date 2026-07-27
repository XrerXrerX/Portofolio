/** @format */

"use client";
import React from "react";
import { SKILL_ROWS, type Skill } from "./skills-data";

type Props = {};

// The strip translates by exactly 1/COPIES of its width, so the loop is
// seamless at any breakpoint. COPIES must be high enough that the remaining
// (COPIES-1)/COPIES of the strip always covers the viewport.
const COPIES = 3;
const SHIFT = `-${100 / COPIES}%`;

// Indexed modulo the row count, so adding or removing a row can never read
// past the end and leave a row with no duration.
const DURATIONS = [46, 58, 52, 64];

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    /* The gap lives inside each item (pr-5) rather than on the container, so
       every item is exactly the same width and the percentage shift is exact. */
    <div className="shrink-0 pr-5">
      <div
        tabIndex={0}
        aria-label={skill.level ? `${skill.name}, ${skill.level}%` : skill.name}
        /* Named group: the row is also a group, and a bare `group-hover:`
           matches ANY ancestor group — so hovering the row would grey out
           every badge in it at once. */
        className="group/badge relative flex h-16 w-16 items-center justify-center rounded-full border border-secondary-light bg-secondary outline-none transition-shadow duration-500 hover:shadow-neon focus-visible:ring-2 focus-visible:ring-accent sm:h-20 sm:w-20 lg:h-24 lg:w-24"
      >
        {skill.img ? (
          /* Full colour at rest; desaturates on hover so the overlay reads. */
          <img
            src={skill.img}
            alt=""
            loading="lazy"
            className="h-full w-full rounded-full object-cover transition duration-500 group-hover/badge:grayscale group-focus/badge:grayscale"
          />
        ) : (
          <span className="px-1 text-center text-[10px] font-semibold uppercase tracking-wide text-accent transition-colors duration-500 group-hover/badge:text-content-subtle sm:text-xs">
            {skill.short}
          </span>
        )}

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-0.5 rounded-full bg-secondary-dark/90 px-1.5 text-center opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover/badge:opacity-100 group-focus/badge:opacity-100">
          <p className="text-[9px] font-semibold leading-tight text-content sm:text-[10px]">
            {skill.name}
          </p>
          {skill.level && (
            <p className="text-xs font-bold text-accent sm:text-sm">
              {skill.level}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  skills,
  duration,
  reverse,
}: {
  skills: Skill[];
  duration: number;
  reverse: boolean;
}) {
  const strip = Array.from({ length: COPIES }, () => skills).flat();

  return (
    /* A CSS animation rather than a framer one, so hovering can pause it —
       otherwise badges slide out from under the cursor and the hover detail,
       which is the whole point of this section, is impossible to read.
       Reduced motion stops it outright and hands over manual scrolling. */
    <div className="marquee-fade group flex w-full overflow-hidden motion-reduce:overflow-x-auto">
      <div
        style={
          {
            animationDuration: `${duration}s`,
            "--marquee-shift": SHIFT,
          } as React.CSSProperties
        }
        className={`flex ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        } group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {strip.map((skill, i) => (
          <SkillBadge key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills({}: Props) {
  return (
    /* pt-28 clears the `sticky top-5` header. */
    <div className="min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-14">
      <h3 className="uppercase tracking-[10px] sm:tracking-[16px] lg:tracking-[20px] text-accent text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-center">
        Skills
      </h3>
      <p className="mt-3 px-4 text-xs sm:text-sm text-content-muted text-center">
        Hover a skill to see its details
      </p>

      {/* Padding lives on this wrapper, not on the rows: `overflow-hidden`
          clips at the padding box, so padding on the row itself would still
          let badges show through the gutter. */}
      <div className="mt-8 flex w-full flex-col gap-5 px-4 sm:gap-6 sm:px-8 lg:px-12">
        {SKILL_ROWS.map((row, i) => (
          <MarqueeRow
            key={i}
            skills={row}
            duration={DURATIONS[i % DURATIONS.length]}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
