import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "../../src/components/Button";
import "../../src/utils/styles.jsx";
import { getBackground } from "../../src/utils/styles.jsx";
import userEvent from "@testing-library/user-event";

describe("group of tests which test the button component", () => {
  function renderComponent(
    btnText = "button text",
    backgroundColor = "",
    outline = false,
    size = "md",
    theme = null,
    icon = ""
  ) {
    render(
      <Button
        btnText={btnText}
        backgroundColor={backgroundColor}
        outline={outline}
        size={size}
        theme={theme}
        icon={icon}
        //iconPosition={iconPosition}
      ></Button>
    );
  }
  it("should have a button on screen if Button is rendered", () => {
    renderComponent();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should contain the text passed in", () => {
    renderComponent("this is button text");
    expect(screen.getByText(/this is button text/i)).toBeInTheDocument();
  });

  it("should have specified background color if type is not passed in and outline is false", () => {
    let color = {
      colors: [
        { color: "#00a7d5", deg: "40%" },
        { color: "#00ded8", deg: "120%" },
      ],
    };
    renderComponent("text", color);
    let button = screen.getByRole("button");
    expect(button).toHaveStyle(`background: ${getBackground(color)}`);
  });
  it("should have background color applied to outline and to text if outline is true", () => {
    let color = "#FFF";

    renderComponent("text", color, true);
    let button = screen.getByRole("button");
    expect(button).toHaveStyle(
      `background:white ; 
      color: ${getBackground(color)};`
    );
  });
  it.each(["sm", "md", "lg"])("should apply set size to button", (size) => {
    renderComponent("text", "red", false, size);
    let button = screen.getByRole("button");
    size === "sm" && expect(button).toHaveClass(/sm/i);
    size === "md" && expect(button).toHaveClass(/md/i);
    size === "lg" && expect(button).toHaveClass(/lg/i);
  });
  it("should apply size md if no size was set", () => {
    renderComponent("text", "red", false);
    let button = screen.getByRole("button");
    expect(button).toHaveClass(/md/i);
  });
  it("should have bootstrap style applied if inserted", () => {
    renderComponent("text", "color", false, "md", "info");
    let button = screen.getByRole("button");
    expect(button).toHaveClass(/info/i);
  });
  it("should have icon if passed in", () => {
    let icon = {
      topIcon: { color: "pink", name: "fa-heart", type: "fas" },
      size: "5",
      opacity: "100%",
    };
    renderComponent("text", "red", false, "", "", icon);
    expect(screen.getByTestId("topIcon")).toBeInTheDocument();
    expect(screen.getByTestId("topIcon")).toHaveAttribute("color", "pink");
  });

  it("should render a button component with a green background and when hovered over, it should darken and vv.", async () => {
    renderComponent("button text", "green");
    let button = screen.getByRole("button");
    expect(button).toHaveStyle("background: green");
    const user = userEvent.setup();
    await user.hover(button);
    expect(button).toHaveClass(/hover/);
    await user.unhover(button);
    expect(button).not.toHaveClass(/hover/);
  });

  /*it("should apply extra styles on button if passed in", () => {
    //let extraStyles = { border: "2px solid black", color: "red" };
    renderComponent(
      "text",
      "red",
      "false",
      "md",
      null,
      "danger",
      "border: 2px solid black"
    );
    let button = screen.getByRole("button");
    expect(button).toHaveStyle("border: 2px solid black");
  });*/
});
