/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ExperienceCardAc from "./ExperienceCardAc";
import ExperienceCardAc2 from "./ExperienceCardAc2";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden font-semibold flex-col text-left md:flex-row max-w-full px-5 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[100px] uppercase tracking-[20px] text-slate-200 text-5xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 xl:mt-4 md:mt-4 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard />
        <ExperienceCardAc2 />
        <ExperienceCardAc />
      </div>
    </motion.div>
  );
}
