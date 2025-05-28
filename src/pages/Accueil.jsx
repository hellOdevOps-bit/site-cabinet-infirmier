import cabinetImage from '../assets/cabinet.jpg';
import MeteoWidget from '../components/MeteoWidget.jsx';

function Accueil() {
    return (
      <div style={{ padding: '1rem' }}>
        <MeteoWidget/>
        <h1>Bienvenue sur le site de notre cabinet infirmier à Valence d'Albigeois !</h1>
        <img src={cabinetImage} alt="Cabinet infirmier" style={{ maxWidth: '75%', borderRadius: '12px', marginTop: '1rem' }} />
        <p>
          Nous sommes à votre écoute pour tous vos soins à domicile, avec professionnalisme et bienveillance, 7J/7.
        </p>
      </div>
    );
  }
  
  export default Accueil;