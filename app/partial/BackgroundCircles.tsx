/** @format */

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1, 1, 1, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 3,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-yellow-500/70 rounded-full h-[200px] w-[200px] mt-52 animate-ping " />
      <div className="rounded-full border border-yellow-500/60  absolute h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="rounded-full border border-neutral-600/70  absolute h-[400px] w-[400px] mt-52 animate-ping" />
      <div className="rounded-full border border-neutral-700/80  absolute h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="rounded-full border border-neutral-800/90  absolute h-[600px] w-[600px] mt-52 animate-ping" />
    </motion.div>
  );
}
