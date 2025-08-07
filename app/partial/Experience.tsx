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
    <div className="h-screen flex flex-col">
      <div className="flex justify-center items-center">
        <h3 className="uppercase tracking-[20px] mt-24 text-yellow-500 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg font-extrabold text-center">
          Experience
        </h3>
      </div>
      <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 1.5 }}
        className="flex-1 flex justify-center items-center px-4"
      >
        <div className="flex justify-center items-center w-full">
          <ExperienceCard />
        </div>
      </motion.div>
    </div>
  );
}
