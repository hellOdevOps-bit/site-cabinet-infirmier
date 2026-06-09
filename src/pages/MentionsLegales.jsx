function MentionsLegales() {
  return (
    <div className="container">
      <h1 className="page-title">Mentions légales & RGPD</h1>

      <section className="legal-section">
        <h2>Éditeur du site</h2>
        <p>
          Hello_Dev0ps —{' '}
          <a href="https://github.com/hellOdevOps-bit" target="_blank" rel="noopener noreferrer">
            hellOdevOps-bit
          </a>
        </p>
      </section>

      <section className="legal-section">
        <h2>Responsable de la publication</h2>
        <p>
          Hello_Dev0ps<br />
          Profession : Développeur full-stack<br />
          Email : hello_dev0ps@protonmail.com
        </p>
      </section>

      <section className="legal-section">
        <h2>Hébergement</h2>
        <p>
          Vercel Inc.<br />
          Site web :{' '}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            vercel.com
          </a>
        </p>
      </section>

      <section className="legal-section">
        <h2>Collecte des données</h2>
        <p>
          Aucune donnée personnelle n'est collectée à votre insu. Les données collectées par
          Google Analytics sont anonymisées et utilisées uniquement à des fins statistiques.
        </p>
      </section>

      <section className="legal-section">
        <h2>Cookies</h2>
        <p>
          Ce site utilise des cookies de mesure d'audience (Google Analytics), uniquement après
          acceptation via la bannière de consentement. Aucune donnée publicitaire n'est collectée.
        </p>
      </section>

      <section className="legal-section">
        <h2>Droit d'accès, de modification et de suppression</h2>
        <p>
          Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression de
          vos données en écrivant à{' '}
          <a href="mailto:cabinfivalence81@gmail.com">cabinfivalence81@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}

export default MentionsLegales;
