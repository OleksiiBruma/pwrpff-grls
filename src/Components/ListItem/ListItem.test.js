import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import ListItem from "./ListItem";

describe("ListItem", () => {
  it("should have children element and handle onClick event", () => {
    const text = "list item text";
    const handleClick = jest.fn();

    render(<ListItem onClick={handleClick}>{text}</ListItem>);

    fireEvent.click(screen.getByText(text));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
