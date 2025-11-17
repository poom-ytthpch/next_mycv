"use client";

import { motion, useInView } from "framer-motion";
import { JSX, useRef } from "react";
import { DiVisualstudio } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiPython,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMui,
  SiMqtt,
  SiTrpc,
  SiAntdesign,
  SiExpress,
  SiFastify,
  SiGraphql,
  SiRedis,
  SiGit,
  SiDocker,
  SiPostman,
  SiGithubactions,
  SiSonarqube,
  SiMysql,
  SiMariadb,
  SiPrisma,
  SiTypeorm,
  SiMongodb,
  SiArduino,
  SiPlatformio,
  SiSourcetree,
  SiOracle,
  SiPostgresql,
  SiApachekafka,
  SiNginx,
} from "react-icons/si";

type SkillType = {
  name: string;
  icon: JSX.Element;
};

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: SkillType[];
}) => {
  const refTitle = useRef(null);
  const refGrid = useRef(null);

  const inViewTitle = useInView(refTitle, { margin: "-10% 0px -10% 0px" });
  const inViewGrid = useInView(refGrid, { margin: "-10% 0px -10% 0px" });

  return (
    <section className="w-full max-w-5xl mt-10">
      <motion.h2
        ref={refTitle}
        className="text-2xl font-semibold mb-4 text-[light-dark(var(--white-accent),var(--dark-accent))]"
        initial={{ opacity: 0, x: -20 }}
        animate={inViewTitle ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>

      <motion.div
        ref={refGrid}
        className="flex flex-wrap gap-6"
        variants={{
          visible: {
            transition: { staggerChildren: 0.05 },
          },
        }}
        initial="hidden"
        animate={inViewGrid ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.15,
              y: -5,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="flex flex-col items-center justify-center p-3 rounded-2xl shadow-md hover:shadow-lg bg-white/80 backdrop-blur-sm"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-medium text-gray-700">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default function Skills() {
  const size = 50;

  const sections = [
    {
      title: "Languages",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript color="#f7df1e" size={size} />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript color="#3178c6" size={size} />,
        },
        { name: "SQL", icon: <SiMysql color="#00758f" size={size} /> },
        { name: "HTML", icon: <SiHtml5 color="#e34f26" size={size} /> },
        { name: "CSS/SCSS", icon: <SiCss3 color="#1572B6" size={size} /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" size={size} /> },
        { name: "Python", icon: <SiPython color="#3776ab" size={size} /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs size={size} /> },
        { name: "NestJS", icon: <SiNestjs color="#e0234e" size={size} /> },
        { name: "Node.js", icon: <SiNodedotjs color="#68A063" size={size} /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss color="#38B2AC" size={size} />,
        },
        { name: "MUI", icon: <SiMui color="#007FFF" size={size} /> },
        { name: "MQTT", icon: <SiMqtt color="#660066" size={size} /> },
        { name: "gRPC", icon: <SiTrpc color="#4285f4" size={size} /> },
        {
          name: "Ant Design",
          icon: <SiAntdesign color="#0170FE" size={size} />,
        },
        { name: "Express.js", icon: <SiExpress size={size} /> },
        { name: "Fastify", icon: <SiFastify color="#000000" size={size} /> },
        { name: "GraphQL", icon: <SiGraphql color="#E535AB" size={size} /> },
        { name: "Redis", icon: <SiRedis color="#D82C20" size={size} /> },
        { name: "Kafka", icon: <SiApachekafka color="#000000" size={size} /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "VS Code",
          icon: <DiVisualstudio color="#007ACC" size={size} />,
        },
        { name: "Git", icon: <SiGit color="#F05032" size={size} /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" size={size} /> },
        { name: "Postman", icon: <SiPostman color="#FF6C37" size={size} /> },
        { name: "Sequel Pro", icon: <SiMysql color="#00758f" size={size} /> },
        { name: "Broom RPC", icon: <SiTrpc color="#00BFA5" size={size} /> },
        {
          name: "SourceTree",
          icon: <SiSourcetree color="#2684FF" size={size} />,
        },
        {
          name: "Arduino IDE",
          icon: <SiArduino color="#00979D" size={size} />,
        },
        {
          name: "Platform IO",
          icon: <SiPlatformio color="#F68220" size={size} />,
        },
        {
          name: "GitHub Actions",
          icon: <SiGithubactions color="#2088FF" size={size} />,
        },
        {
          name: "SonarQube",
          icon: <SiSonarqube color="#4E9BCD" size={size} />,
        },
        {
          name: "Nginx",
          icon: <SiNginx color="#00979D" size={size} />,
        },
      ],
    },
    {
      title: "Databases & ORM",
      skills: [
        { name: "MySQL", icon: <SiMysql color="#00758f" size={size} /> },
        { name: "MariaDB", icon: <SiMariadb color="#003545" size={size} /> },
        { name: "Prisma", icon: <SiPrisma color="#0C344B" size={size} /> },
        { name: "TypeORM", icon: <SiTypeorm color="#E83524" size={size} /> },
        { name: "OracleDB", icon: <SiOracle color="#F80000" size={size} /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" size={size} /> },
        {
          name: "Postgresql",
          icon: <SiPostgresql color="#2088FF" size={size} />,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center py-20  w-full h-full">
      <motion.h1
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        MY SKILLS
      </motion.h1>

      {sections.map((section, index) => (
        <SkillSection
          key={index}
          title={section.title}
          skills={section.skills}
        />
      ))}
    </div>
  );
}
