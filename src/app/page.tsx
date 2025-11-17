"use client";
import dynamic from "next/dynamic";
import MenuBar from "@/components/menu-bar";
import { useTheme } from "next-themes";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import { LettersPullUp } from "@/components/words/letter-pull-up";
import { WordsPullUp } from "@/components/words/word-pull-up";
import MyProjects from "@/components/Projects";
import { FaGithub } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { getDefaultTheme } from "@/utils/get-default-theme";

const Skills = dynamic(() => import("@/components/Skills"));

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTheme(getDefaultTheme());
    setMounted(true);
  }, []);

  if (!mounted) return null; // ป้องกัน hydration error

  const handleSetTheme = (): string => {
    setTheme(theme === "dark" ? "light" : "dark");
    return theme === "dark" ? "light" : "dark";
  };

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="@container">
      <link rel="icon" href="/yc_bg.png" />

      <div
        className={`bg-[light-dark(var(--white-background),var(--dark-background))] p-4 text-[light-dark(var(--white-text),var(--dark-text))] ${poppins.className} `}
      >
        <MenuBar
          handleSetTheme={handleSetTheme}
          onScrollToSkill={() => scrollToSection(skillRef)}
          onScrollToProject={() => scrollToSection(projectRef)}
          theme={String(theme)}
        />

        <div className="flex items-center justify-center flex-col lg:flex-row lg:justify-center p-4 mt-10 lg:mt-28">
          <div className="">
            <Image
              src="/images/yutthapichai.png"
              alt="Picture of the author"
              width={300}
              height={300}
              className=" bg-linear-to-t from-[light-dark(var(--white-accent),var(--dark-accent))] to-[light-dark(var(--white-background),var(--dark-background))] rounded-4xl to-50% lg:mr-10"
            />
          </div>

          <div className="inline mt-10 lg:mt-0">
            <div className="text-4xl font-bold">
              <WordsPullUp text="Hi, I'm" className="text-center" />
              <LettersPullUp
                text="Yutthapichai"
                className="text-[light-dark(var(--white-accent),var(--dark-accent))]"
              />
            </div>
            <div className="mt-4">
              <LettersPullUp
                text="I'm a Full Stack Developer"
                className="lg:text-3xl md:text-2xl text-sm"
              />
            </div>

            <div className="mt-4 flex w-full justify-around">
              <a
                href="/YutthapichaiCV.pdf"
                target="_blank"
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                <IoIosCloudDownload size={16} className="mr-2" />
                Download My CV
              </a>
              <a
                href={"https://github.com/poom-ytthpch"}
                target="_blank"
                className="flex items-center mt-2 text-blue-500 hover:underline"
              >
                <FaGithub size={16} className="mr-1" /> View my GitHub
              </a>
            </div>
          </div>
        </div>

        <div
          ref={skillRef}
          className="flex items-center justify-center flex-col lg:flex-row lg:justify-center p-4 mt-4"
        >
          <Skills />
        </div>

        <div
          ref={projectRef}
          className="flex items-center justify-center flex-col lg:flex-row lg:justify-center p-4"
        >
          <MyProjects />
        </div>
      </div>
    </div>
  );
}
