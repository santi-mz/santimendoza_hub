import { Github, Linkedin, Mail } from "lucide-react";
import { social } from "../data/profile";
import "./Nav.css";

const sections = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner wrap">
        <a href="#top" className="nav__mark" aria-label="Santiago Mendoza, back to top">
          <img src="/mark.svg" alt="" width={28} height={28} />
          <span>santiago mendoza</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {sections.map((s) => (
            <a key={s.href} href={s.href}>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="nav__social">
          <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={17} strokeWidth={1.75} />
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} strokeWidth={1.75} />
          </a>
          <a href={`mailto:${social.email}`} aria-label="Email">
            <Mail size={17} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </header>
  );
}
