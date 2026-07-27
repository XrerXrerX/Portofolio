/** @format */

"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function SkillNest({ directionLeft }: Props) {
  return (
    <div
      className="group relative flex cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent"
      tabIndex={0}
      aria-label="NestJS — 90% proficiency"
    >
      <motion.img
        initial={{ x: directionLeft ? -150 : 150, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/nest.jpg"
        alt="NestJS"
        className="rounded-full border border-secondary-light object-cover 2xl:w-24 xl:w-24 lg:w-24 md:w-24 sm:w-24 xs:w-12 2xl:h-24 xl:h-24 lg:h-24 md:h-24 sm:h-24 xs:h-12 shadow-lg filter grayscale transition duration-300 ease-in-out group-hover:grayscale-0 group-focus:grayscale-0"
      />
      <div className="absolute inset-0 flex items-center justify-center rounded-full border border-accent/50 bg-secondary-dark/90 opacity-0 backdrop-blur-sm transition duration-300 ease-in-out group-hover:opacity-100 group-focus:opacity-100">
        <p className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-base font-bold text-accent">
          90%
        </p>
      </div>
    </div>
  );
}
