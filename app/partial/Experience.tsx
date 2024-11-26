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
    <div className="h-screen ">
      <div className="flex justify-center items-center  ">
        <h3 className="uppercase tracking-[20px] mt-24 text-stone-500 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg font-extrabold text-center">
          Experience
        </h3>
      </div>
      <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 1.5 }}
        className="flex relative overflow-hidden font-semibold flex-col text-left md:flex-row max-w-full px-2 justify-evenly mx-auto items-center"
      >
        <div className="w-full flex gap-8 overflow-x-scroll  snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          <ExperienceCard />
          <ExperienceCardAc2 />
          <ExperienceCardAc />
        </div>
      </motion.div>
    </div>
  );
}
