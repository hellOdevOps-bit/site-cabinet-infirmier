import stethoImage from '../assets/stetho.png';

function Contact() {
    return (
      <div style={{
        backgroundImage: `url(${stethoImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
        minHeight: '100vh',
        padding: '1rem',
        color: '#000',
        textShadow: '1px 1px 3px #000',
      }}>
        <h1>Pour nous contacter ou prendre un rdv :</h1>
        <p>
        Adresse mail :{''} <a href="mailto:cabinfivalence81@gmail.com" style={{ color: '#0000FF', textDecoration: 'underline'}}> cabinfivalence81@gmail.com</a><br></br>
        <br></br>Numéro de téléphone :{''} <a href="tel:0563455754" style={{ color: '#0000FF', textDecoration: 'underline'}}> 0563455754</a><br></br>
        <br></br>Adresse : 80, Grand Rue 81340 VALENCE D'ALBIGEOIS 
        </p>
      </div>
    );
  }
  
  export default Contact;