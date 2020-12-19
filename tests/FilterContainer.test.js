import { render, cleanup } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import FilterContainer from "../components/FilterContainer";
import router from "../helper/helper";

afterEach(cleanup);

describe("FilterContainer Component", () => {
  const { getByTestId, asFragment } = render(
    <RouterContext.Provider value={router}>
      <FilterContainer />
    </RouterContext.Provider>
  );
  test("Should render correctly on route", async () => {
    expect(getByTestId("FilterContainer")).toBeInTheDocument();
  });
  test("Should match snapshot", () => {
    expect(asFragment(<FilterContainer />)).toMatchSnapshot();
  });
});
