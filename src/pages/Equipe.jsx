import fondangleImage from '../assets/fondangle.png';

function Equipe() {
    return (
      <div style={{
        backgroundImage: `url(${fondangleImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        minHeight: '100vh',
        padding: '1rem',
        color: 'rgba(54, 46, 46, 0.4)',
        lineHeight: '1.6',
        textShadow: '0px 1px 1px #000',
      }}>
        <h1>Notre Équipe</h1>
        <p>
          Découvrez les membres de notre cabinet : infirmiers diplômés, passionnés et toujours à vos côtés.<br></br>-GUERY David<br></br>-ARGENCE Julie<br></br>-HUMBLOT Marion
          <br></br>-PRAT Chloé<br></br>-EXARTIER Anthony
        </p>
      </div>
    );
  }
  
  export default Equipe;