import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="logo">Cabinet Infirmier de la place du foirail</div>

      <button className="burger" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link>
        <Link to="/equipe" onClick={() => setIsOpen(false)}>Équipe</Link>
        <Link to="/missions" onClick={() => setIsOpen(false)}>Missions</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/liensutiles" onClick={() => setIsOpen(false)}>Liens Utiles</Link>
      </nav>
    </header>
  );
}

export default Header;