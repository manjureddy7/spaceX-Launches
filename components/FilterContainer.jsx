import React from "react";
import YearContainer from "./Filters/YearContainer";
import LaunchContainer from "./Filters/LaunchContainer";
import LandingContainer from "./Filters/LandingContainer";
import styles from "../styles/FilterContainer.module.css";

const FilterContainer = () => {
  return (
    <div className={styles.RootContainer}>
      <h2>Filters</h2>
      <YearContainer />
      <LaunchContainer />
      <LandingContainer />
    </div>
  );
};

export default FilterContainer;
