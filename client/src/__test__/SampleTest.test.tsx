import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import App from "../App";

describe("App sample component", () => {
  beforeAll(() => {
    render(<App />);
  });

  it("should have the right message in the dom", () => {
    const title = "Main component of POLSKY JET APP";

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  afterAll(cleanup);
});
