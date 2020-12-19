import React, { useState, useEffect } from "react";
import Program from "./Programs/Program";
import styles from "../styles/ProgramContainer.module.css";
import { useProgramContext } from "../context/ProgramContext";

const ProgramsContainer = () => {
  const [loading, setLoading] = useState(false);
  const { programsDetails: launchPrograms } = useProgramContext();

  return (
    <div className={styles.RootContainer}>
      {loading ? (
        <h1>Loading...</h1>
      ) : launchPrograms.length > 0 ? (
        launchPrograms.map((program) => {
          return (
            <div
              className={styles.IndividualProgram}
              key={program.flight_number}
            >
              <Program
                name={program.mission_name}
                id={program.flight_number}
                missionIds={program.mission_id}
                launchYear={program.launch_year}
                successfulLaunch={program.launch_success}
                successfulLanding={program.rocket.first_stage.cores}
                image={program.links.flickr_images}
              />
            </div>
          );
        })
      ) : (
        <div className={styles.ErrorMessage}>
          No Programs found for the applied search
        </div>
      )}
    </div>
  );
};

export default ProgramsContainer;
