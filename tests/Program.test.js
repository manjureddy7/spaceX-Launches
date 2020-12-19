import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import Program from "../components/Programs/Program";

afterEach(cleanup);

const props = {
  name: "Test Rocket",
  id: "",
  missionIds: ["212"],
  launchYear: 2006,
  successfulLaunch: true,
  successfulLanding: [{ land_success: false }],
  image: [""],
};

describe("Program Component", () => {
  test("Should match snapshot", () => {
    const { asFragment } = render(<Program {...props} />);
    expect(asFragment(<Program />)).toMatchSnapshot();
  });
  test("renders Program component", () => {
    const { getByText } = render(<Program {...props} />);
    expect(getByText("Launch Year:")).toBeInTheDocument();
    expect(getByText("Successful Launch:")).toBeInTheDocument();
    expect(getByText("Successful Landing:")).toBeInTheDocument();
  });
  test("Test elements", () => {
    render(<Program {...props} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText("SPACE X MISSION IMAGE")).toBeInTheDocument();
  });
});

// Refer these docs in future for Complete Testing Library

// https://www.robinwieruch.de/react-testing-library
// https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/
