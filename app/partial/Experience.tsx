/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

type Category = {
  id: string;
  tab: string;
  title: string;
  items: string[];
};

const CATEGORIES: Category[] = [
  {
    id: "devops",
    tab: "DevOps & Cloud",
    title: "DevOps, Networking and Cloud Infrastructure",
    items: [
      "Infrastructure as Code: Terraform and Ansible for provisioning, deployment, and automated configuration",
      "CI/CD: Jenkins, GitHub Actions, GitLab CI, ArgoCD (GitOps)",
      "Kubernetes orchestration: Deployments, scaling, Helm charts, rolling updates, canary deployments",
      "Cloud Platform: AWS (EC2, VPC, S3, RDS, ELB, IAM, CloudWatch)",
      "Network orchestration and security: VPC design and setup, public/private subnets, routing tables, NAT gateway, VPN",
      "DNS management: Route53, Cloudflare (custom DNS, failover, geo-routing)",
      "Firewall and security groups: Rule hardening across subnets, projects, and VPC peering",
      "Bastion host setup, port restriction, and private/public subnet best practices",
      "WAF setup (AWS/GCP), DDoS mitigation, API key management",
      "End-to-end automation scripts for infrastructure, network, and application deployment",
      "Monitoring and backup: CloudWatch, Prometheus, Grafana, ELK/EFK stack",
      "Automated backup, restore, and disaster recovery planning",
    ],
  },
  {
    id: "backend",
    tab: "Back End",
    title: "Full Stack Back End Development",
    items: [
      "Backend frameworks: NestJS (Node.js/TypeScript), Laravel (PHP), Hapi.js",
      "Authentication: JWT, OAuth 2.0, SSO, session management",
      "Testing: Unit, integration, E2E testing (Jest, PHPUnit)",
      "Database: Design, normalization, migration, and backup on MySQL, PostgreSQL, MongoDB",
      "Database architecture with focus on maintainability and durability",
      "REST API design and versioning best practices",
      "WebRTC: Real-time communication integration for signaling server, peer connection, media stream handling",
    ],
  },
  {
    id: "frontend",
    tab: "Front End & Mobile",
    title: "Front End and Mobile App Engineering",
    items: [
      "React.js with Vite and Next.js (SSR, SSG, ISR), state management, WebSocket integration",
      "Advanced API and performance optimization",
      "Taro.js: Cross-platform MiniApp development targeting WeChat MiniProgram and H5",
      "React Native with Expo: Cross-platform mobile app for iOS and Android",
      "API integration, push notifications, and native module configuration",
      "CI/CD pipeline for mobile (EAS, Fastlane)",
      "Testing: Jest, React Testing Library, Cypress",
    ],
  },
  {
    id: "security",
    tab: "Security",
    title: "Security and Best Practices",
    items: [
      "Server and infrastructure hardening: OS hardening, user and SSH management, least privilege principle",
      "IAM policies, network policies, S3 bucket policies",
      "Continuous audit and compliance: Periodic vulnerability scanning, security review",
      "Encrypted storage and traffic (SSL/TLS), MFA enforcement, secret manager integration",
      "Automation: Terraform/Ansible orchestration for network, firewall rule deployment, and rolling infrastructure updates",
    ],
  },
  {
    id: "ai",
    tab: "AI Integration",
    title: "AI Integration and Deployment",
    items: [
      "RAG (Retrieval-Augmented Generation) system deployment: Vector database setup (Pinecone, Weaviate, pgvector), embedding pipeline, retrieval chain, and LLM integration",
      "Voice AI integration: STT (Speech-to-Text) and TTS (Text-to-Speech) pipeline using services such as Whisper, Google Speech, ElevenLabs, and Azure Cognitive Services",
      "AI voice analysis: Speaker diarization, tone detection, and real-time audio processing integration",
      "LLM integration for product features: Prompt engineering, context management, streaming response handling",
      "AI-powered workflow automation: Internal tooling for CI log analysis, infra anomaly detection, and code review assistance",
      "WebRTC combined with AI voice pipeline for real-time AI-assisted communication features",
    ],
  },
  {
    id: "additional",
    tab: "Additional",
    title: "Additional Skills",
    items: [
      "API gateway and reverse proxy: Nginx, SSL/TLS setup",
      "Agile/Scrum collaboration, sprint planning, and backlog management",
      "Technical documentation and team knowledge transfer",
      "Responsive cross-functional communication with engineering teams, stakeholders, and end users",
      "Delivery ownership: Consistent milestone execution aligned with sprint timelines",
    ],
  },
];

/** Renders "Lead: detail" with the lead emphasised; items without a lead pass through. */
function Item({ text }: { text: string }) {
  const split = text.indexOf(": ");
  const lead = split > -1 ? text.slice(0, split) : null;
  const rest = split > -1 ? text.slice(split + 2) : text;

  return (
    <li className="flex gap-2.5">
      <span
        aria-hidden="true"
        className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
      />
      <p className="text-xs sm:text-sm leading-relaxed text-content-muted">
        {lead && <span className="font-semibold text-content">{lead}: </span>}
        {rest}
      </p>
    </li>
  );
}

export default function Experience({}: Props) {
  const [active, setActive] = React.useState(0);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  // Roving tabindex: arrows move between tabs, Home/End jump to the ends.
  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = CATEGORIES.length - 1;
    let next = active;

    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;

    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const current = CATEGORIES[active];

  return (
    /* pt-28 clears the `sticky top-5` header. */
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-14">
      <h3 className="uppercase tracking-[10px] sm:tracking-[16px] lg:tracking-[20px] text-accent text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-center">
        Experience
      </h3>
      <p className="mt-3 text-xs sm:text-sm text-content-muted text-center">
        A summary of hands-on work experience
      </p>

      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="Experience categories"
        onKeyDown={onKeyDown}
        className="mt-6 flex max-w-4xl flex-wrap justify-center gap-2"
      >
        {CATEGORIES.map((c, i) => {
          const selected = i === active;
          return (
            <button
              key={c.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={selected}
              aria-controls={`panel-${c.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              /* Both states carry a 1px border — transparent when inactive —
                 so switching tabs never shifts the row by the border width. */
              className={`group relative flex h-9 items-center rounded-full border px-4 text-[11px] sm:text-xs font-medium uppercase tracking-wider outline-none transition-[color,box-shadow,background-color] duration-500 focus-visible:ring-2 focus-visible:ring-accent ${
                selected
                  ? "border-accent bg-secondary text-accent"
                  : "border-transparent text-content-muted hover:text-content hover:shadow-neon"
              }`}
            >
              {/* Inactive tabs get a travelling dashed outline that breathes,
                  so they read as clickable without competing with the selected
                  tab's solid border. rx must be half of h-9 (36px) — SVG clamps
                  rx to half the WIDTH, so a large value would give an ellipse. */}
              {!selected && (
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-accent/45 transition-colors duration-500 animate-dim-pulse group-hover:text-accent/90 motion-reduce:animate-none"
                >
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="18"
                    ry="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="6 5"
                    className="animate-march motion-reduce:animate-none"
                  />
                </svg>
              )}
              {c.tab}
            </button>
          );
        })}
      </div>

      {/* Panel — keyed so it re-mounts and re-animates on tab change */}
      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        tabIndex={0}
        className="mt-6 w-full max-w-5xl overflow-hidden rounded-2xl border border-accent/30 bg-secondary shadow-2xl shadow-primary/60 outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <div className="flex items-center gap-3 border-b border-secondary-light bg-secondary-dark px-5 py-3 sm:px-7">
          <span className="text-xs sm:text-sm font-bold tabular-nums text-accent">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span aria-hidden="true" className="h-4 w-px bg-secondary-light" />
          <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-content">
            {current.title}
          </h4>
        </div>

        <ul className="grid gap-x-8 gap-y-2.5 p-5 sm:p-7 md:grid-cols-2">
          {current.items.map((item) => (
            <Item key={item} text={item} />
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
