import { useState, type JSX } from 'react';
import { CiMail } from 'react-icons/ci';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaLock, FaGlobe, FaCode } from 'react-icons/fa6';
import './Hub.css';
import './Card.css';
import './Animations.css';

type LinkItem = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  url: string;
  color: string;
};

type SocialItem = {
  icon: JSX.Element;
  url: string;
  label: string;
};

type CardProps = {
  item: LinkItem;
  isPrivate: boolean;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
};

const Card = ({ item, isPrivate, hovered, onHover, onLeave }: CardProps) => (
  <a
    href={item.url}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`card ${hovered ? 'card-hovered' : ''}`}
  >
    <div className={`card-inner card-${item.color}`}>
      <div className="card-shine" />

      <div className="card-indicator">
        {isPrivate ? (
          <FaLock className="indicator-icon" />
        ) : (
          <FaGlobe className="indicator-icon" />
        )}
      </div>

      <div className="card-content">
        <div className="card-icon-wrapper">{item.icon}</div>
        <h3 className="card-title">
          {item.title}
          <FaExternalLinkAlt className="external-icon" />
        </h3>
        <p className="card-description">{item.description}</p>
      </div>

      <div className="card-border-glow" />
    </div>
  </a>
);


export default function SantiagoHub() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const [particles] = useState(() => {
    return [...Array(20)].map((_, i) => {
      const size = Math.random() * 100 + 50;
      return {
        id: i,
        width: size,
        height: size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5
      };
    });
  });


  const publicLinks: LinkItem[] = [
    {
      id: 'portfolio',
      title: 'Portafolio',
      description: 'Mi portafolio personal y proyectos destacados',
      icon: <FaCode className="card-icon" />,
      url: 'https://portfolio.santimendoza.com',
      color: 'orange-red'
    }
  ];

  const privateLinks: LinkItem[] = [
  ];

  const socialLinks: SocialItem[] = [
    { icon: <FaGithub className="social-icon" />, url: 'https://github.com/pro0072006', label: 'GitHub' },
    { icon: <FaLinkedin className="social-icon" />, url: 'https://linkedin.com/in/david-santiago-mendoza-yasno', label: 'LinkedIn' },
    { icon: <CiMail className="social-icon" />, url: 'mailto:santiagoyasno@gmail.com', label: 'Email' }
  ];

  return (
    <div className="hub-container">
      <div className="background-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      <div className="hub-content">
        <header className="hub-header">
          <div className="header-title-wrapper">
            <div className="header-glow" />
            <h1 className="header-title">Santiago Mendoza</h1>
          </div>
          <p className="header-subtitle">Software Developer | Backend Specialist</p>

          <div className="social-links">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </header>

        <section className="section">
          <div className="section-header">
            <FaGlobe className="section-icon section-icon-public" />
            <h2 className="section-title">Público</h2>
          </div>
          <div className="cards-grid cards-grid-public">
            {publicLinks.map((item) => (
              <Card
                key={item.id}
                item={item}
                isPrivate={false}
                hovered={hoveredCard === item.id}
                onHover={() => setHoveredCard(item.id)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <FaLock className="section-icon section-icon-private" />
            <h2 className="section-title">Privado</h2>
            <span className="section-badge">(Requiere autenticación)</span>
          </div>

          <div className="cards-grid cards-grid-private">
            {privateLinks.map((item) => (
              <Card
                key={item.id}
                item={item}
                isPrivate={true}
                hovered={hoveredCard === item.id}
                onHover={() => setHoveredCard(item.id)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </section>

        <footer className="hub-footer">
          <div className="footer-divider" />
          <p className="footer-text">© 2025 Santiago Mendoza. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}
