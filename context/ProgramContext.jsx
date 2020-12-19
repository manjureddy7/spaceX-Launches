import * as React from "react";

const ProgramContext = React.createContext();

function useProgramContext() {
  const context = React.useContext(ProgramContext);
  // if (!context) {
  //   throw new Error(`useProgramContext must be used within a CountProvider`);
  // }
  return context;
}

function ProgramContextProvider(props) {
  const { programsDetails, yearDetails, launchDetails, landDetails } = props;
  const value = React.useMemo(
    () => ({
      programsDetails,
      yearDetails,
      launchDetails,
      landDetails,
    }),
    [programsDetails, yearDetails, launchDetails, landDetails]
  );

  return <ProgramContext.Provider value={value} {...props} />;
}

export { ProgramContextProvider, useProgramContext };
