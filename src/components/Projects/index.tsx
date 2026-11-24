"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Lock } from "lucide-react";
import { JSX, useState } from "react";
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
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="w-full py-16 px-6">
      <div className="text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          MY PROJECTS
        </motion.h2>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-3xl p-6 shadow-lg h-full bg-white/80 dark:bg-black/40 backdrop-blur-sm"
          >
            <div className="mb-3">
              <h3 className="text-2xl font-semibold text-[light-dark(var(--white-accent),var(--dark-accent))]">
                {project.name}
              </h3>
              <p className="text-sm mt-1 text-[light-dark(var(--white-accent-secondary),var(--dark-accent-secondary))]">
                {project.description}
              </p>

              {project.private ? (
                <div className="flex items-center mt-2 text-[light-dark(var(--white-accent),var(--dark-accent))]">
                  <Lock size={16} className="mr-1" /> Private Project
                </div>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-2 text-blue-500 hover:underline"
                >
                  <FaGithub size={16} className="mr-1" /> View on GitHub
                </a>
              )}
            </div>

            <div className="flex gap-3 mb-4 flex-wrap">
              {project.stacks.map((stack) => (
                <motion.div
                  key={stack}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 p-2 text-xs bg-gray-200 dark:bg-gray-700 rounded-lg shadow-sm"
                >
                  {stackIcons[stack]}
                  <span>{stack}</span>
                </motion.div>
              ))}
            </div>

            {project.images.length > 0 && (
            <div className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth p-2">
              {project.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setActiveImage(img)}
                  className="relative shrink-0 w-[300px] h-[200px] rounded-xl overflow-hidden shadow-md cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`${project.name} ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
            )}
          </motion.div>
        ))}
      </div>

      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full p-4"
          >
            <Image
              src={activeImage}
              alt="preview"
              width={1200}
              height={800}
              className="rounded-xl object-contain w-full"
              onClick={() => setActiveImage(null)}
            />

            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-lg shadow"
            >
              ✕ Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
