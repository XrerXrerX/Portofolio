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
      viewport={{
        margin: "-2%", // Menyesuaikan margin viewport
      }}
      className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 2xl:w-3/4 xl:w-3/4 lg:w-[550px] md:w-[550px] sm:w-[350px] xs:w-[340px]  snap-center bg-[#060f14] border-b-4 border-b-[#505f4c] 2xl:pt-4 xl:pt-4 lg:pt-2 md:pt-2 sm:pt-2 xs:pt-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer overflow-hidden 2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-4 sm:mt-4 xs:mt-4"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="2xl:w-24 xl:w-24 lg:w-24 md:w-24 sm:w-20 xs:w-16 2xl:h-24 xl:h-24 lg:h-24 md:h-24 sm:h-20 xs:h-16  rounded-full  object-cover object-center"
        src="coding.jpeg"
        alt=""
      />

      <div className="2xl:p-5 xl:p-5 lg:p-2 md:p-2 sm:p-2 xs:p-2 ">
        <h4 className=" font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-lg xs:text-lg text-stone-400 text-center underline">
          System Engineer
        </h4>
        <p className="font-light 2xl:text-xl xl:text-lg lg:text- md:text-lg sm:text-sm xs:text-sm mt-1 text-center text-stone-500">
          (contract projet)
        </p>
        <div className="flex flex-wrap gap-2 my-1 justify-center">
          <img
            src="vite.jpg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="ubuntu.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="typescript.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="tlwind.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="laravel.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="react.jpg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="rabbit.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="javascript.jpeg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="nodejs.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="nextjs.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="mysql.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="cloudflare.jpeg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="aws.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="nginx.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="apache.jpg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="postgresql.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="graph.jpg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="docker.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="expressjs.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="html.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
          <img
            src="css.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full"
          />
        </div>

        <p className="uppercase py-2 text-stone-500 text-center 2xl:text-xl xl:text-2xl lg:text-lg md:text-lg sm:text-xxs xs:text-sm">
          started work 2019 - untill Now
        </p>
        <ul className="list-disc grid 2xl:grid-cols-3 xl:grid-cols-3 m-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-1 2xl:text-base xl:text-sm lg:text-xxs md:text-xxs sm:text-xxss xs:text-xxss text-stone-400">
          <li> Manage cloud 12 server AWS and 4 VPS Hostinger</li>
          <li>
            Deploy applications on AWS EC2 with self-configured environments.
          </li>
          <li>
            Make a report costs, improvement, and performance Project that have
            been done. (all document support)
          </li>
          <li>
            Implement CI/CD pipelines for seamless project integration and
            deployment.
          </li>{" "}
          <li>
            Configure servers and install necessary dependencies for deployment.
          </li>
          <li>
            Optimize SEO-friendly frontends using Server-Side Rendering (SSR),
            Client-Side Rendering (CSR), or static rendering.
          </li>
          <li>
            Upgrade team workflows from file-based systems to repository-based
            Dockerized solutions.
          </li>
          <li>
            Manage domains and networks via Cloudflare, including reverse proxy
            setups.
          </li>
          <li>
            Conduct testing for backend systems based on project requirements.
          </li>
          <li>Build full stack applications</li>
          <li>
            Develop microservices with orchestration involving:
            <ul className="list-disc pl-6">
              <li>3 backend stacks</li>
              <li>2 database stacks</li>
              <li>1 frontend stack</li>
              <li>Load balancer, auto update, auto cloning, and auto backup</li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.article>
  );
}
