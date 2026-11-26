import Image from "next/image";
import { ArrowDownToLine, ArrowUpRight, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import MenuBar from "@/components/menu-bar";
import MyProjects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <MenuBar />
      <main id="main" className="site-shell">
        <section id="about" className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> SOFTWARE ENGINEER · THAILAND</p>
            <h1>Hi, I’m<br /><span>Yutthapichai.</span></h1>
            <p className="hero-role">Full-Stack Software Engineer</p>
            <p className="hero-description">
              5+ years of experience building enterprise applications, backend
              microservices, event-driven data integrations and industrial IoT
              platforms. Focused on reliable production systems, scalable APIs
              and cloud-native deployments across UAT and Production (PRD).
            </p>
            <div className="hero-actions">
              <a href="/YutthapichaiCV.pdf" download className="action action-primary">
                <ArrowDownToLine size={18} aria-hidden="true" /> Download Resume
              </a>
              <a href="/Yutthapichai-Cover-Letter.pdf" download className="action action-secondary">
                <FileText size={18} aria-hidden="true" /> Cover Letter
              </a>
              <a href="https://github.com/poom-ytthpch" target="_blank" rel="noopener noreferrer" className="action action-quiet">
                <FaGithub size={18} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <Image src="/images/yutthapichai.png" alt="Yutthapichai Chaiwong" width={400} height={400} priority className="portrait-image" />
            </div>
            <div className="portrait-caption"><span>YUTTHAPICHAI CHAIWONG</span><span>Full-stack · Backend · IoT</span></div>
          </div>
        </section>
        <div className="focus-strip" aria-label="Areas of expertise">
          <span>01 <strong>Full-stack applications</strong></span>
          <span>02 <strong>Distributed systems & data</strong></span>
          <span>03 <strong>Industrial IoT</strong></span>
        </div>
        <MyProjects />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="site-shell footer-inner">
          <span>Yutthapichai Chaiwong · Software Engineer</span>
          <a href="#about" className="text-link">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
