import React, { useMemo } from "react";
import { connect } from "react-redux";
import Stat from "../stat";
import Ability from "../ability";
import InitParametersForm from "./initParametersForm";
import styles from "./parametersPanel.module.css";

const ParametersPanel = ({
  showNewCharacter,
  createNewCharacter,
  parameters,
}) => {
  const { stats, abilities } = useMemo(() => {
    const currentStats = Object.keys(parameters).map((parameter) => ({
      key: parameter,
      name: parameters[parameter].name,
      value: parameters[parameter].value,
    }));

    const currentAbilities = Object.keys(parameters).map((parameter) => ({
      parameterKey: parameter,
      abilitiesClass: parameters[parameter].name,
      abilities: Object.keys(parameters[parameter].abilities).map(
        (ability) => ({
          key: ability,
          name: parameters[parameter].abilities[ability].name,
          value: parameters[parameter].abilities[ability].value,
        })
      ),
    }));

    return { stats: currentStats, abilities: currentAbilities };
  }, [parameters]);

  return (
    <div className={styles.parametersPanel}>
      {showNewCharacter ? (
        <InitParametersForm createNewCharacter={createNewCharacter}/>
      ) : (
        <div className={styles.stats}>
          <h2 className={styles.title}>Характеристики</h2>
          {stats.map((stat, index) => (
            <Stat key={index} stat={stat} />
          ))}
        </div>
      )}
      {!showNewCharacter ? (
        <div className={styles.abilities}>
          <h2 className={styles.title}>Способности</h2>
          {abilities.map((ability, index) => (
            <Ability key={index} ability={ability} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  parameters: state.parameters || {},
});

export default connect(mapStateToProps)(ParametersPanel);
