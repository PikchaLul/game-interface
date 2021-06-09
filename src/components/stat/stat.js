import React from "react";
import styles from "./stat.module.css";

export default function Stat(props) {
  const { name, value, increment, decrement } = props.stat;

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
