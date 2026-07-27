/** @format */

"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { SECTIONS, scrollToSection } from "./navigation";

const HERO_LINKS = SECTIONS.filter(
  (s) => s.id !== "hero" && s.id !== "contactme"
);

type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hi, Thanks for reaching me out!",
      "i'am a full learner not a programmer",
      "<butMoreImportantToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative h-32 w-32 mx-auto object-cover rounded-full border-2 border-accent/50 shadow-accent/40"
        src="/11.jpeg"
        alt="Diki Hidayatullah"
      />
      <div className="z-20">
        <h2 className="2xl:text-lg xl:text-lg md:text-lg lg:text-sm sm:text-sm xs:text-sm uppercase text-content-muted pb-2 tracking-[2px] md:tracking-[3px] xl:tracking-[5px]">
          DevOps Engineer , System Engineer , Cloud Engineer , Full Stack
          Developer
        </h2>
        <h1 className="text-xl my-5 2xl:text-4xl xl:text-3xl  lg:text-4xl md:text-3xl sm:text-2xl xs:text-lg font-semibold scroll-px-10 text-accent">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#D4AF37" />
        </h1>

        {/* The link IS the button — a <button> nested inside <a> is invalid
            and gives every item two focus stops. */}
        <div className="my-3 flex flex-wrap gap-4 justify-center">
          {HERO_LINKS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(s.id);
              }}
              className="heroButton"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
