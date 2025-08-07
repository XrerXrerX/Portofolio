/** @format */

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <motion.article
      initial={{
        scale: 0.4, // Memulai sedikit lebih kecil
        opacity: 0.5, // Awalnya transparan 50%
      }}
      whileInView={{
        scale: 1, // Kembali ke ukuran normal
        opacity: 1, // Menjadi tidak transparan
      }}
      transition={{
        scale: {
          type: "spring", // Efek pegas untuk transisi halus
          stiffness: 100, // Stiffness untuk kontrol efek pegas
          damping: 20, // Pengurangan kecepatan pegas
        },
        opacity: {
          duration: 0.3, // Durasi transisi opacity
        },
      }}
      viewport={{
        margin: "-2%", // Menyesuaikan margin viewport
      }}
      className="flex flex-col text-center justify-center rounded-lg items-center space-y-1 max-w-7xl mx-auto bg-neutral-800/80 backdrop-blur-sm border-b-4 border-b-yellow-500/70 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer overflow-hidden border border-yellow-700/60 shadow-xl sm:space-y-2"
    >
      {/* <motion.img
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="2xl:w-24 xl:w-24 lg:w-24 md:w-24 sm:w-20 xs:w-16 2xl:h-24 xl:h-24 lg:h-24 md:h-24 sm:h-20 xs:h-16  rounded-full  object-cover object-center"
        src="coding.jpeg"
        alt=""
      /> */}

      <div className="2xl:p-8 xl:p-6 lg:p-4 md:p-4 sm:p-3 xs:p-3 w-full">
        <h4 className=" font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-lg xs:text-sm text-neutral-100 text-center underline decoration-yellow-500/50">
          DevOps | System Engineer | Cloud Engineer | Full Stack Developer
        </h4>
        {/* <div className="flex flex-wrap gap-2 my-1 justify-center ">
          <img
            src="vite.jpg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="ubuntu.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="typescript.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="tlwind.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="laravel.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="react.jpg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="rabbit.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="javascript.jpeg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="nodejs.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="nextjs.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="mysql.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="cloudflare.jpeg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="aws.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="nginx.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="apache.jpg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="postgresql.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="graph.jpg"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="docker.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="expressjs.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="html.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
          <img
            src="css.png"
            alt=""
            className="2xl:h-5 xl:h-5 lg:h-5 md:h-5 sm:h-5 xs:h-5 2xl:w-5 xl:w-5 lg:w-5 md:w-5 sm:w-5 xs:w-5 rounded-full hidden 2xl:block xl:block lg:block md:block sm:block"
          />
        </div> */}

        <p className="uppercase py-2 text-neutral-400 text-center 2xl:text-xl xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs">
          started work 2019 - untill Now
        </p>
        <ul className="list-disc grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-3 2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-xs xs:text-[8px] text-neutral-400 text-left">
          <li>
            Develop full stack web and mobile Apps using NestJS, Laravel,
            Hapi.js, React.js, Next.js, and React Native (Expo).
          </li>
          <li>
            Design and implement robust authentication using JWT, OAuth 2.0,
            SSO, and secure session management.
          </li>
          <li>
            Build, normalize, and migrate maintainable databases on MySQL,
            PostgreSQL, and MongoDB, including automated backup and restore.
          </li>
          <li>
            Implement unit, integration, and E2E testing for backend and
            frontend (Jest, PHPUnit, Cypress, React Testing Library).
          </li>
          <li>
            Optimize API performance, web socket integration, and advanced state
            management for high-traffic.
          </li>
          <li className="hidden lg:block">
            Build and release cross-platform mobile apps (iOS/Android) with
            React Native, integrated push notifications, and native modules.
          </li>
          <li>
            Automate deployment pipelines with CI/CD using Jenkins, GitHub
            Actions, GitLab CI, ArgoCD, EAS, and Fastlane.
          </li>
          <li>
            Provision, configure, and orchestrate infrastructure using
            Terraform, Ansible, and Kubernetes (deployments, Helm, scaling).
          </li>
          <li>
            Manage cloud platforms (AWS EC2, VPC, S3, RDS, ELB, IAM, CloudWatch)
            and set up secure, scalable network architectures.
          </li>
          <li>
            Design, implement, and harden VPCs, subnets, routing tables, NAT
            gateways, VPNs, and DNS with Route53 and Cloudflare.
          </li>
          <li>
            Set up and enforce firewall rules, security groups, WAFs (AWS/GCP),
            DDoS mitigation, API key management, and bastion hosts.
          </li>
          <li>
            Implement automated monitoring, alerting, and logging with
            CloudWatch, Prometheus, Grafana, and ELK/EFK stack.
          </li>
          <li>
            Automate infrastructure, network, and application deployment using
            end-to-end scripting.
          </li>
          <li>
            Perform server and infrastructure hardening (OS, SSH, IAM, network
            policy, S3 policy, MFA, secret manager).
          </li>
          <li>
            Configure API gateways, SSL/TLS certificates, and reverse proxy with
            Nginx for secure and performance.
          </li>
          <li>
            Collaborate with Agile/Scrum teams, lead technical documentation,
            and provide team training on best practices.
          </li>
          <li>
            Develop microservices architectures with orchestration involving:
            <ul className="list-disc pl-6 mt-2 space-y-1 hidden lg:block">
              <li>Multiple backend frameworks (NestJS, Laravel, Hapi.js)</li>
              <li>Database stacks (MySQL, PostgreSQL, MongoDB)</li>
              <li>Frontend and mobile stacks (React, Next.js, React Native)</li>
              <li>
                Load balancer, auto-scaling, auto-cloning, and automated backup
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.article>
  );
}
