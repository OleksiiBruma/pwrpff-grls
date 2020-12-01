import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("should render header element", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("header")).toBeTruthy();
  });
});
