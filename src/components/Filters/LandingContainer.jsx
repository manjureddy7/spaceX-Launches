import React, { useState } from "react";
import styles from "../../../styles/FilterContainer.module.css";
import Router, { useRouter } from "next/router";
import { SUCCESSFUL_LANDING } from "../constants";

const LandingContainer = () => {
  // Get current queries and append to the existing one
  const router = useRouter();

  const [landingState, setLandingState] = useState();
  const [activeState, setActiveState] = useState(false);
  const [defaultCase, setDefaultCase] = useState(false);

  // Pass query params to update URL
  const handleLandingFilter = (landing) => {
    setActiveState(!activeState);
    if (!activeState) {
      Router.push({
        pathname: "/",
        query: { ...router.query, landing },
      });
      setLandingState(landing);
      setDefaultCase(!defaultCase);
    } else if (landingState !== landing) {
      Router.push({
        pathname: "/",
        query: { ...router.query, landing },
      });
      setDefaultCase(true);
      setLandingState(landing);
    } else {
      const { landing, ...restFilters } = router.query;
      Router.push({
        pathname: "/",
        query: { ...restFilters },
      });
      setDefaultCase(false);
      setLandingState(landing);
    }
    setActiveState(!activeState);
  };

  return (
    <div className={styles.InnerContainer} data-testid="LandingContainer">
      <div className={styles.InnerContainerHeader} data-testid="TitleHeading">
        Successful Landing
      </div>
      <div className={styles.GroupContainer}>
        {SUCCESSFUL_LANDING.map((landing, index) => (
          <div key={index} className={styles.ButtonContainer}>
            <button
              className={
                (landingState === landing && activeState) ||
                (defaultCase && landingState === landing)
                  ? styles.active
                  : styles.btn
              }
              onClick={() => handleLandingFilter(landing)}
            >
              {landing}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingContainer;
