import React from "react";
import { connect } from "react-redux";
import styles from "./ability.module.css";
import { train } from "../../redux/actions";
import AbilityItem from "./abilityItem";

const Ability = ({ abilitiesClass, abilities, train }) => {
  return (
    <div className={styles.ability}>
      <div className={styles.ability__information}>
        <h3>{abilitiesClass}</h3>
      </div>
      {abilities.map(({ key, name, value }, index) => (
        <AbilityItem key={index} abilityKey={key} name={name} value={value} train={train} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  abilitiesClass: props.ability.abilitiesClass || "Неизвестная способность",
  abilities: props.ability.abilities || [],
});

const mapDispatchToProps = (dispatch, props) => ({
  train: (abilityKey) => dispatch(train({parameterKey: props.ability.parameterKey, abilityKey})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ability);
