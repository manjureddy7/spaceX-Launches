import React, { useState } from "react";
import styles from "../../../styles/FilterContainer.module.css";
import Router, { useRouter } from "next/router";
import { LAUNCH_YEAR } from "../constants";

const YearContainer = () => {
  const [activeState, setActiveState] = useState(false);
  const [launchYear, setLaunchYear] = useState();
  const [defaultCase, setDefaultCase] = useState(false);

  // Get current queries and append to the existing one
  const router = useRouter();

  // Handle Year Filter
  // Based on Active state, update Router
  const handleLaunchYearFilter = async (launch_year) => {
    if (!activeState) {
      Router.push({
        pathname: "/",
        query: { ...router.query, launch_year },
      });
      setLaunchYear(launch_year);
      setDefaultCase(!defaultCase);
    } else if (launchYear !== launch_year) {
      Router.push({
        pathname: "/",
        query: { ...router.query, launch_year },
      });
      setDefaultCase(true);
      setLaunchYear(launch_year);
    } else {
      const { launch_year, ...restFilters } = router.query;
      Router.push({
        pathname: "/",
        query: { ...restFilters },
      });
      setLaunchYear(launch_year);
      setDefaultCase(false);
    }
    setActiveState(!activeState);
  };
  return (
    <div className={styles.InnerContainer} data-testid="YearContainer">
      <div className={styles.InnerContainerHeader}>Launch Year</div>
      <div className={styles.GroupContainer}>
        {LAUNCH_YEAR.map((year, index) => (
          <div key={index} className={styles.ButtonContainer}>
            <button
              className={
                (launchYear === year && activeState) ||
                (defaultCase && launchYear === year)
                  ? styles.active
                  : styles.btn
              }
              onClick={() => handleLaunchYearFilter(year)}
            >
              {year}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearContainer;
