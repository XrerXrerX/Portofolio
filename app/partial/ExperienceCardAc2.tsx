/** @format */

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <motion.article
      initial={{
        scale: 0.4, // Memulai sedikit lebih kecil
        opacity: 0.5, // Awalnya transparan 50%
      }}
      whileInView={{
        scale: 1, // Kembali ke ukuran normal
        opacity: 1, // Menjadi tidak transparan
      }}
      transition={{
        scale: {
          type: "spring", // Efek pegas untuk transisi halus
          stiffness: 100, // Stiffness untuk kontrol efek pegas
          damping: 20, // Pengurangan kecepatan pegas
        },
        opacity: {
          duration: 0.3, // Durasi transisi opacity
        },
      }}
      className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0  2xl:w-2/5 xl:w-2/5 lg:w-3/4 md:w-3/4 sm:w-[350px]  xs:w-3/4 snap-center bg-[#060f14] border-b-4 border-b-[#505f4c]  2xl:p-4 xl:p-4 lg:p-2 md:p-2 sm:p-2 xs:p-2 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden 2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-4 sm:mt-4 xs:mt-4"
    >
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="2xl:w-24 xl:w-24 lg:w-24 md:w-24 sm:w-20 xs:w-16 2xl:h-24 xl:h-24 lg:h-24 md:h-24 sm:h-20 xs:h-16  rounded-full  object-cover object-center"
        src="accounting.png"
        alt=""
      />

      <div className="px-0 md:px-10 ">
        <h4 className=" font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-lg xs:text-lg text-stone-400 text-center underline">
          General Accounting
        </h4>
        <p className="font-light 2xl:text-xl xl:text-lg lg:text- md:text-lg sm:text-sm xs:text-sm mt-1 text-center text-stone-500">
          CV. BINA KARYA USAHA
        </p>

        <p className="uppercase py-2 text-stone-500 text-center 2xl:text-xl xl:text-2xl lg:text-lg md:text-lg sm:text-base xs:text-sm">
          started work 2016 - June 2018
        </p>
        <ul className="list-disc grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-1 2xl:text-sm xl:text-xxss lg:text-sm md:text-xs sm:text-xs xs:text-xxss text-stone-400">
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
        <div className="mb-4"></div>
        <p className="uppercase underline py-2 text-stone-600 text-center text-sm md:text-xxs">
          Reason for resigning: I received an opportunity to work for a larger
          company, which aligns with my career growth aspirations and allows me
          to gain broader experiences.{" "}
        </p>
      </div>
    </motion.article>
  );
}
