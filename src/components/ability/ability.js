import React from "react";
import styles from "./ability.module.css";
import AbilityItem from "./abilityItem";

export default function Ability(props) {
  const { abilitiesClass, abilities, train } = props.ability;

  return (
    <div className={styles.ability}>
      <div className={styles.ability__information}>
        <h3>{abilitiesClass}</h3>
      </div>
      {abilities.map(({ name, value }, index) => (
        <AbilityItem key={index} name={name} value={value} train={train} />
      ))}
    </div>
  );
}
