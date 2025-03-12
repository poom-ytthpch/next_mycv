"use client";
import MenuBar from "@/components/menu-bar";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { LettersPullUp } from "@/components/words/letter-pull-up";
import { WordsPullUp } from "@/components/words/word-pull-up";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ป้องกัน hydration error

  const handleSetTheme = (): string => {
    setTheme(theme === "dark" ? "light" : "dark");
    return theme === "dark" ? "light" : "dark";
  };

  return (
    <div className="@container">
      <div
        className={`bg-[light-dark(var(--white-background),var(--dark-background))] h-screen p-4 text-[light-dark(var(--white-text),var(--dark-text))] ${poppins.className} `}
      >
        <MenuBar handleSetTheme={handleSetTheme} theme={String(theme)} />

        <div className="flex items-center justify-center flex-col lg:flex-row lg:justify-evenly p-4">
          <div className="">
            <Image
              src="/images/yutthapichai.png"
              alt="Picture of the author"
              width={300}
              height={300}
              className=" bg-linear-to-t from-[light-dark(var(--white-accent),var(--dark-accent))] to-[light-dark(var(--white-background),var(--dark-background))] rounded-4xl to-50%"
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
          </div>
        </div>
      </div>
    </div>
  );
}
