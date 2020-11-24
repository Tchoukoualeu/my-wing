import React from "react";
import { render } from '@testing-library/react'
import GallerySnackBar from "../components/GallerySnackBar";
import userEvent from "@testing-library/user-event";

describe("GallerySnackBar component", () => {
  test("Matches the snapshots for GallerySnackBar isError true", () => {
    const setIsError = jest.fn();
    const { asFragment } = render(<GallerySnackBar isError={true} setIsError={setIsError} />);

    expect(asFragment(<GallerySnackBar isError={true} setIsError={setIsError} />)).toMatchSnapshot();
  });

  test("Matches the snapshots for GallerySnackBar isError false", () => {
    const setIsError = jest.fn();
    const { asFragment } = render(<GallerySnackBar isError={false} setIsError={setIsError} />);

    expect(asFragment(<GallerySnackBar isError={false} setIsError={setIsError} />)).toMatchSnapshot();
  });

  test("It shows that GallerySnackBar closes", () => {
    const setIsError = jest.fn();
    const { container } = render(<GallerySnackBar isError={true} setIsError={setIsError} />);

    userEvent.click(container.getElementsByTagName('button')[0]);

    expect(container.getElementsByTagName('button')).not.toBe();
  });

  test("It shows that GallerySnackBar does not close", () => {
    const setIsError = jest.fn();
    const { asFragment, container } = render(<GallerySnackBar isError={true} setIsError={setIsError} />);

    expect(asFragment(<GallerySnackBar isError={true} setIsError={setIsError} />)).toMatchSnapshot();

    userEvent.click(container);

    expect(asFragment(<GallerySnackBar isError={true} setIsError={setIsError} />)).toMatchSnapshot();
  });
});