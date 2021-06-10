import React from "react";
import styles from "./abilityItem.module.css";

const abilityMask = {
  0: {
    level: "Уровень 0: Нетренированный",
  },
  1: {
    level: "Уровень 1: Новичок",
  },
  2: {
    level: "Уровень 2: Ученик",
  },
  3: {
    level: "Уровень 3: Адепт",
  },
  4: {
    level: "Уровень 4: Эксперт",
  },
  5: {
    level: "Уровень 5: Мастер",
  },
};

export default function AbilityItem({ abilityKey, name, value, train }) {
  return (
    <div className={styles.abilityItem}>
      <span className={styles.abilityItem__name}>{name}</span>
      <div className={styles.abilityItem__level}>
        {abilityMask[value].level}
      </div>
      <div className={styles.actions}>
        <button className={styles.action} onClick={() => train(abilityKey)}>
          Тренировать
        </button>
      </div>
    </div>
  );
}
