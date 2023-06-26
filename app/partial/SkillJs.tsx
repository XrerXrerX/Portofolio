import React from 'react'
import { motion } from 'framer-motion';


type Props = {
    directionLeft?: boolean;
}

export default function SkillJs({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                src="html.png"
                className='rounded-full boreder border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale-0 transition duration-250 ease-in-out'
            />
            <div className=' absolute opacity-0 group-hover:opacity-90 tramsotopm duration-300 ease-in-out group-hover:bg-black w-24 h-24 xl:w-32 xl:h-32 rounded-full'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl font-bold text-white opacity-100'>90%</p>
                </div>
            </div>
        </div>
    )
}