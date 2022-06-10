import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the text correctly", () => {
    render(<SearchResults />);
    screen.getByText(/Search Results/);
  });
});
