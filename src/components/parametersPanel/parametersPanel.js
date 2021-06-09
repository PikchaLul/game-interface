import React, { useMemo } from "react";
import Stat from "../stat";
import Ability from "../ability";
import styles from "./parametersPanel.module.css";

export default function ParametersPanel(props) {
  const { parameters } = props;

  const { stats, abilities } = useMemo(() => {
    const currentStats = Object.keys(parameters).map((parameter) => ({
      name: parameters[parameter].name,
      value: parameters[parameter].value,
    }));

    const currentAbilities = Object.keys(parameters).map(
      (parameter) => ({
        abilitiesClass: parameters[parameter].name,
        abilities: Object.keys(parameters[parameter].abilities).map((ability) => ({
          name: parameters[parameter].abilities[ability].name,
          value: parameters[parameter].abilities[ability].value,
        })),
      })
    );

    return { stats: currentStats, abilities: currentAbilities };
  }, [parameters]);

  return (
    <div className={styles.parametersPanel}>
      <div className={styles.stats}>
        <h2 className={styles.title}>Характеристики</h2>
        {stats.map((stat, index) => (
          <Stat key={index} stat={stat} />
        ))}
      </div>
      <div className={styles.abilities}>
        <h2 className={styles.title}>Способности</h2>
        {abilities.map((ability, index) => (
          <Ability key={index} ability={ability} />
        ))}
      </div>
    </div>
  );
}
