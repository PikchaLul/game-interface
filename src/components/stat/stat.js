import React from "react";
import { connect } from "react-redux";
import styles from "./stat.module.css";
import { increment, decrement } from '../../redux/actions';

const Stat = ({ name, value, increment, decrement }) => {

  return (
    <div className={styles.stat}>
      <div className={styles.stat__information}>
        <h3>{name}</h3>
      </div>
      <div className={styles.counter}>
        <div className={styles.actions}>
          <button className={styles.action} onClick={decrement}>
            -
          </button>
          <div className={styles.value}>{value}</div>
          <button className={styles.action} onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  name: props.stat.name || 'Базовое имя',
  value: props.stat.value || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.stat.key)),
  decrement: () => dispatch(decrement(props.stat.key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stat);