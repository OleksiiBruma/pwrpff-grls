import React from "react";
import { render, screen } from "@testing-library/react";

import Title from "./Title";

describe("Title", () => {
  it("should have children as text", () => {
    const text = "title text";

    render(<Title>{text}</Title>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
