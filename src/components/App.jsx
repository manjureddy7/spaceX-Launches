import React from "react";
import Container from "./Container";
import styles from "../../styles/App.module.css";

const App = () => {
  return (
    <div className={styles.AppContainer} data-testid="App">
      <h1 className={styles.AppHeader}>SpaceX Launch Programs</h1>
      <Container />
    </div>
  );
};

export default App;
