/** @format */

"use client";
import Image from "next/image";
import Header from "./partial/Header";
import Hero from "./partial/Hero";
import About from "./partial/About";
import Experience from "./partial/Experience";
import Skills from "./partial/Skills";
import Project from "./partial/Project";
import ContacMe from "./partial/ContactMe";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-neutral-100 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-neutral-800 scrollbar-thumb-yellow-500/80"
    >
      {/* // header */}
      <Header />

      {/* //HERO */}
      {/* <section className="snap-center" id="hero"> */}
      <section className="snap-center" id="hero">
        <Hero />
      </section>

      {/* //about */}
      <section className="snap-center" id="about">
        <About />
      </section>

      {/* //experience */}
      <section className="snap-center" id="experience">
        <Experience />
      </section>

      {/* //skills */}
      {/* <section className="snap-start" id="skils"> */}
      <section className="snap-start" id="skills">
        <Skills />
      </section>

      {/* //project */}
      <section className="snap-start" id="projects">
        <Project />
      </section>

      {/* //contact me  */}
      <section className="snap-start" id="contactme">
        <ContacMe />
      </section>

      {/* //footer  */}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex relative items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="up2.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </motion.div>
  );
}
