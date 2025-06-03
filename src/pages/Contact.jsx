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
      }}>
        <h1>Pour nous contacter ou prendre un rdv :</h1>
        <p>
        Adresse mail :{''} <a href="mailto:cabinfivalence81@gmail.com" style={{ color: '#0000FF', textDecoration: 'underline'}}> cabinfivalence81@gmail.com</a><br></br>
        <br></br>Numéro de téléphone :{''} <a href="tel:0563455754" style={{ color: '#0000FF', textDecoration: 'underline'}}> 0563455754</a><br></br>
        <br></br>Adresse : 80, Grand Rue 81340 VALENCE D'ALBIGEOIS
        </p>
  <iframe
    title="Cabinet Infirmier Valence"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2869.027563046941!2d2.405510376683401!3d44.020824928575806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1748940664271!5m2!1sfr!2sfr"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    );
  }
  
  export default Contact;