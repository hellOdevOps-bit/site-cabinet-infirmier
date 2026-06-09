import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { PHONE, PHONE_DISPLAY } from '../constants/contact';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/equipe', label: 'Équipe' },
  { to: '/missions', label: 'Missions' },
  { to: '/contact', label: 'Contact' },
  { to: '/liensutiles', label: 'Liens utiles' },
];

function NavLink({ to, label, onClick }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link to={to} className={isActive ? 'active' : ''} onClick={onClick}>
      {label}
    </Link>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          Cabinet Infirmier<br />Valence d'Albigeois
        </Link>

        <nav className="nav-desktop" aria-label="Navigation principale">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} label={label} />
          ))}
        </nav>

        <Button href={`tel:${PHONE}`} variant="primary" size="sm" className="header-cta">
          {PHONE_DISPLAY}
        </Button>

        <button
          className="burger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <nav className={`nav-mobile ${isOpen ? 'open' : ''}`} aria-label="Navigation mobile">
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink key={to} to={to} label={label} onClick={closeMenu} />
        ))}
        <Button href={`tel:${PHONE}`} variant="primary" onClick={closeMenu}>
          Appeler — {PHONE_DISPLAY}
        </Button>
      </nav>
    </header>
  );
}

export default Header;
