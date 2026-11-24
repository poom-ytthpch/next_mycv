"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Lock, X, Maximize2 } from "lucide-react";
import { JSX, useEffect, useRef, useState } from "react";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiMqtt,
  SiNestjs,
  SiTailwindcss,
  SiMysql,
  SiReact,
  SiArduino,
  SiPlatformio,
  SiMariadb,
  SiDocker,
  SiPm2,
  SiPrisma,
  SiApachekafka,
  SiTrpc,
  SiRedis,
  SiNginx,
  SiAntdesign,
} from "react-icons/si";

const size = 22;

const stackIcons: { [key: string]: JSX.Element } = {
  NextJS: <SiNextdotjs size={size} />,
  NodeJS: <SiNodedotjs size={size} />,
  NestJS: <SiNestjs size={size} />,
  MQTT: <SiMqtt size={size} />,
  Tailwind: <SiTailwindcss size={size} />,
  MySQL: <SiMysql size={size} />,
  React: <SiReact size={size} />,
  Arduino: <SiArduino size={size} />,
  PlatformIO: <SiPlatformio size={size} />,
  MariaDB: <SiMariadb size={size} />,
  Docker: <SiDocker size={size} />,
  PM2: <SiPm2 size={size} />,
  Prisma: <SiPrisma size={size} />,
  Kafka: <SiApachekafka size={size} />,
  Grpc: <SiTrpc size={size} />,
  Redis: <SiRedis size={size} />,
  Nginx: <SiNginx size={size} />,
  AntD: <SiAntdesign size={size} />,
};

const projects = [
  {
    name: "RIS / DaaS — Retail Integration & Data Platform",
    description: "Enterprise inventory, sales and promotion microservices built with NestJS and Python. Developed ETL and batch workflows, real-time synchronization, event-driven integrations, reconciliation and message replay. Supported UAT and production on Azure Kubernetes Service.",
    github: "",
    private: true,
    stacks: ["NestJS", "Python", "Kafka", "RabbitMQ", "Azure Service Bus", "Prefect", "Azure Blob Storage", "AKS", "Tencent Cloud"],
    images: [],
  },
  {
    name: "FWD — Insurance Claim Processing",
    description: "Full-stack claims processing and system integration, including ETL, Kafka publishing, bulk CSV import/export, Oracle and SQL Server, and DOPA identity verification.",
    github: "",
    private: true,
    stacks: ["NodeJS", "React", "NextJS", "OracleDB", "SQL Server", "Kafka", "RabbitMQ"],
    images: [],
  },
  {
    name: "CP Match — Import & Export Management",
    description: "Backend import-export management system with NestJS, Oracle Database and TypeORM, supported by unit tests and SonarQube quality checks.",
    github: "",
    private: true,
    stacks: ["NestJS", "NodeJS", "OracleDB", "TypeORM", "SonarQube"],
    images: [],
  },
  {
    name: "Kubix Digital Asset — Token Platform",
    description: "Client-facing digital asset platform and back-office tools for token purchases, rewards and reporting. Designed GraphQL APIs and database schemas, and migrated backend services from Express to Fastify and TypeGraphQL.",
    github: "",
    private: true,
    stacks: ["NestJS", "NextJS", "React", "Fastify", "GraphQL", "TypeGraphQL"],
    images: [],
  },
  {
    name: "SWS / Match Chemical — Industrial Water Monitoring & Control",
    description: "End-to-end industrial IoT platform supporting up to 12 sensors and 24 channels, real-time telemetry and remote control. Developed ESP32-S3 touchscreen firmware, Modbus RTU, configurable relay automation, Normal/Recovery OTA, offline telemetry buffering and crash diagnostics, alongside NestJS APIs, a Next.js dashboard and Kubernetes CI/CD.",
    github: "",
    private: true,
    links: [
      { label: "Match Chemical Website", href: "https://matchchemical.co" },
      { label: "SWS Platform", href: "https://sws.matchchemical.co" },
    ],
    stacks: ["NextJS", "NestJS", "NodeJS", "MQTT", "ESP32-S3", "ESP-IDF", "LVGL", "Modbus RTU", "FreeRTOS", "MariaDB", "Docker", "Prisma", "Nginx", "AntD", "Kubernetes", "GitHub Actions"],
    images: [
      "/images/matchchemical/01.png",
      "/images/matchchemical/02.png",
      "/images/matchchemical/03.png",
      "/images/matchchemical/04.png",
      "/images/matchchemical/05.png",
      "/images/matchchemical/06.png",
      "/images/matchchemical/07.png",
      "/images/matchchemical/08.png",
      "/images/matchchemical/09.png",
    ],
  },
  {
    name: "Fresh Living — Product Management",
    description: "Administrative dashboards and product management features using Next.js, with Node.js and MongoDB APIs.",
    github: "",
    private: true,
    stacks: ["NextJS", "NodeJS", "MongoDB"],
    images: [],
  },
  {
    name: "Dog Charge — EV Charging Management (In Progress)",
    description:
      "Personal project exploring EV charging station management, device connectivity and charging service workflows. Development is in progress.",
    github: "https://github.com/poom-ytthpch/doc-charge",
    private: false,
    stacks: [
      "NextJS",
      "NestJS",
      "NodeJS",
      "MQTT",
      "Arduino",
      "PlatformIO",
      "MariaDB",
      "Docker",
      "PM2",
      "Prisma",
      "Kafka",
      "Grpc",
      "Redis",
    ],
    images: [
      "/images/doccharge/01.png",
      "/images/doccharge/02.png",
      "/images/doccharge/03.png",
      "/images/doccharge/04.png",
      "/images/doccharge/05.png",
      "/images/doccharge/06.png",
      "/images/doccharge/07.png",
    ],
  },
  {
    name: "Book Library",
    description:
      "Library management application for book catalog management and borrowing workflows.",
    github: "https://github.com/poom-ytthpch/book-library",
    private: false,
    stacks: ["React", "NestJS", "NodeJS", "MySQL", "AntD", "Redis"],
    images: [
      "/images/booklibrary/01.png",
      "/images/booklibrary/02.png",
      "/images/booklibrary/03.png",
      "/images/booklibrary/04.png",
    ],
  },
];

export default function MyProjects() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (activeImage && dialog && !dialog.open) dialog.showModal();
  }, [activeImage]);
  const closeGallery = () => {
    dialogRef.current?.close();
    setActiveImage(null);
  };

  return (
    <section id="projects" className="portfolio-section">
      <div className="section-heading">
        <div><p className="eyebrow">01 / SELECTED WORK</p><h2>Projects & experience.</h2></div>
        <p>Enterprise systems, data platforms and independent engineering projects.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.name} className={"project-card" + (project.images.length > 8 || (index > 0 && projects[index - 1].images.length > 8 && !project.images.length) ? " project-card-visual" : "")}>
            <div className="project-topline">
              <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
              {project.private ? <span className="project-status"><Lock size={14} aria-hidden="true" /> Private source</span> : <span className="project-status">Public project</span>}
            </div>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="stack-list" aria-label="Technology stack">
              {project.stacks.map((stack) => (
                <li key={stack} className="stack-chip">
                  {stackIcons[stack] && <span aria-hidden="true">{stackIcons[stack]}</span>}{stack}
                </li>
              ))}
            </ul>
            {project.images.length > 0 && (
              <div className="project-gallery" aria-label={"Screenshots of " + project.name}>
                {project.images.map((img, i) => {
                  const alt = project.name + " screenshot " + (i + 1);
                  return (
                    <button key={img} type="button" className="gallery-thumb" onClick={() => setActiveImage({ src: img, alt })} aria-label={"Enlarge " + alt}>
                      <Image src={img} alt={alt} fill sizes="(max-width: 600px) 220px, 260px" className="gallery-image" />
                      <span className="gallery-expand"><Maximize2 size={15} aria-hidden="true" /></span>
                    </button>
                  );
                })}
              </div>
            )}
            {(!project.private || project.links?.length) && (
              <div className="project-links">
                {!project.private && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link"><FaGithub size={16} aria-hidden="true" /> View on GitHub <ExternalLink size={14} aria-hidden="true" /></a>}
                {project.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-link">{link.label} <ExternalLink size={14} aria-hidden="true" /></a>)}
              </div>
            )}
          </article>
        ))}
      </div>
      <dialog ref={dialogRef} className="gallery-dialog" aria-label="Project screenshot preview" onClose={() => setActiveImage(null)} onClick={(event) => { if (event.target === event.currentTarget) closeGallery(); }}>
        {activeImage && <div className="gallery-preview">
          <button type="button" className="gallery-close" onClick={closeGallery} aria-label="Close screenshot"><X size={22} aria-hidden="true" /></button>
          <Image src={activeImage.src} alt={activeImage.alt} width={1200} height={800} className="preview-image" />
          <p>{activeImage.alt}</p>
        </div>}
      </dialog>
    </section>
  );
}
