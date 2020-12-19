import { render, cleanup } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import LaunchContainer from "../components/Filters/LaunchContainer";
import router from "../helper/helper";

afterEach(cleanup);

describe("LaunchContainer Component", () => {
  const { getByTestId, asFragment } = render(
    <RouterContext.Provider value={router}>
      <LaunchContainer />
    </RouterContext.Provider>
  );
  test("Should render correctly on route", async () => {
    expect(getByTestId("LaunchContainer")).toBeInTheDocument();
  });
  test("Should match snapshot", () => {
    expect(asFragment(<LaunchContainer />)).toMatchSnapshot();
  });
});
