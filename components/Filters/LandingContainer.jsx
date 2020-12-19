import React, { useState } from "react";
import styles from "../../styles/FilterContainer.module.css";
import Router, { useRouter } from "next/router";
import { SUCCESSFUL_LANDING } from "./constants";

const LandingContainer = () => {
  // Get current queries and append to the existing one
  const router = useRouter();

  const [landingState, setLandingState] = useState();
  const [activeState, setActiveState] = useState(false);

  // Pass query params to update URL
  const handleLandingFilter = (landing) => {
    setActiveState(!activeState);
    setLandingState(landing);
    if (!activeState) {
      Router.push({
        pathname: "/",
        query: { ...router.query, landing },
      });
    } else {
      const { landing, ...restFilters } = router.query;
      console.log("rest filters are", restFilters);
      Router.push({
        pathname: "/",
        query: { ...restFilters },
      });
    }
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
                landing === landingState && activeState
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
