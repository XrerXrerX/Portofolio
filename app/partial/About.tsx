'use client'
import React from 'react'
import { motion } from 'framer-motion';


type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'>
            <h3 className='absolute top-28 md:top-24 xl:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="22.jpeg"
                className=' flex-shrink-0 w-24 h-24 rounded-full object-cover md:rounded-lg mb-8 md:mt-12 xl:mt-12 md:w-64 md:h-80 xl:w-[500px] xl:h-[600px]' />

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='space-y-4 px-0 md:px-10'>
                <h4 className='text-xl md:text-2xl xl:text-3xl mt-4 md:mt-0 xl:mt-0 font-semibold'> This is a little things <span className='underline decoration-[#F7AB0A]/50'>About me</span> </h4>

                <p className='text-justify text-[12px] md:tex-base xl:text-base  pb-0 mb-0'>My name is Diki Hidayatullah you can call me Kiki , now im 27 years old .<br />this is it.....  i will tell you a little things about me. already graduated From Mercubuana University and having GPA 3.58 (CUM LAUDE)  ,im a man that love more privillage than a power. im full learner and fast pace thinking of something. im experience in FullStack Developer and i have background accounting 3.5 years as general accounting . i got this job while im in college , anyway im start working when i was 19 and my manager give me more responsibilty to handle 1 cv as general accounting. i realize this world is just not enough for tech person thats why i must have knowledge about economic world. i need to know how business run and also want to know more about tech , and here iam . knowing finance , accounting and IT . i realize im poor bout experience but im so thirsty about knowledge .</p>
            </motion.div>
        </motion.div>
    )
}