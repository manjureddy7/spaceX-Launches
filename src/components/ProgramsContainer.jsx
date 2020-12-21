import React, { useState, useEffect } from "react";
import Program from "./Programs/Program";
import styles from "../../styles/ProgramContainer.module.css";
import { useRouter } from "next/router";
import getLaunchPrograms from "./api/getLaunchPrograms";

export const ProgramsContainer = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [launchPrograms, setLaunchPrograms] = useState([]);
  const { land_success, launch_success, launch_year } = router.query;

  useEffect(async () => {
    setLoading(true);
    const response = await getLaunchPrograms(
      land_success,
      launch_success,
      launch_year
    );
    setLaunchPrograms(response);
    setLoading(false);
  }, [land_success, launch_success, launch_year]);

  return (
    <div>
      {loading ? (
        <h1>Loading SpaceX Launch Programs...</h1>
      ) : launchPrograms.length > 0 ? (
        <div className={styles.RootContainer}>
          {launchPrograms.map((program, index) => {
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
          })}
        </div>
      ) : (
        <div className={styles.ErrorMessage}>
          No Programs found for the applied search
        </div>
      )}
    </div>
  );
};

export default ProgramsContainer;
