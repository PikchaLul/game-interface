import React from "react";
import { connect } from "react-redux";
import duellist from "../../images/duellist.jpg";
import { changeName } from "../../redux/actions";
import styles from "./characterPanel.module.css";

const CharcterPanel = ({ character, changeName }) => {
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
          <button className={styles.action} onClick={changeName}>
            Сменить имя
          </button>
          <button className={styles.action}>Ударить</button>
          <button className={styles.action}>Сохранить пользователя</button>
          <button className={styles.action}>Загрузить пользователя</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  character: {...props.character, name: state.name || props.character.name },
});

const mapDispatchToProps = (dispatch, props) => ({
  changeName: () => {
    const name = prompt("Введите имя", "");

    return dispatch(changeName(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharcterPanel);
