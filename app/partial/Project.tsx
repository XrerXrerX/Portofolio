/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type Props = {};

type Project = {
  title: string;
  img: string;
  /** When set, the card becomes an external link. */
  url?: string;
};

/**
 * Order here is the order on screen. The displayed "Project N" is derived from
 * position rather than stored, and every image is named explicitly — the image
 * used to be inferred from the number (`/{id}.png`), so inserting a project
 * silently shifted every picture onto the wrong title.
 */
const PROJECTS: Project[] = [
  {
    title: "remohires.com",
    img: "/remohirescom.png",
    url: "https://remohires.com",
  },
  {
    title: "Lintas Inovasi Global",
    img: "/1.png",
    url: "https://lintasinovasiglobal.com/",
  },
  {
    title: "Bithtirrr Ratecard",
    img: "/9.png",
    url: "https://biqhtirrr.com/ratecard",
  },
  { title: "Cloud Solution AWS", img: "/3.png" },
  { title: "Monitoring Project", img: "/4.png" },
  { title: "Manage Cloud Server", img: "/5.png" },
  { title: "Customer Project", img: "/6.png" },
  { title: "Customer Project", img: "/7.png" },
  { title: "Cloud Infrastructure", img: "/8.png" },
  { title: "Server Monitoring", img: "/2.png" },
];

type NumberedProject = Project & { no: number };

const NUMBERED: NumberedProject[] = PROJECTS.map((p, i) => ({
  ...p,
  no: i + 1,
}));

const SPLIT = Math.ceil(NUMBERED.length / 2);
const TOP_PROJECTS = NUMBERED.slice(0, SPLIT);
const BOTTOM_PROJECTS = NUMBERED.slice(SPLIT);

// The marquee translates by exactly 1/COPIES of the strip so the loop is
// seamless at every breakpoint. COPIES must be high enough that the remaining
// (COPIES-1)/COPIES of the strip always covers the viewport.
const COPIES = 4;
const SHIFT = `-${100 / COPIES}%`;

const CARD_WIDTH =
  "w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]";

function repeat(projects: NumberedProject[]) {
  return Array.from({ length: COPIES }, () => projects).flat();
}

function CardBody({ project }: { project: NumberedProject }) {
  return (
    <>
      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        className="w-full h-48 object-cover rounded-xl border border-secondary-light shadow-lg transition-colors duration-500 group-hover/card:border-accent"
      />
      <div className="mt-4 text-center">
        <h4 className="text-lg font-semibold text-content">
          <span className="text-accent">Project {project.no}:</span>
          <br />
          <span className="inline-flex items-center gap-1.5">
            {project.title}
            {project.url && (
              <ArrowTopRightOnSquareIcon
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-accent"
              />
            )}
          </span>
        </h4>
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: NumberedProject }) {
  return (
    /* The gap lives inside each item (pr-8) instead of on the container, so
       every item is exactly the same width and the percentage shift is exact. */
    <div className="flex-shrink-0 pr-8">
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/card block rounded-xl outline-none transition-shadow duration-500 hover:shadow-neon focus-visible:ring-2 focus-visible:ring-accent ${CARD_WIDTH}`}
        >
          <CardBody project={project} />
        </a>
      ) : (
        <div className={CARD_WIDTH}>
          <CardBody project={project} />
        </div>
      )}
    </div>
  );
}

function MarqueeRow({
  projects,
  duration,
  reverse,
  align,
}: {
  projects: NumberedProject[];
  duration: number;
  reverse: boolean;
  align: string;
}) {
  return (
    /* Paused on hover: a card that keeps sliding out from under the cursor
       cannot realistically be clicked. Reduced motion stops it outright and
       hands over manual scrolling. */
    <div
      className={`marquee-fade group flex-1 flex ${align} overflow-hidden motion-reduce:overflow-x-auto`}
    >
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
        {repeat(projects).map((project, i) => (
          <ProjectCard key={`${project.no}-${i}`} project={project} />
        ))}
      </div>
    </div>
  );
}

export default function Project({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden gap-1 lg:gap-2"
    >
      <h3 className="absolute top-24 left-1/2 transform -translate-x-1/2 uppercase tracking-[20px] font-bold z-30 text-accent text-sm 2xl:text-4xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl xs:text-2xl">
        Projects
      </h3>

      <MarqueeRow
        projects={TOP_PROJECTS}
        duration={40}
        reverse={false}
        align="items-end justify-center"
      />

      <MarqueeRow
        projects={BOTTOM_PROJECTS}
        duration={45}
        reverse
        align="items-start"
      />

      {/* Background Decoration */}
      <div className="w-full absolute top-[30%] bg-accent/10 left-0 h-[500px] -skew-y-12 -z-10" />
    </motion.div>
  );
}
