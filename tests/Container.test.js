import { render, cleanup } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import Container from "../components/Container";
import router from "../helper/helper";

afterEach(cleanup);

describe("Container Component", () => {
  const { getByTestId, asFragment } = render(
    <RouterContext.Provider value={router}>
      <Container />
    </RouterContext.Provider>
  );
  test("Should render correctly on route", async () => {
    expect(getByTestId("container")).toBeInTheDocument();
  });
  test("Should match snapshot", () => {
    expect(asFragment(<Container />)).toMatchSnapshot();
  });
});
