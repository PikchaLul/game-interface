import React, { useMemo } from 'react';
import Stat from '../stat';
import Ability from '../ability';
import styles from "./parametersPanel.module.css";

export default function ParametersPanel(props) {
    const {parameters} = props;

    const {stats, abilities} = useMemo(() => {
        return {stats: [], abilities: []};
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
