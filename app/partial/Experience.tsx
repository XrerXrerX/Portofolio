'use client'
import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard'
import ExperienceCardAc from './ExperienceCardAc'
import ExperienceCardAc2 from './ExperienceCardAc2'




type Props = {}

export default function Experience({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden font-semibold flex-col text-left md:flex-row max-w-full px-5 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 mt-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                <ExperienceCard />
                <ExperienceCardAc />
                <ExperienceCardAc2 />

            </div>
        </motion.div>
    )
}