import React from "react";
import { connect } from "react-redux";
import duellist from "../../images/duellist.jpg";
import { changeName } from "../../redux/actions";
import styles from "./characterPanel.module.css";

const CharacterPanel = ({
  showNewCharacter,
  name,
  stamina,
  evasion,
  energy,
  changeName,
}) => {
  return (
    <div className={styles.characterPanel}>
      {!showNewCharacter ? (
        <div className={styles.character__name}>{name}</div>
      ) : null}
      <div className={styles.character__information}>
        <div className={styles.character__container}>
          <img src={duellist} alt="duellist"></img>
          {!showNewCharacter ? (
            <div className={styles.character__stats}>
              <p>Жизненная сила: {stamina}</p>
              <p>Уклонение: {evasion}</p>
              <p>Энергичность: {energy}</p>
            </div>
          ) : null}
        </div>
        {!showNewCharacter ? (
          <div className={styles.character__actions}>
            <button className={styles.action} onClick={changeName}>
              Сменить имя
            </button>
            <button className={styles.action}>Ударить</button>
            <button className={styles.action}>Сохранить персонажа</button>
            <button className={styles.action}>Загрузить персонажа</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  name: state.name || "Базовое имя",
  stamina: state.stamina || 3,
  evasion: state.evasion || 10,
  energy: state.energy || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  changeName: () => {
    const name = prompt("Введите имя", "");

    return dispatch(changeName(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPanel);
