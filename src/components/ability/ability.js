import React from "react";
import cn from "classnames";
import { ReactComponent as Star } from "../../images/star.svg";
import styles from "./ability.module.css";

export default function Ability(props) {
  const { name, value, train } = props.stat;

  return (
    <div className={styles.ability}>
      <div className={styles.ability__information}>
        <p>{name}</p>
      </div>
      <div className={styles.ability__rate}>
        {[...Array(6)].map((_, i) => (
          <Star
            key={i}
            data-id={i <= value - 1 ? "full-star" : "empty-star"}
            className={cn(styles.star, { [styles.checked]: i <= value - 1 })}
          />
        ))}
      </div>
      <div className={styles.actions}>
        <button className={styles.action} onClick={train}>
          Тренировать
        </button>
      </div>
    </div>
  );
}
