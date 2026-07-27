/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const EXPERTISE = [
  "DevOps",
  "System Engineer",
  "Cloud Engineer",
  "Full Stack Developer",
];

const FIELDS = [
  { label: "Experience", value: "5+ Years" },
  { label: "Since", value: "2019" },
  { label: "Location", value: "Indonesia" },
];

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.2em] text-content-subtle">
        {label}
      </dt>
      <dd className="mt-1 text-sm sm:text-base font-semibold text-content">
        {value}
      </dd>
    </div>
  );
}

export default function About({}: Props) {
  return (
    /* pt-28 clears the `sticky top-5` header — without it the vertically
       centred content slides underneath the navbar on short viewports. */
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-14">
      {/* Identity card */}
      <motion.article
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          y: { type: "spring", stiffness: 60, damping: 16 },
          opacity: { duration: 0.6 },
        }}
        viewport={{ once: true, margin: "-10%" }}
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-accent/30 bg-secondary shadow-2xl shadow-primary/60"
      >
        {/* Gold sheen, like the hologram on a real badge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/10 blur-3xl"
        />

        {/* Header strip */}
        <div className="relative flex items-center gap-3 border-b border-secondary-light bg-secondary-dark px-5 py-3 sm:px-7">
          <span className="h-5 w-1.5 rounded-full bg-accent" />
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-content-muted">
            Professional Profile
          </p>
        </div>

        {/* Card body */}
        <div className="relative grid gap-6 p-5 sm:p-7 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-9">
          {/* Photo column — hidden on phones so the card stays compact.
              The chip is decorative and only reads as part of the portrait,
              so it goes with it rather than being left stranded. */}
          <div className="hidden md:flex flex-col items-center gap-4">
            <div className="rounded-xl border border-accent/40 p-1.5">
              <img
                src="/image2.jpg"
                alt="Diki Hidayatullah"
                className="h-28 w-28 sm:h-32 sm:w-32 lg:h-40 lg:w-40 rounded-lg object-cover"
              />
            </div>

            {/* Smart-card chip */}
            <div
              aria-hidden="true"
              className="relative h-7 w-10 overflow-hidden rounded-md bg-gradient-to-br from-accent to-accent-dark"
            >
              <span className="absolute inset-x-1 top-1/2 h-px bg-primary/40" />
              <span className="absolute inset-y-1 left-1/2 w-px bg-primary/40" />
            </div>
          </div>

          {/* Details column */}
          <div className="min-w-0 text-center lg:text-left">
            <p className="text-[10px] uppercase tracking-[0.2em] text-content-subtle">
              Name
            </p>
            <h4 className="mt-1 text-xl sm:text-2xl lg:text-3xl font-bold text-content">
              Diki Hidayatullah
            </h4>
            <p className="mt-1 text-sm sm:text-base font-semibold text-accent">
              DevOps Engineer, System Engineer, Cloud Engineer, &amp; Full Stack Developer
            </p>

            <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 text-left">
              {FIELDS.map((f) => (
                <Field key={f.label} {...f} />
              ))}
            </dl>

            <div className="mt-5 text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] text-content-subtle">
                Certifications
              </p>
              <p className="mt-1 text-sm sm:text-base text-content">
                AWS Solutions Architect – Associate · AWS Cloud Practitioner
              </p>
              <a
                href="https://drive.google.com/drive/folders/1ly466XYKdI8sHY9Y2QuNy5QdpilKZUFX?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded text-sm font-semibold text-accent underline underline-offset-4 outline-none transition-colors duration-300 hover:text-accent-light focus-visible:ring-2 focus-visible:ring-accent"
              >
                View all certifications
              </a>
            </div>
          </div>
        </div>

        {/* Bio strip */}
        <div className="relative border-t border-secondary-light px-5 py-5 sm:px-7">
          <p className="text-[10px] uppercase tracking-[0.2em] text-content-subtle">
            Who Am I
          </p>
          <p className="mt-2 text-sm lg:text-base leading-relaxed text-content-muted">
            I am a <span className="font-semibold text-accent">System Engineer</span>{" "}
            with over 5 years of hands-on experience specializing in{" "}
            <span className="font-semibold text-accent">DevOps</span> and
            end-to-end application development, designing and managing scalable,
            secure infrastructure for both cloud and on-premise environments.
          </p>
          <p className="mt-3 text-sm lg:text-base leading-relaxed text-content-muted">
            As a{" "}
            <span className="font-semibold text-accent">
              Full Stack Developer
            </span>
            , I deliver across the entire software lifecycle — architecture
            design, backend/frontend implementation, CI/CD pipeline management,
            automation scripting, and rapid production troubleshooting.
          </p>
        </div>

        {/* Footer: expertise tags */}
        <div className="relative flex flex-wrap items-center justify-center gap-2 border-t border-secondary-light bg-secondary-dark px-5 py-4 sm:px-7 lg:justify-start">
          {EXPERTISE.map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent/30 px-3 py-1 text-[11px] sm:text-xs font-medium uppercase tracking-wider text-content-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  );
}
