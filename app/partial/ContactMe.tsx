/** @format */

"use client";
import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {};

export default function ContactMe({}: Props) {
  return (
    /* min-h-screen + pt-28: a fixed h-screen overflowed on short viewports and
       the centred content slid under the `sticky top-5` header. */
    <div className="min-h-screen flex relative flex-col text-center justify-center items-center w-full px-4 pt-28 pb-14">
      <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
        <motion.h4
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-lg font-semibold text-content"
        >
          Let&apos;s work together!{" "}
          <span className="text-accent underline decoration-accent/50">
            Get in touch
          </span>
        </motion.h4>

        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 mt-8">
          {/* Phone Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative bg-secondary backdrop-blur-sm border border-secondary-light rounded-xl p-2 md:p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg"
          >
            <div className="flex flex-col items-center space-y-2 md:space-y-4">
              <div className="p-3 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors duration-300">
                <PhoneIcon className="text-accent h-8 w-8 animate-pulse" />
              </div>
              <h5 className="text-lg font-semibold text-content">Phone</h5>
              <a
                href="tel:+6289612716535"
                className="text-content hover:text-accent-light transition-colors duration-300 text-center"
              >
                +62-896-1271-6535
              </a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-secondary backdrop-blur-sm border border-secondary-light rounded-xl p-2 md:p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg"
          >
            <div className="flex flex-col items-center space-y-1 md:space-y-4">
              <div className="p-3 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors duration-300">
                <EnvelopeIcon className="text-accent w-6 h-6 md:h-8 md:w-8 animate-pulse" />
              </div>
              <h5 className="text-lg font-semibold text-content">Email</h5>
              <a
                href="mailto:dikihidayat.dh@gmail.com"
                className="text-content hover:text-accent-light transition-colors duration-300 text-center break-all"
              >
                dikihidayat.dh@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative bg-secondary backdrop-blur-sm border border-secondary-light rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg md:col-span-2 lg:col-span-1 md:block hidden"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors duration-300">
                <MapPinIcon className="text-accent h-8 w-8 animate-pulse" />
              </div>
              <h5 className="text-lg font-semibold text-content">
                Location
              </h5>
              <p className="text-content text-center">Indonesia</p>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 bg-secondary backdrop-blur-sm border border-secondary-light rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
        >
          <div className="text-center space-y-4">
            <h5 className="text-xl font-semibold text-content">
              Ready to collaborate?
            </h5>
            <p className="text-content-muted max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, interesting
              projects, creative ideas, or just having a chat about technology
              and development.
            </p>
            <div className="flex justify-center space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/diki-hidayatullah-a33992152/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light transition-colors duration-300 font-semibold"
              >
                LinkedIn
              </a>
              <span className="text-content-subtle">•</span>
              <a
                href="https://github.com/XrerXrerX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light transition-colors duration-300 font-semibold"
              >
                GitHub
              </a>
              <span className="text-content-subtle">•</span>
              <a
                href="https://t.me/Cheekbaee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light transition-colors duration-300 font-semibold"
              >
                Telegram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
