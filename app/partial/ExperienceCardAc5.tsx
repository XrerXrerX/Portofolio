/** @format */

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCardAc2({}: Props) {
  return (
    <motion.article
      initial={{
        scale: 0, // Memulai sedikit lebih besar
        opacity: 0.5, // Awalnya transparan
      }}
      whileInView={{
        scale: 1, // Kembali ke ukuran normal
        opacity: 1, // Menjadi tidak transparan
      }}
      transition={{
        scale: {
          type: "spring", // Efek pegas untuk transisi halus
          stiffness: 100, // Stiffness untuk kontrol efek pegas
          damping: 10, // Pengurangan kecepatan pegas
        },
        opacity: {
          duration: 0.3, // Durasi transisi opacity
        },
      }}
      viewport={{
        margin: "-10%", // Menyesuaikan margin viewport
      }}
      className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[600px] h-[780px] snap-center bg-[#060f14] border-b-4 border-b-[#505f4c] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden mt-36"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24  rounded-full  object-cover object-center"
        src="accounting.jpeg"
        alt=""
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-xl md:text-2xl xl:text-4xl font-light text-center underline">
          General Accounting
        </h4>
        <p className="font-bold text-l md:text-xl xl:text-2xl mt-1 text-center">
          CV. BINA KARYA USAHA
        </p>

        <p className="text-[15px] md:text-xl py-2 md:py-2 text-gray-300 text-center">
          started work 2016 - June 2018
        </p>
        <ul className="list-disc mt-12 grid grid-cols-1 md:grid-cols-2 gap-2  md:text-sm">
          <li>Controlling Acoount Receivable and make report every month</li>
          <li>Controlling Acoount payable and make report every month </li>
          <li>Make sure AP and AR paid on Schedule</li>
          <li>Bank Reconcile</li>
          <li>Make journal for every transaction</li>
          <li>
            Make and suggest to manager for add more Allowance if it needed .
          </li>
          <li>
            Make sure and make report monthly, balance sheet and income
            statement
          </li>
          <li>
            Responsibilities about legality from all transaction or any project
          </li>
          <li>Compare Cash in bank , Petty cash with data in program .</li>
          <li>
            Responsilibities about inventory ( Controlling Purchase , Sales ,and
            Stock check every month)
          </li>
          <li>
            making a recapitulation about All AP , AR , Allowance , asset , and
            All Code Account if needed
          </li>
        </ul>
        <div className="mb-12"></div>
        <p className="uppercase underline py-2 text-gray-300 text-center text-[10px] md:text-xl">
          reasons for resigning : Have chance Opportunity work in big Company
        </p>
      </div>
    </motion.article>
  );
}
