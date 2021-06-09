import React from "react";
import useForm from "../../../hooks/use-form";
import { connect } from "react-redux";
import { createNewCharacter } from "../../../redux/actions";
import styles from "./initParametersForm.module.css";

const INITIAL_VALUES = {
  name: "Базовое имя",
  power: 0,
  agility: 0,
  intelligence: 0,
  charisma: 0,
};

const InitParametersForm = ({createNewCharacter, onSubmit}) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...values });
    createNewCharacter();
    reset();
  };

  return (
    <div className={styles.initParametersForm}>
      <h2 className={styles.title}>Создание нового персонажа</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formItem}>
          <input
            placeholder="Имя персонажа"
            type="text"
            className={styles.input}
            {...handlers.name}
          />
        </div>
        <div className={styles.formItem}>
          <input
            placeholder="Сила персонажа"
            type="number"
            min="0"
            max="1000"
            className={styles.input}
            {...handlers.power}
          />
        </div>
        <div className={styles.formItem}>
          <input
            placeholder="Ловкость персонажа"
            type="number"
            min="0"
            max="1000"
            className={styles.input}
            {...handlers.agility}
          />
        </div>
        <div className={styles.formItem}>
          <input
            placeholder="Интеллект персонажа"
            type="number"
            min="0"
            max="1000"
            className={styles.input}
            {...handlers.intelligence}
          />
        </div>
        <div className={styles.formItem}>
          <input
            placeholder="Харизму персонажа"
            type="number"
            min="0"
            max="1000"
            className={styles.input}
            {...handlers.charisma}
          />
        </div>
        <div className={styles.create}>
          <button type="submit">Создать персонажа</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (newCharacter) => {
    dispatch(createNewCharacter(newCharacter));
  },
});

export default connect(null, mapDispatchToProps)(InitParametersForm);
