import { render } from "@testing-library/react";
import React from "react";
import { Help } from "./Help";

describe("Help", () => {
  it("renders help text", () => {
    expect.assertions(1);
    const { getByText } = render(<Help />);
    const titleElement = getByText(/Help/i);
    expect(titleElement).toBeInTheDocument();
  });
});
