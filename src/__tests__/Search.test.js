import { getByTestId, render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the search button correctly", () => {
    render(<Search />);
    screen.getByText(/Go/);
  });
});
