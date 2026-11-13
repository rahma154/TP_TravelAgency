import styles from "./Destination.module.css";
import { useState } from "react";

function Destination(props) {
  const [afficher, setAfficher] = useState(false);
  const [favoris, setFavoris] = useState(false);

  function toggleAfficher() {
    setAfficher((current) => !current);
  }

  function toggleFavoris() {
    setFavoris((current) => !current);
  }

  return (
    <article className={styles.destination}>
      <img className={styles.image} src={props.image} alt={props.nom} />
      <h2 className={styles.titre}>{props.nom}</h2>
      <h3 className={styles.pays}>{props.pays}</h3>

      <div>
        <button type="button" onClick={toggleAfficher}>
          {afficher ? "Masquer" : "Afficher"}
        </button>

        <button type="button" onClick={toggleFavoris} aria-label="Ajouter aux favoris">
          {favoris ? "❤️" : "🤍"}
        </button>
      </div>

      {afficher && <p className={styles.description}>{props.description}</p>}
      <h3 className={styles.prix}>{props.prix} DT</h3>
    </article>
  );
}

export default Destination;
