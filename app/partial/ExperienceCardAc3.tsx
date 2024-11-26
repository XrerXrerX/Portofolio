/** @format */

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCardAc({}: Props) {
  return (
    <motion.article
      initial={{
        scale: 0.7, // Memulai sedikit lebih besar
        opacity: 0.8, // Awalnya transparan
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
        margin: "-5%", // Menyesuaikan margin viewport
      }}
      className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[600px] h-[780px] snap-center bg-[#060f14] p-10 hover:opacity-100 border-b-4 border-b-[#505f4c] opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden mt-36"
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
        <h4 className="text-l xl:text-4xl font-light text-center underline">
          Accounting Finance
        </h4>
        <p className="font-bold text-l md:text-xl xl:text-2xl mt-1 text-center">
          PT BARA ALAM UTAMA <br />
          (PT. AGATHIS ALAM INDONESIA)
          <br />
          MENARA BCA LT 48
        </p>

        <p className="uppercase py-2 text-gray-300 text-center text-xl">
          started work June 2018 - 2019
        </p>
        <ul className="list-disc mt-12 grid grid-cols-1 md:grid-cols-2 gap-2  md:text-lg">
          <li>Controlling stock in camp</li>
          <li>make Journal and make sure the document is legal </li>
          <li>reporting financial report monthl</li>
          <li>Grouping transaction with COA Spesifications </li>
        </ul>
        <div className="mb-32"></div>
        <p className="uppercase underline py-5 text-gray-300 text-center text-[12px] md:text-[15px] xl:text-[20px]">
          reasons for resigning: want to Switch Career cause my major is an IT
        </p>
      </div>
    </motion.article>
  );
}
