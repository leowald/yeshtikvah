import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "../../src/components/Button";

describe("group of tests which test the Icon component", () => {
  function renderComponent(
    type,
    btnText = "button text",
    backgroundColor = "",
    outline = false,
    type = "",
    size = "md",
    icon = {},
    iconPosition = true,
    extras
  ) {
    render(
      <Button
        btnText={btnText}
        backgroundColor={backgroundColor}
        type={type}
        size={size}
        icon={icon}
        iconPosition={iconPosition}
        outline={outline}
        extras={extras}
      ></Button>
    );
  }
  it("should contain the text passed in", () => {
    renderComponent("this is button text");
    expect(screen.getByText(/this is button text/i)).toBeInTheDocument();
  });
  it("should have specified background color if type is not passed in and outline is false", () => {
    renderComponent("text", "blue");
    expect(screen.getByRole("button").toHaveStyle(`background: ${color}`));
  });
  it("should have background color applied to outline and to text if outline is true", () => {
    renderComponent("text", "blue", "true");
    expect(
      screen
        .getByRole("button")
        .toHaveStyle(`outline: 1px solid ${color}, color: ${color}`)
    );
  });
  it("should have bootstrap style applied if inserted", () => {
    renderComponent("text", "color", "false", "info");
    expect(screen.getByRole("alert")).toHaveClass("btn-info");
  });
});
