'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill'
import SkillApache from './SkillApache'
import SkillBoostrap from './SkillBoostrap'
import SkillCi from './SkillCi'
import SkillCoulflare from './SkillCoulflare'
import SkillExpress from './SkillExpress'
import SkillJavascript from './SkillJavascript'
import SkillMongodb from './SkillMongodb'
import SkillMysql from './SkillMysql'
import SkillNextjs from './SkillNextjs'
import SkillNginx from './SkillNginx'
import SkillNodejs from './SkillNodejs'
import SkillReact from './SkillReact'
import SkillSass from './SkillSass'
import SkillTailwind from './SkillTailwind'
import SkillTypescript from './SkillTypescript'
import SkillUbuntu from './SkillUbuntu'
import SkillAws from './SkillAws'
import SkillJs from './SkillJs'
import SkillCss from './SkillCss'




type Props = {}

export default function Skills({ }: Props) {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px:10 xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>hover over a skill for seing profiency</h3>

            <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:gap-5 gap-2 md:gap-5'>
                <SkillApache />
                <SkillJs />
                <SkillBoostrap />
                <SkillCss />
                <SkillCoulflare />
                <SkillUbuntu />
                <SkillAws />
                <SkillNginx />
                <SkillJavascript />
                <SkillExpress />
                <SkillNodejs />
                <SkillTypescript />
                <SkillCi />
                <Skill />
                <SkillReact />
                <SkillNextjs />
                <SkillMongodb />
                <SkillSass />
                <SkillMysql />
                <SkillTailwind />
            </div>
        </motion.div>

    )
}