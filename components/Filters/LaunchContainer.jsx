import React, { useState } from "react";
import styles from "../../styles/FilterContainer.module.css";
import Router, { useRouter } from "next/router";
import { useProgramContext } from "../../context/ProgramContext";

const LaunchContainer = () => {
  // Get current queries and append to the existing one
  const router = useRouter();
  const [launchingState, setLaunchingState] = useState();
  const [activeState, setActiveState] = useState(false);
  const { launchDetails } = useProgramContext();

  // Pass query params to update URL
  const handleLaunchFilter = (launch) => {
    setActiveState(!activeState);
    setLaunchingState(launch);
    if (!activeState) {
      Router.push({
        pathname: "/",
        query: { ...router.query, launch },
      });
    } else {
      const { launch, ...restFilters } = router.query;
      Router.push({
        pathname: "/",
        query: { ...restFilters },
      });
    }
  };

  return (
    <div className={styles.InnerContainer}>
      <div className={styles.InnerContainerHeader}>Successful Launch</div>
      <div className={styles.GroupContainer}>
        {launchDetails.map((launch, index) => (
          <div key={index} className={styles.ButtonContainer}>
            <button
              className={
                launch === launchingState && activeState
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
