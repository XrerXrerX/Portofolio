import React from 'react'
import { motion } from 'framer-motion';


type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article
            className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[340px] md:w-[600px] xl:w-[1000px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden mt-0 md:mt-20 xl:mt-24'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-24 h-24 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src="coding.jpeg"
                alt="" />

            <div className='px-0 md:px-10 '>
                <h4 className='text-xl md:text-2xl xl:text-4xl font-light text-center underline'>FULL STACK DEVELOPER</h4>
                <p className='font-bold text-l md:text-xl xl:text-2xl mt-1 text-center'>KD Cambodia Company (contract projet)</p>
                <div className='flex space-x-5 my-2 md:my-5 justify-center'>
                    <img src="laravel.png" alt="" className='h-5 w-5 md:w-10 md:h-10 rounded-full' />
                    <img src="ubuntu.png" alt="" className='h-5 w-5 md:w-10 md:h-10 rounded-full' />
                    <img src="javascript.jpeg" alt="" className='h-5 w-5 md:w-10 md:h-10 rounded-full' />
                    <img src="php.png" alt="" className='h-5 w-5 md:w-10 md:h-10 rounded-full' />
                    <img src="boostrap.png" alt="" className='h-5 w-5 md:w-10 md:h-10 rounded-full' />
                    <img src="mysql.png" alt="" className='h-5 w-5 md:w-10 md:h-10 rounded-full' />
                    <img src="cloudflare.jpeg" alt="" className='h-5 w-5 md:w-10 md:h-10 rounded-full' />
                    <img src="aws.png" alt="" className='h-5 w-5 md:w-10 md:h-10 rounded-full' />
                    <img src="nginx.png" alt="" className='h-5 w-5 md:w-10 md:h-10 rounded-full' />
                    <img src="apache.jpg" alt="" className='h-5 w-5 md:w-10 md:h-10 rounded-full' />
                </div>
                <p className='uppercase py-0 md:py-5 text-gray-300 text-center'>started work 2019 - untill Now</p>
                <ul className='list-disc space-y-2 md:space-y-4 spa ml-5 text-m md:text-xl'>
                    <li>make and develope a project using laravel ( setup middleware, route , and data relation between route)  </li>
                    <li>make a static website using html boostrap , javascript </li>
                    <li>deploy a project to Apache and Nginx using Ubuntu 18.04 & 22.04</li>
                    <li>setting dns and domain using cloudflare and make a ssl strict in server and to client </li>
                    <li>Maintenance , update , and back up server monthly</li>
                </ul>
            </div>
        </article>
    )
}