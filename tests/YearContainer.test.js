import { render, cleanup } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import YearContainer from "../components/Filters/YearContainer";
import router from "../helper/helper";

afterEach(cleanup);

describe("YearContainer Component", () => {
  const { getByTestId, asFragment } = render(
    <RouterContext.Provider value={router}>
      <YearContainer />
    </RouterContext.Provider>
  );
  test("Should render correctly on route", async () => {
    expect(getByTestId("YearContainer")).toBeInTheDocument();
  });
  test("Should match snapshot", () => {
    expect(asFragment(<YearContainer />)).toMatchSnapshot();
  });
});
