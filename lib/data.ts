export const personal = {
  name: "Mario Mendez",
  title: "Cloud & DevOps Engineer",
  subtitle: "Azure · AWS · CI/CD",
  location: "San José, Costa Rica",
  email: "mariomendezzu87@gmail.com",
  github: "https://github.com/mmendez291203",
  linkedin: "https://www.linkedin.com/in/mariomendez2912/",
  summary:
    "I help teams ship faster and break less. I specialize in cloud infrastructure, CI/CD automation, and Azure DevOps — turning broken pipelines, flaky deployments, and messy environments into reliable, scalable systems. 3+ years working directly with enterprise engineering teams at Microsoft scale.",
};

export const skillGroups = [
  {
    category: "Cloud & Infrastructure",
    skills: ["Microsoft Azure", "AWS (EC2, Networking)", "Azure DevOps", "Self-hosted Agents"],
  },
  {
    category: "CI/CD & Automation",
    skills: ["CI/CD Pipelines (YAML)", "GitHub Actions", "Docker", "GitHub Integrations"],
  },
  {
    category: "Scripting & Languages",
    skills: ["Bash / Shell", "Python", "PowerShell"],
  },
  {
    category: "Observability & Linux",
    skills: ["Splunk Enterprise", "Log Analysis", "Linux Administration", "Infrastructure Troubleshooting"],
  },
  {
    category: "Networking",
    skills: ["Networking Fundamentals", "AWS Security Groups", "Firewall & Routing"],
  },
];

export const projects = [
  {
    name: "Automated CI/CD Pipeline with Docker & GitHub Actions",
    description:
      "Built an end-to-end pipeline for a Python monitoring service — from code push to production container, fully automated. No manual deploys, no broken builds reaching production.",
    bullets: [
      "Real-time system metrics API (CPU, memory, disk, network) via Flask",
      "Tests run automatically on every push — build blocks if anything fails",
      "Docker image built and published to GHCR without touching a server",
    ],
    technologies: ["Docker", "GitHub Actions", "Python", "Flask", "GHCR"],
    github: "https://github.com/mmendez291203",
  },
  {
    name: "Centralized Monitoring on AWS with Splunk",
    description:
      "Set up a distributed observability stack from scratch on AWS — three nodes collecting, indexing, and alerting on infrastructure metrics across multiple hosts. Built to catch problems before users do.",
    bullets: [
      "3-node Splunk cluster (Search Head, Indexer, Forwarder) on EC2",
      "Automated metric collection via Bash scripts running on cron",
      "Real-time alerts + AWS networking configured end-to-end",
    ],
    technologies: ["AWS EC2", "Linux", "Splunk", "Bash", "AWS Networking"],
    github: "https://github.com/mmendez291203",
  },
  {
    name: "BJJ Academy — Full-Stack Web App",
    description:
      "Designed and built a complete web platform for a local sports academy — their full operation online: student management, belt tracking, attendance, a blog, and a parent portal for kids.",
    bullets: [
      "Role-based access for admins, instructors, students, and parents",
      "Parent account handles multiple kids, each with independent progress",
      "Deployed on Azure (App Service + Cosmos DB), live in production",
    ],
    technologies: ["Next.js 14", "TypeScript", "Azure", "Cosmos DB", "Tailwind CSS"],
    github: "",
    live: "",
  },
];

export const experience = [
  {
    title: "Operations Lead (Duty Monitor)",
    company: "Tek Experts · Microsoft Partner",
    period: "Mar 2025 – Jan 2026",
    bullets: [
      "Kept 20+ concurrent Azure support queues running on time — owned SLA across App Services, Developer Support, and DevOps teams simultaneously.",
      "Called the shots on high-pressure incident escalations across 3 service lines, minimizing customer impact under time constraints.",
      "Direct coordination with Microsoft engineers in the U.S. — bridging teams, timezones, and priorities.",
    ],
  },
  {
    title: "Azure DevOps Support Engineer",
    company: "Tek Experts · Microsoft Partner",
    period: "Aug 2024 – Mar 2025",
    bullets: [
      "Solved 15–25 Azure DevOps cases per week — YAML pipelines, GitHub integrations, REST APIs, deployment failures — with 90%+ customer satisfaction.",
      "Worked alongside Microsoft product engineers to validate bugs and push fixes upstream.",
      "Wrote technical guides that cut repeat issues and helped customers unblock themselves faster.",
    ],
  },
  {
    title: "Azure DevOps Support Engineer",
    company: "Tek Experts · Microsoft Partner",
    period: "Oct 2022 – Jul 2024",
    bullets: [
      "Enterprise-level Azure DevOps troubleshooting: pipelines, auth, self-hosted agents, deployment failures — consistently within SLA.",
      "Cut case resolution time by redesigning how the team diagnosed issues across DevOps, Lab Services, and DevTest Labs.",
      "Mentored junior engineers — teaching them how to read logs, escalate correctly, and think through complex cloud problems.",
    ],
  },
];

export const certifications = [
  { name: "AZ-900 Azure Fundamentals", issuer: "Microsoft", status: "completed" },
  { name: "AZ-104 Azure Administrator", issuer: "Microsoft", status: "ongoing" },
  { name: "CCNA Introduction to Networks", issuer: "Cisco", status: "completed" },
  { name: "TOEIC English Proficiency", issuer: "CCCN", status: "completed" },
];
