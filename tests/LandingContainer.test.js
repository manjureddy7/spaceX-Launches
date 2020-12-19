import { render, cleanup, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import LandingContainer from "../components/Filters/LandingContainer";
import router from "../helper/helper";

afterEach(cleanup);

describe("LandingContainer Component", () => {
  const { getByTestId, asFragment, getByText } = render(
    <RouterContext.Provider value={router}>
      <LandingContainer />
    </RouterContext.Provider>
  );
  test("Should render correctly on route", async () => {
    screen.debug();
    expect(getByTestId("LandingContainer")).toBeInTheDocument();
  });
  test("Should match snapshot", () => {
    expect(asFragment(<LandingContainer />)).toMatchSnapshot();
  });
});
