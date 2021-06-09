import React, { useMemo } from 'react';
import Stat from '../stat';
import Ability from '../ability';
import styles from "./parametersPanel.module.css";

export default function ParametersPanel() {
    const {parameters} = this.props;

    const [stats, abilities] = useMemo( () => {

    }, [parameters])

    return (
        <div className={styles.parametersPanel}>
            <div className={styles.stats}>
                <h4>Характеристики</h4>
                {stats.map(stat => <Stat stat={stat}/>)}
            </div>
            <div className={styles.abilities}>
                <h4>Способности</h4>
                {abilities.map(ability => <Ability ability={ability}/>)}
            </div>
        </div>
    )
}
