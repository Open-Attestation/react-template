import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { Counter } from "./Counter";

describe("counter component", () => {
  it("should increment counter by 1 when clicking on increment button", () => {
    expect.assertions(2);
    const { getByText } = render(<Counter />);
    expect(getByText("Counter: 0")).toBeDefined();
    fireEvent.click(getByText(/increment/i));
    expect(getByText("Counter: 1")).toBeDefined();
  });
  it("should decrement counter by 1 when clicking on decrement button", () => {
    expect.assertions(2);
    const { getByText } = render(<Counter />);
    expect(getByText("Counter: 0")).toBeDefined();
    fireEvent.click(getByText(/decrement/i));
    expect(getByText("Counter: -1")).toBeDefined();
  });
  it("should start with initial value", () => {
    expect.assertions(1);
    const { getByText } = render(<Counter initialValue={10} />);
    expect(getByText("Counter: 10")).toBeDefined();
  });
});
