import React from "react";
import { render } from "@testing-library/react";
import { ProgramsContainer } from "../components/ProgramsContainer";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("ProgramsContainer", () => {
  it("renders - ProgramsContainer", () => {
    useRouter.mockImplementationOnce(() => ({
      query: {},
    }));
    const { container } = render(<ProgramsContainer />);
    expect(container).toMatchSnapshot();
  });
});
