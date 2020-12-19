import Head from "next/head";
import App from "../components/App";
// import { getLaunchPrograms } from "../components/data/LaunchPrograms";
// import { ProgramContextProvider } from "../context/ProgramContext";
// import {
//   LAUNCH_YEAR,
//   SUCCESSFUL_LAUNCH,
//   SUCCESSFUL_LANDING,
// } from "../components/Filters/constants";

// export const getServerSideProps = async (context) => {
//   const { landing, launch, year } = context.query;
//   const programsDetails = await getLaunchPrograms(landing, launch, year);

//   // TODOD Thought herre may be move api to apis folder
//   // let purl = "http://localhost:3000/api/data";
//   // const response = await fetch(purl).then((res) => res.json());
//   // console.log("response is", response);
//   return {
//     props: {
//       programsDetails,
//       yearDetails: LAUNCH_YEAR,
//       launchDetails: SUCCESSFUL_LAUNCH,
//       landDetails: SUCCESSFUL_LANDING,
//     },
//   };
// };

export default function Home() {
  return (
    <div>
      <Head>
        <title>SpaceX launch programs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This site talks about all the program launches of spaceX"
        ></meta>
      </Head>
      {/* <ProgramContextProvider {...props}> */}
      <App />
      {/* </ProgramContextProvider> */}
    </div>
  );
}
