import React, {PureComponent} from 'react';
import CharcterPanel from '../characterPanel';
import ParametersPanel from '../parametersPanel';

import styles from './app.module.css';

export default class App extends PureComponent {
  state = {
    showNewCharacter: true,
  }

  createNewCharacter = () => {
    this.setState((state, props) => ({showNewCharacter: !state.showNewCharacter}))
  }

  render() {
    const {showNewCharacter} = this.state;

    return (
      <div className={styles.app}>
        <CharcterPanel showNewCharacter={showNewCharacter}/>
        <ParametersPanel showNewCharacter={showNewCharacter} createNewCharacter={this.createNewCharacter}/>
      </div>
    );
  }
}