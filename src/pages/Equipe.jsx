const TEAM = [
  { name: 'Marion HUMBLOT', role: 'Infirmière' },
  { name: 'Julie ARGENCE', role: 'Infirmière' },
  { name: 'Anthony EXARTIER', role: 'Infirmier' },
  { name: 'Chloé PRAT', role: 'Infirmière' },
  { name: 'David GUERY', role: 'Infirmier' },
];

function Equipe() {
  return (
    <div className="container">
      <h1 className="page-title">Notre équipe</h1>
      <p className="page-intro">
        Cinq infirmiers diplômés d'État, passionnés et toujours à vos côtés.
      </p>
      <div className="card-grid">
        {TEAM.map((member) => (
          <div key={member.name} className="card">
            <p className="card-title">{member.name}</p>
            <p className="card-subtitle">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipe;
