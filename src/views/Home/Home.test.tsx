import { render, screen } from "@testing-library/react";
import React from "react";
import { Home } from "./Home";

describe("Home", () => {
  it("render learn react link", () => {
    expect.assertions(1);
    render(<Home />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });
});
