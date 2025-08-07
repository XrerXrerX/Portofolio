/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Project({}: Props) {
  // Top row images: 1, 2, 3, 4
  const topProjects = [1, 2, 3, 4];
  // Bottom row images: 5, 6, 7, 8, 9
  const bottomProjects = [5, 6, 7, 8, 9];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden"
    >
      <h3 className="absolute top-24 left-1/2 transform -translate-x-1/2 uppercase tracking-[20px] font-bold z-30 text-yellow-500 text-sm 2xl:text-4xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl xs:text-2xl">
        Projects
      </h3>

      {/* Top Row - Moving Left */}
      <div className="flex-1 flex items-end justify-center overflow-hidden">
        <motion.div
          animate={{
            x: [0, -1600],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex space-x-8"
        >
          {/* Duplicate the array 6 times for ultra smooth infinite loop */}
          {[
            ...topProjects,
            ...topProjects,
            ...topProjects,
            ...topProjects,
            ...topProjects,
            ...topProjects,
            ...topProjects,
          ].map((project, i) => (
            <div
              key={`top-${i}`}
              className="w-[300px] xl:w-[400px] lg:w-[350px] md:w-[300px] sm:w-[250px] xs:w-[200px] flex-shrink-0"
            >
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src={`${project}.png`}
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-lg"
                alt=""
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-neutral-100">
                  <span className="text-yellow-500">Project {project}:</span>
                  <br />
                  {project === 1 && "Landing Page"}
                  {project === 2 && "Server Monitoring"}
                  {project === 3 && "Cloud Solution AWS"}
                  {project === 4 && "Prometheus Grafana"}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Row - Moving Right */}
      <div className="flex-1 flex items-start overflow-hidden">
        <motion.div
          animate={{
            x: [-1600, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
          className="flex space-x-8"
        >
          {/* Duplicate the array 6 times for ultra smooth infinite loop */}
          {[
            ...bottomProjects,
            ...bottomProjects,
            ...bottomProjects,
            ...bottomProjects,
            ...bottomProjects,
            ...bottomProjects,
            ...bottomProjects,
          ].map((project, i) => (
            <div
              key={`bottom-${i}`}
              className="w-[300px] xl:w-[400px] lg:w-[350px] md:w-[300px] sm:w-[250px] xs:w-[200px] flex-shrink-0"
            >
              <motion.img
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src={`${project}.png`}
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-lg"
                alt=""
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-neutral-100">
                  <span className="text-yellow-500">Project {project}:</span>
                  <br />
                  {project === 5 && "DevOps Tools"}
                  {project === 6 && "Customer Project"}
                  {project === 7 && "Customer Project"}
                  {project === 8 && "Infrastructure management"}
                  {project === 9 && "Customer Project"}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="w-full absolute top-[30%] bg-yellow-500/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
