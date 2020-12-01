import React from "react";
import { render, screen } from "@testing-library/react";

import AppWrapper from "./AppWrapper";

describe("AppWrapper", () => {
  it("should render children", () => {
    const text = "text";
    render(<AppWrapper>{text}</AppWrapper>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
