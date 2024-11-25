import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import Card from "../../src/components/Card.jsx";
import "../../src/utils/styles.jsx";
import { getBackground } from "../../src/utils/styles.jsx";

const backgroundexample = {
  colors: [
    { color: "#EBB011", deg: "0%" },
    { color: "#ED861D", deg: "99.48%" },
  ],
  sideCorner: "180deg",
};

describe("group of tests which test the card component", () => {
  function renderComponent(color) {
    render(<Card backgroundColor={color} />);
  }

  it("should render a card component with the role card and a className card", () => {
    renderComponent("green");
    let card = screen.getByRole("card");
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass(/card/);
  });

  it.each([{ color: "red" }, { color: "blue" }, { color: "green" }])(
    "should render a card component with $color as the background",
    ({ color }) => {
      renderComponent(color);
      let card = screen.getByRole("card");
      expect(card).toHaveStyle(`background: ${color}`);
    }
  );

  it("should render a card component with a linear-gradient background", () => {
    renderComponent(backgroundexample);
    let card = screen.getByRole("card");
    expect(card).toHaveStyle(`background: ${getBackground(backgroundexample)}`);
  });

  it("should render a card component with a green background and when hovered over, it should darken and vv.", async () => {
    renderComponent("green");
    let card = screen.getByRole("card");
    expect(card).toHaveStyle("background: green");
    const user = userEvent.setup();
    await user.hover(card);
    expect(card).toHaveClass(/hover/);
    await user.unhover(card);
    expect(card).toHaveClass(/card/);
  });
});
