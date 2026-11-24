"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function MenuBar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";
  return (
    <header className="site-header">
      <div className="site-shell nav-inner">
        <a href="#about" className="wordmark" aria-label="Yutthapichai home">
          <span className="wordmark-symbol">YC</span><span className="wordmark-name">Yutthapichai<span>.</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button type="button" className="theme-toggle" onClick={() => setTheme(dark ? "light" : "dark")} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title={dark ? "Light theme" : "Dark theme"} disabled={!mounted}>
            {dark ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
          </button>
        </nav>
      </div>
    </header>
  );
}
