import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaLine } from "react-icons/fa";

const socials = [
  { name: "GitHub", href: "https://github.com/poom-ytthpch", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/poom-ytthpch", icon: FaLinkedin },
  { name: "LINE", href: "https://line.me/ti/p/TBDDcThpqb", icon: FaLine },
];

export default function Contact() {
  return (
    <section id="contact" className="portfolio-section contact-section">
      <div className="section-heading">
        <div><p className="eyebrow">03 / GET IN TOUCH</p><h2>Let’s connect.</h2></div>
        <p>For software engineering opportunities and project discussions.</p>
      </div>
      <div className="contact-panel">
        <div className="contact-details">
          <a href="mailto:ch.yutthapichai@gmail.com" className="contact-row">
            <span className="contact-icon"><Mail size={21} aria-hidden="true" /></span>
            <span><span className="contact-label">EMAIL</span><strong>ch.yutthapichai@gmail.com</strong></span>
          </a>
          <a href="tel:+66802084855" className="contact-row">
            <span className="contact-icon"><Phone size={21} aria-hidden="true" /></span>
            <span><span className="contact-label">PHONE</span><strong>+66 80-208-4855</strong></span>
          </a>
          <div className="contact-row">
            <span className="contact-icon"><MapPin size={21} aria-hidden="true" /></span>
            <span><span className="contact-label">LOCATION</span><strong>1198/562 Origin Play Sri Udom Station Bangkok, Thailand</strong></span>
          </div>
        </div>
        <div className="contact-socials">
          <p className="eyebrow">FIND ME ONLINE</p>
          {socials.map(({name, href, icon: Icon}) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="social-row"><Icon size={20} aria-hidden="true" /><span>{name}</span><ArrowUpRight size={17} aria-hidden="true" /></a>)}
        </div>
      </div>
    </section>
  );
}
