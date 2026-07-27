/** @format */

"use client";
import Header from "./partial/Header";
import Hero from "./partial/Hero";
import About from "./partial/About";
import Experience from "./partial/Experience";
import Skills from "./partial/Skills";
import Project from "./partial/Project";
import ContacMe from "./partial/ContactMe";
import { motion } from "framer-motion";
import { SCROLL_CONTAINER_ID, scrollToSection } from "./partial/navigation";

export default function Home() {
  return (
    /* This div — not the window — is the scroll container, so it carries the id
       the nav's IntersectionObserver roots against. `scroll-smooth` keeps plain
       hash links smooth even before JS hydrates. */
    <motion.div
      id={SCROLL_CONTAINER_ID}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-content h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar scrollbar-track-secondary scrollbar-thumb-accent/80"
    >
      {/* // header */}
      <Header />

      {/* //HERO */}
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
      <footer className="sticky bottom-5 w-full">
        <div className="flex relative items-center justify-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            aria-label="Back to top"
            className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
              src="/up2.png"
              alt=""
            />
          </a>
        </div>
      </footer>
    </motion.div>
  );
}
