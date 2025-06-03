import instrumentsImage from '../assets/instruments.jpg';

function Missions() {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Nos Missions :</h1>
          <p>Soins techniques, injections, perfusions, pansements, accompagnement dans vos soins d'hygiène ou suivi médicamenteux personnalisé : notre mission est de vous soigner avec humanité et respect de la dignité.</p>
      <img src={instrumentsImage} alt="Instruments" style={{ maxWidth: '50%', borderRadius: '6px', marginTop: '1rem' }} />
        <h2>Formation continue</h2>
          <p>Dans une démarche d'accompagnement optimale dans les soins, notre équipe se forme régulièrement ou remet à jour ses connaisances en termes de bonnes pratiques.<br></br>
            Nous avons donc effectué plusieurs formations :</p>
        <h3>- PRADO Cardio</h3>
          <p>Notre cabinet infirmier est formé au PRADO Cardio (Programme de Retour À Domicile – pathologies cardiovasculaires), un dispositif de l’Assurance Maladie qui permet d'assurer un suivi coordonné, humain et sécurisé après une hospitalisation pour un problème cardiaque (infarctus, insuffisance cardiaque, etc.).<br></br>
            Concrètement, nous intervenons à domicile dès la sortie d’hospitalisation pour :<br></br>
        <br></br>
        - Surveiller les constantes (tension artérielle, pulsations cardiaque, saturation en oxygène) et l'état clinique,<br></br>
        <br></br>
        - Accompagner la prise des traitements prescrits,<br></br>
        <br></br>
        - Renforcer l’éducation thérapeutique (hygiène de vie, régime, activité),<br></br>
        <br></br>
        - Assurer une coordination fluide avec le médecin traitant et les cardiologues.<br></br>
        <br></br>
        Objectif : éviter les réhospitalisations, détecter les signes d’alerte précocement, et garantir un retour à la maison en toute sérénité.<br></br>
        <br></br>
        Nous travaillons main dans la main avec les équipes hospitalières et médicales pour que vous ne soyez jamais seuls dans votre convalescence.</p>
        <h3>- ICOPE</h3>
          <p>Notre cabinet infirmier participe au programme ICOPE (Integrated Care for Older People), un dispositif porté par l’OMS et développé en France pour accompagner le vieillissement en bonne santé.<br></br>
            Ce programme innovant permet d’anticiper la perte d’autonomie chez les personnes âgées, grâce à un repérage précoce de 6 fonctions clés :<br></br>
        - La mobilité,<br></br>
        <br></br>
        - La mémoire,<br></br>
        <br></br>
        - La nutrition,<br></br>
        <br></br>
        - La vision,<br></br>
        <br></br>
        - L’audition,<br></br>
        <br></br>
        - Le bien-être mental.<br></br>
        <br></br>
        Lors de nos passages à domicile, nous réalisons des évaluations simples et régulières qui permettent :<br></br>
        <br></br>
        - D’identifier d’éventuelles fragilités,<br></br>
        <br></br>
        - D’alerter le médecin traitant en cas de besoin,<br></br>
        <br></br>
        -De mettre en place un accompagnement personnalisé en lien avec les autres professionnels de santé.<br></br>
        <br></br>
        Objectif : maintenir l’autonomie à domicile le plus longtemps possible, en repérant les signaux faibles avant que la dépendance ne s’installe.<br></br>
        <br></br>
        Parce que bien vieillir, c’est aussi être bien entouré, nous sommes là pour accompagner chaque étape.</p>
        <h3>- Constatation de décès et rédaction du certifcat de décès</h3>
         <p>D'après le Décret n° 2025-371 du 22 avril 2025 relatif aux conditions de l'établissement des certificats de décès par les infirmiers diplômés d'Etat, et compte tenu de la pénurie de médecins traitants, <br></br>
            nous sommes autorisés et formés à constater les décès non violents et non suspects de personnes majeures ainsi que d'en établir le certificat.<br></br><br></br>
            Cette démarche permet aux autorités sanitaires de réduire les délais d’attente imposés aux familles, afin de pouvoir engager les démarches funéraires dans les meilleurs délais, <br></br>
            et d’accompagner pleinement les proches des personnes décédées dans le deuil.</p>
      </div>
    );
  }
  
  export default Missions;