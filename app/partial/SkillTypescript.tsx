/** @format */

import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function SkillTypescript({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -150 : 150, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="typescript.png"
        className="rounded-full border border-neutral-700 object-cover 2xl:w-24 xl:w-24 lg:w-24 md:w-24 sm:w-24 xs:w-12 2xl:h-24 xl:h-24 lg:h-24 md:h-24 sm:h-24 xs:h-12 filter group-hover:grayscale-0 transition duration-250 ease-in-out shadow-lg"
      />
      <div className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-neutral-900/90 backdrop-blur-sm 2xl:w-24 xl:w-24 lg:w-24 md:w-24 sm:w-24 xs:w-12 2xl:h-24 xl:h-24 lg:h-24 md:h-24 sm:h-24 xs:h-12 rounded-full border border-yellow-500/50">
        <div className="flex items-center justify-center h-full">
          <p className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-base font-bold text-yellow-500 opacity-100">
            90%
          </p>
        </div>
      </div>
    </div>
  );
}
