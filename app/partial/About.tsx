/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center w-full px-2 mx-auto">
      {/* Section Heading */}
      <motion.h3
        initial={{
          y: -90, // Memulai sedikit ke kiri
          opacity: 0, // Awalnya transparan
        }}
        whileInView={{
          y: 0, // Bergerak kembali ke posisi normal
          opacity: 1, // Menjadi tidak transparan
        }}
        transition={{
          x: {
            type: "spring", // Efek pegas untuk transisi halus
            stiffness: 50, // Stiffness untuk kontrol efek pegas
            damping: 10, // Pengurangan kecepatan pegas
          },
          opacity: {
            duration: 1.5, // Durasi transisi opacity
          },
        }}
        viewport={{
          margin: "-5%", // Menyesuaikan margin viewport
        }}
        className="uppercase tracking-[20px] text-yellow-500 underline 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-lg font-extrabold 2xl:my-4 xl:my-4 lg:my-4 md:my-2 sm:my-2 xs:my-2"
      >
        About Me
      </motion.h3>

      {/* Image and Description */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0">
        <motion.div
          initial={{
            y: -70, // Memulai sedikit ke kiri
            opacity: 0, // Awalnya transparan
          }}
          whileInView={{
            y: 0, // Bergerak kembali ke posisi normal
            opacity: 1, // Menjadi tidak transparan
          }}
          transition={{
            x: {
              type: "spring", // Efek pegas untuk transisi halus
              stiffness: 50, // Stiffness untuk kontrol efek pegas
              damping: 10, // Pengurangan kecepatan pegas
            },
            opacity: {
              duration: 0.8, // Durasi transisi opacity
            },
          }}
          viewport={{
            margin: "-5%", // Menyesuaikan margin viewport
          }}
          className="2xl:space-y-4 xl:space-y-4 lg:space-y-4 md:space-y-1 sm:space-y-1 xs:space-y-1 flex flex-col items-center justify-center px-4 md:px-10 2xl:w-3/4 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full xs:w-full text-neutral-400"
        >
          <h4 className="2xl:text-2xl xl:text-2xl md:text-2xl lg:text-2xl sm:text-lg xs:text-lg font-semibold">
            Who{" "}
            <span className="underline decoration-yellow-500/50">Am I ? </span>
          </h4>
          <p className="2xl:text-lg xl:text-lg md:text-sm lg:text-base sm:text-xxs xs:text-xxss text-center text-neutral-300 mx-auto w-full leading-relaxed">
            I am a{" "}
            <span className="font-bold text-ye100w-500">System Engineer</span>{" "}
            with over 5 years of hands-on experience specializing in{" "}
            <span className="font-bold text-ye100w-500">DevOps</span> and
            end-to-end application development. I hold{" "}
            <span className="font-bold text-ye100w-500">
              AWS certifications
            </span>{" "}
            (Associate Architect & Cloud Practitioner) and am also certified as
            an{" "}
            <span className="font-bold text-ye100w-500">
              expert in both backend and frontend
            </span>{" "}
            development. My expertise covers designing, building, and managing
            scalable, secure infrastructure for both cloud and on-premise
            environments. <br />
            As a{" "}
            <span className="font-bold text-ye100w-500">
              Full Stack Developer
            </span>
            , I have a strong track record in delivering solutions across the
            entire software development lifecycle from architecture design,
            backend/frontend implementation, to automating deployment and
            monitoring. My skills include system analysis, cloud-native solution
            architecture, automation scripting, CI/CD pipeline management, and
            rapid production troubleshooting.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
