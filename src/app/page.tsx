"use client";
import MenuBar from "@/components/menu-bar";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div className="bg-gray-100 dark:bg-gray-900 h-screen p-4">
      <MenuBar handleSetTheme={handleSetTheme} theme={String(theme)} />
     
      <div className="pt-4">
        <div>Hello world</div>
        <div className="dark:text-green-200 text-blue-800  ">Custom color</div>
      </div>
    </div>
  );
}
