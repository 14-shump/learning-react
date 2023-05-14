import React from "react";
import { Checkbox } from "./Checkbox";
import { render, fireEvent } from "@testing-library/react";

test("Selecting the checkbox should toggle its value", () => {
    // const { getByLabelText } = render(<Checkbox />);
    // const checkbox = getByLabelText(/not checked/i);
    const { getByTestId } = render(<Checkbox />);
    const checkbox = getByTestId("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });