import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      textAlign: 'right',
      padding: '0.5rem',
      backgroundColor: '#e0f7fa',
      color: '#0077b6',
      fontSize: '0.7rem'
    }}>
      Site créé avec ❤️ par <strong>Hello_Dev0ps</strong> -
      <Link to="/mentions-legales"> Mentions légales</Link>
    </footer>
  );
}

export default Footer;