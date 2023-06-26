import React from 'react'
import { motion } from 'framer-motion';


type Props = {}

export default function ExperienceCardAc2({ }: Props) {
    return (
        <article
            className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[340px] md:w-[800px] xl:w-[1000px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden mt-0 md:mt-20 xl:mt-24'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-24 h-24 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src="accounting.jpeg"
                alt="" />

            <div className='px-0 md:px-10 '>
                <h4 className='text-xl md:text-2xl xl:text-4xl font-light text-center underline'>General Accounting</h4>
                <p className='font-bold text-l md:text-xl xl:text-2xl mt-1 text-center'>CV. BINA KARYA USAHA</p>


                <p className='text-[15px] md:text-xl uppercase py-2 md:py-2 text-gray-300 text-center'>started work 2016 - Hune 2018 ( 2years 6 month )</p>
                <ul className='list-disc space-y-2 md:space-y-2 spa ml-5 text-[10px] md:text-[15px]'>
                    <li>Controlling Acoount Receivable and make report every month</li>
                    <li>Controlling Acoount payable and make report every month </li>
                    <li>Make sure AP and AR paid on Schedule</li>
                    <li>Bank Reconcile</li>
                    <li>Make journal for every transaction</li>
                    <li>Make and suggest to manager for add more Allowance if it needed .</li>
                    <li>Make sure and make report monthly, balance sheet and income statement</li>
                    <li>Responsibilities about legality from all transaction or any project</li>
                    <li>Compare Cash in bank , Petty cash with data in program .</li>
                    <li>Responsilibities about inventory ( Controlling Purchase , Sales ,and Stock check every month)</li>
                    <li>- making a recapitulation about All AP , AR , Allowance , asset , and All Code Account if needed</li>
                </ul>
                <p className='uppercase underline py-5 text-gray-300 text-center'>Alasan resign : Have chance Opportunity work in big Company</p>
            </div>
        </article>
    )
}