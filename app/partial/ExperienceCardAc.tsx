/** @format */

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <motion.article
      initial={{
        scale: 0.4, // Memulai sedikit lebih besar
        opacity: 0.7, // Awalnya transparan
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
      className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0  w-2/5 snap-center bg-[#060f14] border-b-4 border-b-[#505f4c]  2xl:p-4 xl:p-4 lg:p-2 md:p-2 sm:p-2 xs:p-2 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden 2xl:mt-32 xl:mt-28 lg:mt-28 md:mt-28 sm:mt-28 xs:mt-28"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="2xl:w-24 xl:w-24 lg:w-24 md:w-24 sm:w-24 xs:w-24 2xl:h-24 xl:h-24 lg:h-24 md:h-24 sm:h-24 xs:h24  rounded-full  object-cover object-center"
        src="accounting.png"
        alt=""
      />

      <div className="px-0 md:px-10 ">
        <h4 className=" font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-lg xs:text-lg text-stone-400 text-center underline">
          Accounting Finance
        </h4>
        <p className="font-light 2xl:text-xl xl:text-lg lg:text- md:text-lg sm:text-sm xs:text-sm mt-1 text-center text-stone-500">
          PT BARA ALAM UTAMA <br />
          (PT. AGATHIS ALAM INDONESIA)
          <br />
          MENARA BCA LT 48{" "}
        </p>

        <p className="uppercase py-2 text-stone-500 text-center 2xl:text-xl xl:text-2xl lg:text-lg md:text-lg sm:text-base xs:text-sm">
          started work June 2018 - 2019
        </p>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 gap-1 2xl:text-xxs xl:text-sm lg:text-sm md:text-xs sm:text-xs xs:text-xs text-stone-400">
          <li>Controlling stock in camp</li>
          <li>make Journal and make sure the document is legal </li>
          <li>reporting financial report monthl</li>
          <li>Grouping transaction with COA Spesifications </li>
        </ul>
        <div className="mb-32"></div>
        <p className="uppercase underline py-5 text-stone-600 text-center text-[12px] md:text-[15px] xl:text-[20px]">
          reasons for resigning: want to Switch Career cause my major is an IT
        </p>
      </div>
    </motion.article>
  );
}
