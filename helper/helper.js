import { createRouter } from "next/router";

const router = createRouter("", { year: 2006 }, "", {
  initialProps: {},
  pageLoader: jest.fn(),
  App: jest.fn(),
  Component: jest.fn(),
});

export default router;
