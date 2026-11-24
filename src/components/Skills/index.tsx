"use client";

import { JSX } from "react";
import { DiVisualstudio } from "react-icons/di";
import { Code2 } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCplusplus,
  SiPython,
  SiNextdotjs,
  SiReact,
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
  SiMysql,
  SiMariadb,
  SiPrisma,
  SiTypeorm,
  SiMongodb,
  SiArduino,
  SiPlatformio,
  SiSourcetree,
  SiPostgresql,
  SiApachekafka,
  SiRabbitmq,
  SiKubernetes,
  SiEspressif,
  SiPrefect,
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
  return (
    <section className="skill-group">
      <h3>{title}</h3>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-chip">
            <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default function Skills() {
  const size = 18;

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
        { name: "CSS/SCSS", icon: <Code2 color="#1572B6" size={size} /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" size={size} /> },
        { name: "Python", icon: <SiPython color="#3776ab" size={size} /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: <SiReact color="#149ECA" size={size} /> },
        { name: "Next.js", icon: <SiNextdotjs size={size} /> },
        { name: "NestJS", icon: <SiNestjs color="#e0234e" size={size} /> },
        { name: "Node.js", icon: <SiNodedotjs color="#68A063" size={size} /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss color="#38B2AC" size={size} />,
        },
        { name: "MUI", icon: <SiMui color="#007FFF" size={size} /> },
        { name: "gRPC", icon: <SiTrpc color="#4285f4" size={size} /> },
        {
          name: "Ant Design",
          icon: <SiAntdesign color="#0170FE" size={size} />,
        },
        { name: "Express.js", icon: <SiExpress size={size} /> },
        { name: "Fastify", icon: <SiFastify color="#000000" size={size} /> },
        { name: "GraphQL", icon: <SiGraphql color="#E535AB" size={size} /> },
        { name: "REST APIs", icon: <Code2 size={size} /> },
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
          icon: <Code2 color="#4E9BCD" size={size} />,
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
        { name: "SQL Server", icon: <SiMysql size={size} /> },
        { name: "Redis", icon: <SiRedis color="#D82C20" size={size} /> },
        { name: "MySQL", icon: <SiMysql color="#00758f" size={size} /> },
        { name: "MariaDB", icon: <SiMariadb color="#003545" size={size} /> },
        { name: "Prisma", icon: <SiPrisma color="#0C344B" size={size} /> },
        { name: "TypeORM", icon: <SiTypeorm color="#E83524" size={size} /> },
        { name: "OracleDB", icon: <Code2 color="#F80000" size={size} /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" size={size} /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql color="#2088FF" size={size} />,
        },
      ],
    },
    {
      title: "Messaging & Event-Driven Systems",
      skills: [
        { name: "Kafka", icon: <SiApachekafka size={size} /> },
        { name: "RabbitMQ", icon: <SiRabbitmq color="#FF6600" size={size} /> },
        { name: "Azure Service Bus", icon: <Code2 color="#0078D4" size={size} /> },
        { name: "MQTT", icon: <SiMqtt color="#660066" size={size} /> },
      ],
    },
    {
      title: "Data Engineering, Cloud & DevOps",
      skills: [
        { name: "Prefect", icon: <SiPrefect color="#024DFD" size={size} /> },
        { name: "Kubernetes / AKS", icon: <SiKubernetes color="#326CE5" size={size} /> },
        ...["ETL / ELT", "Batch Processing", "Data Reconciliation", "Real-Time Processing", "Microsoft Azure", "Azure Blob Storage", "Tencent Cloud", "CI/CD"].map((name) => ({ name, icon: <Code2 size={size} /> })),
      ],
    },
    {
      title: "Embedded & Industrial IoT",
      skills: [
        { name: "ESP32-S3", icon: <SiEspressif color="#E7352C" size={size} /> },
        ...["ESP-IDF", "FreeRTOS", "LVGL", "Modbus RTU / RS-485", "OTA Firmware"].map((name) => ({ name, icon: <Code2 size={size} /> })),
      ],
    },
    {
      title: "Engineering & Quality",
      skills: ["System Design", "Microservices", "Unit Testing", "API Integration", "Production Troubleshooting", "Performance Optimization"].map((name) => ({ name, icon: <Code2 size={size} /> })),
    },
  ];

  return (
    <section id="skills" className="portfolio-section">
      <div className="section-heading">
        <div><p className="eyebrow">02 / TOOLKIT</p><h2>Technical skills.</h2></div>
        <p>Tools and technologies across the full software lifecycle.</p>
      </div>
      <div className="skills-grid">
        {sections.map((section) => (
          <SkillSection key={section.title} title={section.title} skills={section.skills} />
        ))}
      </div>
    </section>
  );
}
