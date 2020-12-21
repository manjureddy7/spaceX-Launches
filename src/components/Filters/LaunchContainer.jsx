import React, { useState } from "react";
import styles from "../../../styles/FilterContainer.module.css";
import Router, { useRouter } from "next/router";
import { SUCCESSFUL_LAUNCH } from "../constants";

const LaunchContainer = () => {
  // Get current queries and append to the existing one
  const router = useRouter();
  const [launchingState, setLaunchingState] = useState();
  const [activeState, setActiveState] = useState(false);
  const [defaultCase, setDefaultCase] = useState(false);

  // Pass query params to update URL
  const handleLaunchFilter = (launch) => {
    setActiveState(!activeState);

    if (!activeState) {
      Router.push({
        pathname: "/",
        query: { ...router.query, launch },
      });
      setLaunchingState(launch);
      setDefaultCase(!defaultCase);
    } else if (launchingState !== launch) {
      Router.push({
        pathname: "/",
        query: { ...router.query, launch },
      });
      setDefaultCase(true);
      setLaunchingState(launch);
    } else {
      const { launch, ...restFilters } = router.query;
      Router.push({
        pathname: "/",
        query: { ...restFilters },
      });
      setDefaultCase(false);
      setLaunchingState(launch);
    }
    setActiveState(!activeState);
  };

  return (
    <div className={styles.InnerContainer} data-testid="LaunchContainer">
      <div className={styles.InnerContainerHeader}>Successful Launch</div>
      <div className={styles.GroupContainer}>
        {SUCCESSFUL_LAUNCH.map((launch, index) => (
          <div key={index} className={styles.ButtonContainer}>
            <button
              className={
                (launchingState === launch && activeState) ||
                (defaultCase && launchingState === launch)
                  ? styles.active
                  : styles.btn
              }
              onClick={() => handleLaunchFilter(launch)}
            >
              {launch}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchContainer;
