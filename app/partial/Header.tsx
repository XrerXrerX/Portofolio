/** @format */

"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function header({}: Props) {
  return (
    <header className="bg-neutral-800/90 backdrop-blur-sm sticky top-5 p-1 flex items-start justify-between 2xl:w-3/4 xl:w-3/4 lg:w-11/12 xs:w-11/12 sm:w-11/12 mx-auto z-20 xl:items-center rounded-2xl border border-neutral-700">
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
          fgColor="#f4f4f5"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/XrerXrerX"
          fgColor="#f4f4f5"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://t.me/Cheekbaee"
          fgColor="#f4f4f5"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://wa.me/6285811568813"
          fgColor="#f4f4f5"
          bgColor="transparent"
        />
      </motion.div>

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
        onClick={() => {
          window.location.href = "#contactme";
        }}
        className="flex flex-row items-center text-neutral-100 cursor-pointer hover:text-yellow-500 transition-colors duration-300"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#f4f4f5"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-neutral-100 pr-3">
          {" "}
          get in touch
        </p>
      </motion.div>
    </header>
  );
}
