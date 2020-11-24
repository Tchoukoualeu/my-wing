import React from "react";
import { render } from '@testing-library/react'
import BackdropLoader from "../components/BackdropLoader";

describe("BackdropLoader component", () => {
  test("Matches the snapshots for BackdropLoader open true", () => {
    const { asFragment } = render(<BackdropLoader open={true} />);

    expect(asFragment(<BackdropLoader open={true} />)).toMatchSnapshot();
  });

  test("Matches the snapshots for BackdropLoader open false", () => {
    const { asFragment } = render(<BackdropLoader open={false} />);

    expect(asFragment(<BackdropLoader open={false} />)).toMatchSnapshot();
  });
});