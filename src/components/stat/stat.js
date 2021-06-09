import React from "react";
import { ReactComponent as Minus } from '../../images/minus.svg';
import { ReactComponent as Plus } from '../../images/plus.svg';
import styles from "./stat.module.css";

export default function Stat(props) {
  const { name, value, increment, decrement } = props.stat;

  return (
    <div className={styles.stat}>
      <div className={styles.stat__information}>
        <p>{name}</p>
      </div>
      <div className={styles.counter}>
        <div className={styles.value}>
          {value}
        </div>
        <div className={styles.actions}>
          <button
            className={styles.action}
            onClick={decrement}
          >
            <Minus />
          </button>
          <button
            className={styles.action}
            onClick={increment}
          >
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
}
