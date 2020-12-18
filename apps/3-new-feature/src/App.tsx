import React from 'react';
import { Bubble } from './features/bubble/Bubble';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
    </div>
  );
}

export default App;
