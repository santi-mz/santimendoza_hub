import { useState } from 'react';
import { Home, Search, Mail } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
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


  return (
    <div className="notfound-container">
      <div className="notfound-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="notfound-particle"
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

      <div className="notfound-content">
        <div className="notfound-header">
          <div className="notfound-number-wrapper">
            <div className="notfound-glow" />
            <h1 className="notfound-number">404</h1>
          </div>

          <h2 className="notfound-title">Página no encontrada</h2>
          <p className="notfound-description">
            Lo siento, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="notfound-actions">
          <a href="/" className="notfound-button notfound-button-primary">
            <Home className="button-icon" />
            Volver al inicio
          </a>
        </div>

        <div className="notfound-suggestions">
          <p className="suggestions-title">¿Qué puedes hacer?</p>
          <div className="suggestions-grid">
            <div className="suggestion-card">
              <Search className="suggestion-icon" />
              <h3 className="suggestion-title">Buscar</h3>
              <p className="suggestion-text">Verifica la URL o busca desde el inicio</p>
            </div>
            <div className="suggestion-card">
              <Home className="suggestion-icon" />
              <h3 className="suggestion-title">Ir al Hub</h3>
              <p className="suggestion-text">Explora todos los proyectos disponibles</p>
            </div>
            <div className="suggestion-card">
              <Mail className="suggestion-icon" />
              <h3 className="suggestion-title">Contacto</h3>
              <p className="suggestion-text">¿Crees que esto es un error? Contáctame</p>
            </div>
          </div>
        </div>

        <footer className="notfound-footer">
          <p className="notfound-footer-text">
            © 2025 Santiago Mendoza
          </p>
        </footer>
      </div>
    </div>
  );
}
