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
      className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[800px] h-[780px] snap-center bg-[#060f14] border-b-4 border-b-[#505f4c]  p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden mt-36"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24  rounded-full  object-cover object-center"
        src="coding.jpeg"
        alt=""
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-l xl:text-4xl font-light text-center underline">
          System Engineer
        </h4>
        <p className="font-bold text-l md:text-xl xl:text-2xl mt-1 text-center">
          Freelance (contract projet)
        </p>
        <div className="flex flex-wrap gap-4 my-2 justify-center">
          <img
            src="vite.jpg"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="ubuntu.png"
            alt=""
            className="h-5 w-5 md:w-10 md:h-12 rounded-full"
          />
          <img
            src="typescript.png"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="tlwind.png"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="laravel.png"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="react.jpg"
            alt=""
            className="h-5 w-5  md:h-12 md:w-12 rounded-full"
          />
          <img
            src="rabbit.png"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="javascript.jpeg"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="nodejs.png"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="nextjs.png"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="mysql.png"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="cloudflare.jpeg"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="aws.png"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="nginx.png"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="apache.jpg"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="postgresql.png"
            alt=""
            className="h-5 w-5 md:w-10 md:h-10 rounded-full"
          />
          <img
            src="graph.jpg"
            alt=""
            className="h-5 w-5 md:w-12 md:h-12 rounded-full"
          />
          <img
            src="docker.png"
            alt=""
            className="h-5 w-5 md:w-12 md:h-12 rounded-full"
          />
          <img
            src="expressjs.png"
            alt=""
            className="h-5 w-5 md:w-12 md:h-12 rounded-full"
          />
          <img
            src="html.png"
            alt=""
            className="h-5 w-5 md:w-12 md:h-12 rounded-full"
          />
          <img
            src="css.png"
            alt=""
            className="h-5 w-5 md:w-12 md:h-12 rounded-full"
          />
        </div>

        <p className="uppercase py-2 text-gray-300 text-center text-xl">
          started work 2019 - untill Now
        </p>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-sm">
          <li>
            Infrastructure and orchestration stack flow Business with AWS, TDD
            and clean Architecture also using CICD
          </li>
          <li>
            Build CRM (Laravel ) that connect to front end application and using
            AWS ubuntu Nginx for deploying
          </li>
          <li>
            Infrastructure 6 server (including SSL LoadBalancer and database)
            and manage the cost monthly
          </li>
          <li>
            Build front end using server side (react), client side or both.
          </li>
          <li>Achieved some certification</li>
          <li>
            Make a report costs, improvement, and performance Project that have
            been done. (all document support)
          </li>
          <li>Also create documentation for internal and long term purposes</li>
          <li>Architecture system regulation base of ci/cd pipeline</li>
          <li>Testing, build, deploy apps</li>
          <li>
            Make sure about security API also backend that connected to front
            end (authentication, authorization)
          </li>
          <li>
            Merging and migrate old flow server to new architecture as docker,
            ci/cd unit testing and deployment
          </li>
          <li>- Manage cloud server like AWS and VPS Hostinger</li>
          <li>
            Manage database and make it with reusability, scalability, and
            availability
          </li>
        </ul>
      </div>
    </motion.article>
  );
}
