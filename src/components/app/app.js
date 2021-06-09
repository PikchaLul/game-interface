import React from 'react';
import CharcterPanel from '../characterPanel';
import ParametersPanel from '../parametersPanel';

import styles from './app.module.css';

export default class App extends React.Component {
  render() {
    console.log(this.props.character);
    const {name, stamina, evasion, energy, parameters} = this.props.character;

    console.log(parameters);

    return (
      <div className={styles.app}>
        <CharcterPanel character={{name, stamina, evasion, energy}}/>
        <ParametersPanel parameters={parameters}/>
      </div>
    );
  }
}