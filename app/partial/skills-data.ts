/** @format */

export type Skill = {
  /** Full name, shown on hover. */
  name: string;
  /** Fallback badge text when no logo image exists. */
  short: string;
  /** Path under /public. Omit when there is no logo for this skill. */
  img?: string;
  /**
   * Proficiency, shown on hover. Only set where a value already existed in the
   * previous Skill* components — the rest are intentionally left undefined
   * rather than invented.
   */
  level?: number;
};

const BACKEND: Skill[] = [
  { name: "NestJS", short: "Nest", img: "/nest.jpg", level: 90 },
  { name: "Laravel", short: "Lrvl", img: "/laravel.png", level: 90 },
  { name: "Node.js", short: "Node", img: "/nodejs.png", level: 80 },
  { name: "TypeScript", short: "TS", img: "/typescript.png", level: 90 },
  { name: "PHP", short: "PHP", img: "/php.png" },
  { name: "Hapi.js", short: "Hapi" },
  { name: "JWT", short: "JWT" },
  { name: "OAuth 2.0", short: "OAuth2" },
  { name: "SSO", short: "SSO" },
  { name: "REST API", short: "REST" },
  { name: "WebRTC", short: "WebRTC" },
];

const FRONTEND: Skill[] = [
  { name: "React", short: "React", img: "/react.jpg", level: 90 },
  { name: "Next.js", short: "Next", img: "/next.jpg", level: 90 },
  { name: "Vite", short: "Vite", img: "/vite.jpg" },
  { name: "Taro.js", short: "Taro" },
  { name: "React Native", short: "RN" },
  { name: "Expo", short: "Expo" },
  { name: "WebSocket", short: "WS" },
  { name: "Jest", short: "Jest" },
  { name: "Cypress", short: "Cy" },
  { name: "React Testing Library", short: "RTL" },
];

const DATABASE: Skill[] = [
  { name: "MySQL", short: "MySQL", img: "/mysql.png", level: 90 },
  { name: "PostgreSQL", short: "PgSQL", img: "/postgresql.png", level: 90 },
  { name: "MongoDB", short: "Mongo", img: "/mongodb.jpg", level: 80 },
  { name: "pgvector", short: "pgvec" },
  { name: "Database Migration", short: "Migr" },
  { name: "Database Normalization", short: "Norm" },
];

const DEVOPS: Skill[] = [
  { name: "AWS", short: "AWS", img: "/aws.png", level: 85 },
  { name: "Terraform", short: "TF" },
  { name: "Ansible", short: "Ansbl" },
  { name: "Kubernetes", short: "K8s", img: "/kube.png", level: 90 },
  { name: "Helm", short: "Helm" },
  { name: "Jenkins", short: "Jkns", img: "/jenkins.jpg" },
  { name: "GitHub Actions", short: "GH Act", img: "/github.png" },
  { name: "GitLab CI", short: "GL CI" },
  { name: "ArgoCD", short: "Argo" },
  { name: "GitOps", short: "GitOps" },
  { name: "Docker", short: "Dckr", img: "/docker.png", level: 90 },
  { name: "EC2", short: "EC2" },
  { name: "VPC", short: "VPC" },
  { name: "S3", short: "S3" },
  { name: "RDS", short: "RDS" },
  { name: "ELB", short: "ELB" },
  { name: "IAM", short: "IAM" },
  { name: "CloudWatch", short: "CW" },
  { name: "Route53", short: "R53" },
  { name: "Cloudflare", short: "CF", img: "/cloudflare.jpeg", level: 90 },
  { name: "Nginx", short: "Nginx", img: "/nginx.png", level: 90 },
  { name: "Prometheus", short: "Prom", img: "/prome.png", level: 90 },
  { name: "Grafana", short: "Grfna", img: "/graph.jpg" },
  { name: "ELK Stack", short: "ELK" },
  { name: "EFK Stack", short: "EFK" },
];

const SECURITY: Skill[] = [
  { name: "SSL/TLS", short: "TLS" },
  { name: "MFA", short: "MFA" },
  { name: "VPN", short: "VPN" },
  { name: "NAT Gateway", short: "NAT" },
  { name: "WAF", short: "WAF" },
  { name: "DDoS Mitigation", short: "DDoS" },
  { name: "IAM Policy", short: "Policy" },
  { name: "Bastion Host", short: "Bstn" },
  { name: "Server Hardening", short: "Hrdn" },
  { name: "Secret Manager", short: "Secret" },
];

const AI: Skill[] = [
  { name: "RAG", short: "RAG" },
  { name: "Pinecone", short: "Pine" },
  { name: "Weaviate", short: "Wvt" },
  { name: "Whisper", short: "Whspr" },
  { name: "ElevenLabs", short: "11Labs" },
  { name: "Azure Cognitive Services", short: "Azure" },
  { name: "STT / TTS", short: "STT" },
  { name: "Prompt Engineering", short: "Prompt" },
  { name: "LLM Integration", short: "LLM" },
  { name: "Speaker Diarization", short: "Diar" },
];

const DELIVERY: Skill[] = [
  { name: "Agile", short: "Agile" },
  { name: "Scrum", short: "Scrum" },
  { name: "Sprint Planning", short: "Sprint" },
  { name: "Technical Documentation", short: "Docs" },
  { name: "Stakeholder Communication", short: "Comms" },
  { name: "CI/CD Automation", short: "CI/CD", img: "/CICD.png" },
];

const ALL: Skill[] = [
  ...BACKEND,
  ...FRONTEND,
  ...DATABASE,
  ...DEVOPS,
  ...SECURITY,
  ...AI,
  ...DELIVERY,
];

const WITH_LOGO = ALL.filter((s) => s.img);
const WITHOUT_LOGO = ALL.filter((s) => !s.img);

/** How many rows the text-badge skills are spread across. */
const TEXT_ROWS = 3;
const CHUNK = Math.ceil(WITHOUT_LOGO.length / TEXT_ROWS);

/**
 * Row 1 is every skill that has a logo; the text-badge skills fill the rows
 * below it. The split is derived from the data rather than hardcoded, so
 * dropping a new logo into /public and setting `img` moves that skill up to
 * row 1 on its own. Category order is preserved inside each row.
 *
 * Empty rows are dropped so shrinking WITHOUT_LOGO can never render a blank
 * marquee row.
 */
export const SKILL_ROWS: Skill[][] = [
  WITH_LOGO,
  ...Array.from({ length: TEXT_ROWS }, (_, i) =>
    WITHOUT_LOGO.slice(i * CHUNK, (i + 1) * CHUNK)
  ),
].filter((row) => row.length > 0);
