import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Accueil from './pages/Accueil';
import Equipe from './pages/Equipe';
import Missions from './pages/Missions';
import Contact from './pages/Contact';
import Header from './components/Header';
import LiensUtiles from './pages/LiensUtiles';
import Footer from './components/Footer';
import MentionsLegales from './pages/MentionsLegales';

function App() {
  useEffect(() => {
    const trackClick = (event) => {
      const href = event.target.href;
      if (href && (href.startsWith("mailto:") || href.startsWith("tel:") || href.includes("google.com/maps"))) {
        window.gtag('event', 'click', {
          event_category: 'Contact',
          event_label: href,
        });
      }
    };

    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/liensutiles" element={<LiensUtiles />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;