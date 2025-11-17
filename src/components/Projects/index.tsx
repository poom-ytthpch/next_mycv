"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Lock } from "lucide-react";
import { JSX, useRef, useState } from "react";
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
  Platfromio: <SiPlatformio size={size} />,
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
    name: "Charging Management System (Inprogress)",
    description:
      "This project is in progress. project name DocCharge is a Charging Management System for electric vehicle (EV) charging stations.",
    github: "https://github.com/poom-ytthpch/doc-charge",
    private: false,
    stacks: [
      "NextJS",
      "NestJS",
      "NodeJS",
      "MQTT",
      "Arduino",
      "Platfromio",
      "MariaDB",
      "Docker",
      "PM2",
      "Prisma",
      "Kafka",
      "Grpc",
      "Redis",
    ],
    images: ["/images/no-image.png"],
  },
  {
    name: "IoT Water Controller",
    description: "ESP32 + MQTT + Web control for irrigation and sensors.",
    github: "",
    private: true,
    stacks: [
      "NextJS",
      "NestJS",
      "NodeJS",
      "MQTT",
      "Arduino",
      "Platfromio",
      "MariaDB",
      "Docker",
      "PM2",
      "Prisma",
      "Nginx",
      "AntD",
    ],
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
    name: "Book Library",
    description:
      "This project is a library management system. can manage book and borrow.",
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

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  return (
    <section className="w-full py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        <motion.h1
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          MY PROJECTS
        </motion.h1>
      </h2>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
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
                  className="flex items-center mt-2 text-blue-500 hover:underline"
                >
                  <FaGithub size={16} className="mr-1" /> View on GitHub
                </a>
              )}
            </div>

            <div className="flex gap-3 mb-4 flex-wrap">
              {project.stacks.map((stack, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-sm"
                >
                  {stackIcons[stack]}
                </motion.div>
              ))}
            </div>

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
