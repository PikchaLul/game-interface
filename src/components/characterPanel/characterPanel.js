import React from "react";
import duellist from '../../images/duellist.jpg';
import styles from "./characterPanel.module.css";

export default function CharcterPanel(props) {
  const { character } = props;

  return (
    <div className={styles.characterPanel}>
      <div className={styles.character__name}>{character.name}</div>
      <div className={styles.character__information}>
        <div className={styles.character__container}>
          <img src={duellist} alt="duellist"></img>
          <div className={styles.character__stats}>
            <p>Жизненная сила: {character.stamina}</p>
            <p>Уклонение: {character.evasion}</p>
            <p>Энергичность: {character.energy}</p>
          </div>
        </div>
        <div className={styles.character__actions}>
          <button className={styles.action}>Ударить</button>
          <button className={styles.action}>Сохранить</button>
          <button className={styles.action}>Загрузить</button>
        </div>
      </div>
    </div>
  );
}
