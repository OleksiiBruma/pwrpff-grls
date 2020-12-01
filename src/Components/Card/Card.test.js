import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  it("should be in the loading mode", () => {
    const isLoading = true;

    const { getByTestId } = render(<Card isLoading={isLoading} />);

    expect(getByTestId("loader")).toBeTruthy();
  });
  it("should show image, name, summary", () => {
    const isLoading = false;
    const image = "card image";
    const name = "card name";
    const summary = "card summary";

    const { getByTestId } = render(
      <Card isLoading={isLoading} image={image} name={name} summary={summary} />,
    );

    expect(getByTestId("image")).toHaveAttribute("src", image);
    expect(getByTestId("image")).toHaveAttribute("alt", `${name} cover`);
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(summary)).toBeInTheDocument();
  });
});
