import cabinetImage from '../assets/cabinet.jpg';
import MeteoWidget from '../components/MeteoWidget.jsx';

function Accueil() {
    return (
      <div style={{ padding: '1rem' }}>
        <MeteoWidget/>
        <h1>Bienvenue dans notre cabinet infirmier de Valence d'Albigeois !</h1>
          <p>
            Nous sommes à votre écoute pour tous vos soins infirmiers à domicile ou au cabinet, avec professionnalisme et bienveillance, prise de rendez-vous 7J/7.
          </p>
        <img src={cabinetImage} alt="Cabinet infirmier" style={{ maxWidth: '75%', borderRadius: '12px', marginTop: '1rem' }} />
      </div>
    );
  }
  
  export default Accueil;