import { Link } from 'react-router-dom';
import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS_SHORT } from '../constants/contact';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-contact">
        <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
        {' · '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        {' · '}
        {ADDRESS_SHORT}
      </p>
      <p className="footer-credit">
        Site créé par <strong>Hello_Dev0ps</strong> —{' '}
        <Link to="/mentions-legales">Mentions légales</Link>
      </p>
    </footer>
  );
}

export default Footer;
