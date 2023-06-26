import React from 'react'
import { motion } from 'framer-motion';


type Props = {}

export default function ExperienceCardAc({ }: Props) {
    return (
        <article
            className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[340px] md:w-[600px] xl:w-[1000px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden mt-0 md:mt-20 xl:mt-24'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-24 h-24 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src="accounting.jpeg"
                alt="" />

            <div className='px-0 md:px-10 '>
                <h4 className='text-xl md:text-2xl xl:text-4xl font-light text-center underline'>Accounting Finance</h4>
                <p className='font-bold text-l md:text-xl xl:text-2xl mt-1 text-center'>PT BARA ALAM UTAMA <br />(PT. AGATHIS ALAM INDONESIA)</p>

                <p className='text-[15px] md:text-xl uppercase py-5 md:py-5 text-gray-300 text-center'>started work June 2018 - 2019</p>
                <ul className='list-disc space-y-2 md:space-y-4 spa ml-5 text-[15px] md:text-xl'>
                    <li>Controlling stock in camp</li>
                    <li>make Journal and make sure the document is legal </li>
                    <li>reporting financial report monthl</li>
                    <li>Grouping transaction with COA Spesifications </li>
                </ul>
                <p className='uppercase underline py-5 text-gray-300 text-center text-[12px] md:text-[15px] xl:test-[20px]'>reasons for resigning : want to Switch Career cause my major is an IT</p>
            </div>
        </article>
    )
}