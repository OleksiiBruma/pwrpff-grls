import React from "react";
import { render, screen } from "@testing-library/react";

import Episode from "./Episode";

describe("Episode", () => {
  it("should show name, airtime and season", () => {
    const season = 1;
    const name = "episode name";
    const airtime = "episode airtime";

    render(<Episode season={season} name={name} airtime={airtime} />);

    expect(screen.getByText(`Season ${season}`)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(airtime)).toBeInTheDocument();
  });
});
