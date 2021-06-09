import React, { PureComponent } from 'react';
import CharcterPanel from '../characterPanel';
import ParametersPanel from '../parametersPanel';

import styles from './app.module.css';

export default class App extends PureComponent {
  render() {
    const {name, stamina, evasion, energy, parameters} = this.props;

    return (
      <div className={styles.app}>
        <CharcterPanel character={{name, stamina, evasion, energy}}/>
        <ParametersPanel parameters={parameters}/>
      </div>
    );
  }
}