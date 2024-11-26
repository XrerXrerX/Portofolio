/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Project({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6, 7];
  const projectLength = projects.length;
  const i = 0;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px]  font-bold z-30  text-stone-400 text-sm 2xl:text-base xl:text-sm">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-30 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((projects, i) => (
          <div
            className="w-[400px] xl:w-[580px]  sm:w-[500px]  lg:w-[500px] md:w-[500px] xs:w-[300px] h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-8 xl:p-4  mt-0 md:mt-10 xl:mt-20"
            key={i}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={i === 5 ? `${i + 1}.gif` : `${i + 1}.png`} // Change to GIF when i is 6
              className="rounded-3xl"
              alt=""
            />

            {i === 0 ? (
              <>
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xs:text-sm font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Project {i + 1} of {projectLength} :
                    </span>
                    <br /> Framer Motion
                  </h4>
                  {/* <p className='text-lg text-center md:text-left'> MONGO + EXPRESS + REACT + NODEJS </p> */}
                </div>
              </>
            ) : i === 1 ? (
              <>
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xs:text-sm font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Project {i + 1} of {projectLength} :
                    </span>
                    <br /> Server Monitoring
                  </h4>
                  {/* <p className='text-lg text-center md:text-left'> MONGO + EXPRESS + REACT + NODEJS (JWT LOGIN ) </p> */}
                </div>
              </>
            ) : i === 2 ? (
              <>
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xs:text-sm font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Project {i + 1} of {projectLength} :
                    </span>
                    <br /> Server Management
                  </h4>
                  {/* <p className='text-lg text-center md:text-left'> REACT + API</p> */}
                </div>
              </>
            ) : i === 3 ? (
              <>
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xs:text-sm font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Project {i + 1} of {projectLength} :
                    </span>
                    <br /> Any Internal Project
                  </h4>
                  {/* <p className='text-lg text-center md:text-left'> PHP + SQL + BOOSTRAP </p> */}
                </div>
              </>
            ) : i === 4 ? (
              <>
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xs:text-sm font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Project {i + 1} of {projectLength} :
                    </span>
                    <br />
                    DevOps Tools
                  </h4>
                  {/* <p className='text-lg text-center md:text-left'> FILEZILLA -AWS - PUTTY -VPS</p> */}
                </div>
              </>
            ) : i === 5 ? (
              <>
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xs:text-sm font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Project {i + 1} of {projectLength} :
                    </span>
                    <br /> Any Project Ask Me directly
                  </h4>
                  {/* <p className='text-lg text-center md:text-left'> FILEZILLA -AWS - PUTTY -VPS</p> */}
                </div>
              </>
            ) : i === 6 ? (
              <>
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xs:text-sm font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Project {i + 1} of {projectLength} :
                    </span>
                    <br /> Any Project Ask Me directly
                  </h4>
                  {/* <p className='text-lg text-center md:text-left'> Membuat user interaktif untuk website static</p> */}
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
