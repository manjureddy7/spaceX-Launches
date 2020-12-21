import React from "react";
import Container from "./Container";
import styles from "../../styles/App.module.css";

const App = () => {
  return (
    <div className={styles.AppContainer} data-testid="App">
      <h1 className={styles.AppHeader}>SpaceX Launch Programs</h1>
      <Container />
      <div className={styles.Developer}>
        <strong>Developed by: </strong> <sapn> Manoj Kumar Gangavarapu</sapn>
      </div>
    </div>
  );
};

export default App;
