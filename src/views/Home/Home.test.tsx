import { render } from "@testing-library/react";
import React from "react";
import { Home } from "./Home";

describe("Home", () => {
  it("renders learn react link", () => {
    expect.assertions(1);
    const { getByText } = render(<Home />);
    const linkElement = getByText(/Learn React/i);
    expect(linkElement).toBeInTheDocument();
  });
});
