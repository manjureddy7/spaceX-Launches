import React, { useState, useEffect } from "react";
import Program from "./Programs/Program";
import styles from "../../styles/ProgramContainer.module.css";
import { useRouter } from "next/router";
import getLaunchPrograms from "./api/getLaunchPrograms";

export const ProgramsContainer = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [launchPrograms, setLaunchPrograms] = useState([]);
  const { landing, launch, year } = router.query;

  useEffect(async () => {
    setLoading(true);
    const response = await getLaunchPrograms(landing, launch, year);
    setLaunchPrograms(response);
    setLoading(false);
  }, [landing, launch, year]);

  return (
    <div>
      <div className={styles.RootContainer}>
        {loading ? (
          <h1>Loading...</h1>
        ) : launchPrograms.length > 0 ? (
          launchPrograms.map((program, index) => {
            return (
              <div className={styles.IndividualProgram} key={index}>
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
      <div className={styles.Developer}>
        <strong>Developed by:</strong> <sapn>Manoj Kumar Gangavarapu</sapn>
      </div>
    </div>
  );
};

export default ProgramsContainer;
