/** @format */

"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SECTIONS, scrollToSection, useActiveSection } from "./navigation";

type Props = {};

const NAV = SECTIONS.filter((s) => s.id !== "contactme");
const NAV_IDS = SECTIONS.map((s) => s.id);

export default function Header({}: Props) {
  const active = useActiveSection(NAV_IDS);

  return (
    <header className="bg-secondary/90 backdrop-blur-sm sticky top-5 p-1 flex items-center justify-between gap-2 2xl:w-3/4 xl:w-3/4 lg:w-11/12 xs:w-11/12 sm:w-11/12 mx-auto z-20 rounded-2xl border border-secondary-light">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* social icon */}
        <SocialIcon
          url="https://www.linkedin.com/in/diki-hidayatullah-a33992152/"
          label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          fgColor="#E5E2D9"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/XrerXrerX"
          label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          fgColor="#E5E2D9"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://t.me/Cheekbaee"
          label="Telegram"
          target="_blank"
          rel="noopener noreferrer"
          fgColor="#E5E2D9"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://wa.me/6285811568813"
          label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          fgColor="#E5E2D9"
          bgColor="transparent"
        />
      </motion.div>

      {/* SPA section nav — smooth scroll, no document jump, active state driven
          by which section actually fills the scroll container. */}
      <nav
        aria-label="Sections"
        className="hidden lg:flex items-center gap-1"
      >
        {NAV.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(s.id);
              }}
              aria-current={isActive ? "true" : undefined}
              className={`relative rounded-full px-3 py-1.5 text-xs uppercase tracking-wider transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isActive
                  ? "text-accent"
                  : "text-content-muted hover:text-content"
              }`}
            >
              {s.label}
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 -z-10 rounded-full bg-secondary-dark border border-accent/40"
                />
              )}
            </a>
          );
        })}
      </nav>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        {/* A plain anchor, not a <SocialIcon>: SocialIcon always renders its
            own <a>, and the HTML parser force-closes an outer <a> when it hits
            a nested one — the parsed tree then differs from React's and
            hydration fails. */}
        <a
          href="#contactme"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contactme");
          }}
          aria-label="Get in touch"
          className="flex flex-row items-center gap-2 px-3 py-2 text-content cursor-pointer hover:text-accent-light transition-colors duration-300 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
          <span className="uppercase hidden md:inline text-sm">
            get in touch
          </span>
        </a>
      </motion.div>
    </header>
  );
}
