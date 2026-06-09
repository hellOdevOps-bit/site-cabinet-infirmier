import cabinetImage from '../assets/cabinet.jpg';
import MeteoWidget from '../components/MeteoWidget';
import Button from '../components/Button';
import { PHONE, PHONE_DISPLAY, EMAIL } from '../constants/contact';

function Accueil() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-content">
          <h1>Bienvenue au cabinet infirmier de Valence d'Albigeois</h1>
          <p className="page-intro">
            Soins infirmiers à domicile ou au cabinet, avec professionnalisme et bienveillance.
            Prise de rendez-vous 7j/7.
          </p>
          <div className="btn-group">
            <Button href={`tel:${PHONE}`} variant="primary">
              Appeler — {PHONE_DISPLAY}
            </Button>
            <Button href={`mailto:${EMAIL}`} variant="secondary">
              Envoyer un email
            </Button>
            <Button to="/contact" variant="secondary">
              Voir l'adresse
            </Button>
          </div>
        </div>
        <div>
          <img src={cabinetImage} alt="Cabinet infirmier de Valence d'Albigeois" className="hero-image" />
          <div className="meteo-sidebar">
            <MeteoWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
