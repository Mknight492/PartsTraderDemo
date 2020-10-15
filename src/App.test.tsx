import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders search for a part title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/search for a part/i);
  expect(linkElement).toBeInTheDocument();
});
