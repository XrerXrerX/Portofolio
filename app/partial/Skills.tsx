/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillLaravel from "./SkillLaravel";
import SkillApache from "./SkillApache";
import SkillBoostrap from "./SkillBoostrap";
import SkillCi from "./SkillCi";
import SkillCoulflare from "./SkillCoulflare";
import SkillExpress from "./SkillExpress";
import SkillJavascript from "./SkillJavascript";
import SkillMongodb from "./SkillMongodb";
import SkillMysql from "./SkillMysql";
import SkillNextjs from "./SkillNextjs";
import SkillNginx from "./SkillNginx";
import SkillNodejs from "./SkillNodejs";
import SkillReact from "./SkillReact";
import SkillSass from "./SkillSass";
import SkillTailwind from "./SkillTailwind";
import SkillTypescript from "./SkillTypescript";
import SkillUbuntu from "./SkillUbuntu";
import SkillAws from "./SkillAws";
import SkillJs from "./SkillJs";
import SkillCss from "./SkillCss";
import RabbitMq from "./SkillRabbitMq";
import SkillNest from "./SkillNest";
import SkillDocker from "./SkillDocker";
import SkillKube from "./SkillKube";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[1000px] px:10 xl:px-10 min-h-screen justify-evenly xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm ">
        hover over a skill for seing profiency
      </h3>

      <div className="grid  xl:grid-cols-6  gap-2 md:gap-5 xl:gap-5">
        <SkillReact />
        <SkillTypescript />
        <SkillJavascript />
        <SkillCss />
        <SkillJs />
        <SkillTailwind />
        <SkillNextjs />

        <SkillLaravel />
        <RabbitMq />
        <SkillNodejs />
        <SkillExpress />
        <SkillNest />
        <SkillUbuntu />
        <SkillMysql />

        <SkillMongodb />
        <SkillCoulflare />
        <SkillApache />
        <SkillAws />
        <SkillCi />

        <SkillNginx />
        <SkillBoostrap />

        <SkillDocker />
        <SkillKube />
        <SkillSass />
      </div>
    </motion.div>
  );
}
