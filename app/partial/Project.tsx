'use client'
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function Project({ }: Props) {
    const projects = [1, 2, 3]
    const projectLength = projects.length;
    const i = 0
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>


            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-30'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-30 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((projects, i) => (

                    <div className='w-screen xl:w-[1200px] h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44  mt-20'>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={`${i + 1}.png`} alt=""
                        />

                        {i === 0 ? (
                            <>
                                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                    <h4 className='text-3xl font-semibold text-center'>
                                        <span className='underline decoration-[#F7AB0A]/50'>Project {i + 1} of {projectLength} :</span>  BackEnd Development
                                    </h4>
                                    <p className='text-lg text-center md:text-left'> Deploy Laravel and Any Static Website to server and i manage 4 server including 1 Server AWS . ( Using Filezilla , Putty and command shell also gitbash )</p>
                                </div>
                            </>
                        ) : i === 1 ? (
                            <>
                                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                    <h4 className='text-3xl font-semibold text-center'>
                                        <span className='underline decoration-[#F7AB0A]/50'>Project {i + 1} of {projectLength} :</span>  LARAVEL BACKEND AND FRONTEND
                                    </h4>
                                    <p className='text-lg text-center md:text-left'>Make a website backend frontend also manage all data income and outcome to database using sql</p>
                                </div>
                            </>
                        ) : i === 2 ? (
                            <>
                                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                    <h4 className='text-3xl font-semibold text-center'>
                                        <span className='underline decoration-[#F7AB0A]/50'>Project {i + 1} of {projectLength} :</span>  STATIC WEBSITE
                                    </h4>
                                    <p className='text-lg text-center md:text-left'> Membuat user interaktif untuk website static</p>
                                </div>
                            </>
                        ) : null}
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />

        </motion.div>
    )
}