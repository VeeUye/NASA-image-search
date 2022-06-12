import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
  const validProps = {
    results: [
      "https://images-assets.nasa.gov/image/PIA08216/PIA08216~thumb.jpg",
      "https://images-assets.nasa.gov/image/PIA22081/PIA22081~thumb.jpg",
    ],
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchResults results={validProps.results} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the text correctly", () => {
    render(<SearchResults results={validProps.results} />);

    expect(screen.getByText(/Search Results/)).toBeInTheDocument();
  });
});
