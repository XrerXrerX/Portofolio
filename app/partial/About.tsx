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
        className="uppercase tracking-[20px] text-stone-500 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-lg font-extrabold 2xl:my-4 xl:my-4 lg:my-4 md:my-2 sm:my-2 xs:my-2"
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
          className="2xl:space-y-4 xl:space-y-4 lg:space-y-4 md:space-y-1 sm:space-y-1 xs:space-y-1 flex flex-col items-center justify-center px-4 md:px-10 2xl:w-3/4 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full xs:w-full text-stone-400"
        >
          <h4 className="2xl:text-2xl xl:text-2xl md:text-2xl lg:text-2xl sm:text-lg xs:text-lg font-semibold">
            Who{" "}
            <span className="underline decoration-[#DBB88E]/50">Am I ? </span>
          </h4>
          <p className="2xl:text-lg xl:text-lg md:text-sm lg:text-base sm:text-xxs xs:text-xxss text-center text-stone-300 mx-auto w-full leading-relaxed">
            My name is Diki Hidayatullah, but you can call me Kiki. I am 28
            years old and a proud graduate of Mercu Buana University, where I
            achieved a GPA of 3.58 (Cum Laude). I bring a wealth of experience
            in full-stack development, DevOps, and finance, with a solid
            background in accounting. Passionate about learning and innovation,
            I excel at bridging the gap between technology and business,
            delivering impactful solutions that enhance operational efficiency
            and drive growth. Let me share more about my journey and expertise!
          </p>
        </motion.div>
      </div>

      {/* Card Section */}
      <div className="2xl:mt-10 xl:mt-10 lg:mt-10 md:mt-4 sm:mt-2 xs:mt-2 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4">
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
          className="flex flex-col items-center justify-center border p-4 rounded-lg shadow-lg bg-[#060f14] space-y-4 border-[#060f14]"
        >
          {/* Gambar di Card */}
          <img
            src="1.jpeg"
            alt="Card Image"
            className="2xl:w-48 xl:w-42 lg:w-28 md:w-28 sm:w-24 xs:w-20 2xl:h-48 xl:h-42 lg:h-28 md:h-28 sm:h-24 xs:h-20 rounded-full object-cover shadow-md"
          />
          <p className="2xl:text-2xl xl:text-2xl lg:text-lg md:text-base sm:text-sm xs:text-xxs text-center w-3/4 mx-auto text-stone-300">
            I possess four areas of expertise, backed by proven certifications
            and successful project completions! <br />
            check this out :{" "}
            <a
              href="https://drive.google.com/drive/folders/1ly466XYKdI8sHY9Y2QuNy5QdpilKZUFX?usp=sharing"
              className="text-blue-900"
            >
              my certifications
            </a>
          </p>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          initial={{
            x: 150, // Memulai sedikit ke kiri
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
          className="grid grid-cols-2 gap-4"
        >
          {/* Card 1: Visual Graphic */}
          <div className="border p-6 rounded-lg shadow-lg bg-[#060f14] border-[#060f14] border-b-4 border-b-[#65573a] flex flex-col items-center">
            <p className="text-stone-300 text-lg font-semibold">FrontEnd</p>
            <div className="flex flex-wrap gap-2 mt-2 justify-center">
              <img
                src="html.png"
                alt="HTML Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4  rounded-full"
              />
              <img
                src="tlwind.png"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4 2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4  rounded-full"
              />
              <img
                src="react.jpg"
                alt="React Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4 2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4  rounded-full"
              />

              <img
                src="nextjs.png"
                alt="Next.js Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4 2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4 "
              />

              <img
                src="vite.jpg"
                alt="Vite Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4 2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4  rounded-full"
              />
              <img
                src="typescript.png"
                alt="TypeScript Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4 2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4  rounded-full"
              />
            </div>
          </div>

          {/* Card 2: DevOps */}
          <div className="border p-6 rounded-lg shadow-lg bg-[#060f14] border-[#060f14] border-b-4 border-b-[#505f4c] flex flex-col items-center">
            <i className="fas fa-tools text-stone-300 text-4x"></i>
            <p className="text-stone-300 text-lg font-semibold">BackEnd</p>

            <div className="flex flex-wrap gap-2 mt-2 justify-center">
              <img
                src="laravel.png"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4 "
              />
              <img
                src="expressjs.png"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4 "
              />
              <img
                src="javascript.jpeg"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4  rounded-full"
              />
              <img
                src="nest.jpg"
                alt="Tailwind Logo"
                className="2xl:w-12  md:2xl:w-12 xl:w-12 lg:w-12 sm:w-8 xs:w-8  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4  rounded-2xl"
              />
              <img
                src="graph.jpg"
                alt="Tailwind Logo"
                className="2xl:w-12  md:2xl:w-12 xl:w-12 lg:w-12 sm:w-8 xs:w-8  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4  rounded-2xl "
              />
            </div>
          </div>

          {/* Card 3: Developer */}
          <div className="border p-6 rounded-lg shadow-lg bg-[#060f14] border-[#060f14] border-b-4 border-b-[#505f4c] flex flex-col items-center">
            <p className="text-stone-300 text-lg font-semibold">DevOps</p>
            <div className="flex flex-wrap gap-2 mt-2 justify-center">
              <img
                src="nginx.png"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4 rounded-full"
              />
              <img
                src="ubuntu.png"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4 rounded-full"
              />
              <img
                src="jenkins.jpg"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4 rounded-full "
              />
              <img
                src="github.png"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4 rounded-full "
              />
              <img
                src="database.png"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4 rounded-full "
              />
            </div>
          </div>

          {/* Card 4: Software Architecture */}
          <div className="border p-6 rounded-lg shadow-lg bg-[#060f14] border-[#060f14] border-b-4 border-b-[#65573a] flex flex-col items-center">
            <i className="fas fa-project-diagram text-stone-300 text-4xl "></i>
            <p className="text-stone-300 text-lg md:text-sm sm:text-sm xs:text-xxs font-semibold">
              Software Architecture
            </p>
            <div className="flex flex-wrap gap-2 mt-2 justify-center">
              <img
                src="drawio.png"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4"
              />
              <img
                src="CICD.png"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4"
              />
              <img
                src="docker.png"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4 rounded-full"
              />
              <img
                src="kube.png"
                alt="Tailwind Logo"
                className="2xl:w-12 xl:w-12 lg:w-12 md:w-8 sm:w-4 xs:w-4  2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-4 xs:h-4 rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
