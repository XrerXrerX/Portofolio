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
        className="uppercase tracking-[20px] text-yellow-500  2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-lg font-extrabold 2xl:my-4 xl:my-4 lg:my-4 md:my-2 sm:my-2 xs:my-2"
      >
        About Me
      </motion.h3>

      {/* Card Section */}
      <div className="2xl:mt-10 xl:mt-10 lg:mt-10 md:mt-4 sm:mt-2 xs:mt-2 grid xs:grid-cols-1 gap-4">
        {/* Column 1 */}
        <motion.div
          initial={{
            x: -50, // Memulai sedikit ke kiri
            opacity: 50, // Awalnya transparan
          }}
          whileInView={{
            x: 0, // Bergerak kembali ke posisi normal
            opacity: 1, // Menjadi tidak transparan
          }}
          transition={{
            x: {
              type: "spring", // Efek pegas untuk transisi halus
              stiffness: 100, // Stiffness untuk kontrol efek pegas
              damping: 10, // Pengurangan kecepatan pegas
            },
            opacity: {
              duration: 0.3, // Durasi transisi opacity
            },
          }}
          viewport={{
            margin: "-20%", // Menyesuaikan margin viewport
          }}
          className="flex flex-col items-center justify-center border p-4 rounded-lg shadow-lg bg-neutral-800/80 backdrop-blur-sm md:space-y-4 space-y-2 border-neutral-700 mb-4"
        >
          {/* Gambar di Card */}
          <img
            src="image2.jpg"
            alt="Card Image"
            className="2xl:w-48 xl:w-42 lg:w-28 md:w-28 sm:w-24 xs:w-20 2xl:h-48 xl:h-42 lg:h-28 md:h-28 sm:h-24 xs:h-20 rounded-full object-cover shadow-md border-2 border-yellow-500/30"
          />
          <p className="2xl:text-2xl xl:text-2xl lg:text-lg md:text-base sm:text-sm xs:text-xxs text-center w-3/4 mx-auto text-neutral-300">
            I possess four areas of expertise, backed by proven certifications
            and successful project completions! <br />
            check this out :{" "}
            <a
              href="https://drive.google.com/drive/folders/1ly466XYKdI8sHY9Y2QuNy5QdpilKZUFX?usp=sharing"
              className="text-yellow-500 font-extrabold underline hover:text-yellow-400 transition-colors duration-300"
            >
              my certifications
            </a>
          </p>
        </motion.div>
      </div>

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
            <span className="font-bold text-yellow-500">System Engineer</span>{" "}
            with over 5 years of hands-on experience specializing in{" "}
            <span className="font-bold text-yellow-500">DevOps</span> and
            end-to-end application development. I hold{" "}
            <span className="font-bold text-yellow-500">
              AWS certifications
            </span>{" "}
            (Associate Architect & Cloud Practitioner) and am also certified as
            an{" "}
            <span className="font-bold text-yellow-500">
              expert in both backend and frontend
            </span>{" "}
            development. My expertise covers designing, building, and managing
            scalable, secure infrastructure for both cloud and on-premise
            environments. <br />
            As a{" "}
            <span className="font-bold text-yellow-500">
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
