import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import { toHaveAttribute } from "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

expect.extend({ toHaveAttribute });

test("renders a star", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Star />, div);
  expect(div.querySelector("svg")).toHaveAttribute("id", "star");
});