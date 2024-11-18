

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Card from "../src/components/Card";

const backgroundexample={
  colors: [
  { color: "#EBB011", deg: "0%" },
  { color: "#ED861D", deg: "99.48%" },
  ],
  sideCorner: "180deg",
  }


describe("group of tests which test the card component", () => {

function renderComponent(color) {
    render(<Card backgroundColor={color}/>);
}

  it("should render a card component with the role card and a className card", () => {
    renderComponent("green");
    screen.debug();
    let card = screen.getByRole('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass(/card/);
  });

  it.each([{color: "red"},{color: backgroundexample},{color: "green"}])('should render a card component with $color as the background', ({color}) => {
    renderComponent(color);
    let card = screen.getByRole('card');
    expect(card).toHaveStyle(`background: ${color}`);
  })
});