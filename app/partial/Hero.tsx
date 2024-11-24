/** @format */

"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, Thanks for reaching me out !",
      "i'am a full learner not a programmer ",
      "<butMoreImportantToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-fill h-32 w-32 mx-auto object-cover rounded-full"
        src="./11.jpeg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-slate-200 pb-2 tracking-[10px] md:tracking-[15px] xl:tracking-[15px]">
          System Engineer
        </h2>
        <h1 className="text-xl my-5 md:text-3xl lg:text-4xl font-semibold scroll-px-10 text-[#FFEFD2]">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#775830" />
        </h1>

        <div className="my-3 flex flex-wrap gap-4 justify-center">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
