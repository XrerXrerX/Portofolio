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
    <div className="h-screen ">
      <div className="flex justify-center items-center ">
        <div className="text-center mt-24">
          <h3 className="uppercase tracking-[20px] text-yellow-500 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg font-extrabold">
            Skills
          </h3>
          <p className="mt-2 text-neutral-400 text-sm 2xl:text-base xl:text-sm">
            hover over a skill for seing profiency
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="2xl:w-1/2 xl:w-1/2 lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-2/5 grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3 2xl:gap-6 xl:gap-6 lg:gap-4 md:gap-4 sm:gap-2 xs:gap-2 mt-4">
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
      </div>
    </div>
  );
}
