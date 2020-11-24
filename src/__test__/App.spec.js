import React from "react";
import { render } from '@testing-library/react'
import App from "../App";

describe("App component", () => {
  test("Matches the snapshots for App", () => {
    const { asFragment } = render(<App />);

    expect(asFragment(<App />)).toMatchSnapshot();
  });
});