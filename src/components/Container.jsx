import React from "react";
import FilterContainer from "./FilterContainer";
import ProgramsContainer from "./ProgramsContainer";
import styles from "../../styles/Container.module.css";

const Container = () => {
  return (
    <div data-testid="container" className={styles.RootContainer}>
      <div className={styles.LeftContainer}>
        <FilterContainer />
      </div>
      <div className={styles.RightContainer}>
        <ProgramsContainer />
      </div>
    </div>
  );
};

export default Container;
