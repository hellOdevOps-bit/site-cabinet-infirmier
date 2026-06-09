const LINKS = [
  {
    href: 'https://www.occitanie.ars.sante.fr/icope-un-programme-pour-prevenir-la-dependance',
    title: 'Programme ICOPE — ARS Occitanie',
    desc: "Prévenir la perte d'autonomie chez les personnes âgées",
  },
  {
    href: 'https://www.ameli.fr/tarn/infirmier/exercice-liberal/service-patient/prado',
    title: 'PRADO — Ameli Tarn',
    desc: 'Service de retour à domicile après hospitalisation',
  },
  {
    href: 'https://sante.gouv.fr/actualites/presse/communiques-de-presse/article/apres-plus-d-un-an-d-experimentation-les-autorites-sanitaires-perennisent-l',
    title: 'Certificat de décès par IDE',
    desc: 'Communiqué officiel du ministère de la Santé',
  },
  {
    href: 'https://annuairesante.ameli.fr/',
    title: 'Annuaire des professionnels de santé',
    desc: 'Trouver un professionnel de santé près de chez vous',
  },
  {
    href: 'https://www.ameli.fr/tarn/assure/sante/themes/covid-19/vaccination-contre-le-covid-19/vaccination-covid19',
    title: 'Vaccination Covid-19',
    desc: 'Informations sur la campagne 2025 — Ameli Tarn',
  },
  {
    href: 'https://www.ameli.fr/tarn/assure/sante/themes/grippe/vaccination-grippe',
    title: 'Vaccination grippe',
    desc: 'Informations sur la vaccination contre la grippe',
  },
];

function LiensUtiles() {
  return (
    <div className="container">
      <h1 className="page-title">Liens utiles</h1>
      <p className="page-intro">
        Ressources officielles en lien avec nos missions et l'information santé.
      </p>
      <ul className="links-list">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
              <span className="link-card-desc">{link.desc}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LiensUtiles;
