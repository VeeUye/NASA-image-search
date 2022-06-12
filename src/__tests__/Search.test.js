import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the search button correctly", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);

    expect(screen.getByText(/Go/)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
