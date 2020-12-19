import React from "react";
import Image from "next/image";
import styles from "../../styles/Program.module.css";

// const DEFAULT_IMAGE_URL =
//   "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg";

// To improve perfomance
const DEFAULT_IMAGE_URL = "/default.webp";

const Program = ({
  name,
  id,
  missionIds,
  launchYear,
  successfulLaunch,
  successfulLanding,
  image,
}) => {
  const missionImage = image.length > 0 ? image[0] : DEFAULT_IMAGE_URL;
  const landSuccess = successfulLanding[0].land_success;
  return (
    <div className={styles.ProgramContainer}>
      <div className={styles.ImageContainer}>
        <img
          className={styles.ProgramImage}
          src={missionImage}
          alt="SPACE X MISSION IMAGE"
          loading="lazy"
          height="200px"
          width="200px"
        />
        {/* <Image
          className={styles.ProgramImage}
          src={missionImage}
          alt="SPACE X MISSION IMAGE"
          layout="fill"
        /> */}
      </div>
      <p className={styles.ProgramName}>
        {name} {` `}#{id}
      </p>
      <div className={styles.ProgramLaunchDetails}>
        <strong>Mission Ids: </strong>
        {""}
        {missionIds.length > 0 ? (
          <ul>
            {missionIds.map((missionId, index) => (
              <li key={index} className={styles.ProgramDetails}>
                {missionId}
              </li>
            ))}
          </ul>
        ) : (
          <span>N/A</span>
        )}
      </div>
      <div className={styles.ProgramLaunchDetails}>
        <strong>Launch Year:</strong>{" "}
        <span className={styles.ProgramDetails}>{launchYear}</span>
      </div>
      <div className={styles.ProgramLaunchDetails}>
        <strong>
          Successful Launch:{" "}
          <span className={styles.ProgramDetails}>
            {successfulLaunch ? "True" : "False"}
          </span>
        </strong>
      </div>
      <div className={styles.ProgramLaunchDetails}>
        <strong>
          Successful Landing:{" "}
          <span className={styles.ProgramDetails}>
            {landSuccess ? "True" : "False"}
          </span>
        </strong>
      </div>
    </div>
  );
};

export default Program;
