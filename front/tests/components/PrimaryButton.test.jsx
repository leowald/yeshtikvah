import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { server } from "../mocks/server.js";
import PrimaryButton from "../../src/components/buttons/PrimaryButton.jsx";
import "../../src/utils/styles.jsx";
import { getBackground } from "../../src/utils/styles.jsx";

describe("group of tests which test the Primary Button component", () => {
  function renderComponent(
    btnText = "button text",
    backgroundColor = "",
    outline = false,
    size = "md",
    theme = null,
    icon = ""
  ) {
    render(
      <PrimaryButton
        btnText={btnText}
        backgroundColor={backgroundColor}
        outline={outline}
        size={size}
        theme={theme}
        icon={icon}
        //iconPosition={iconPosition}
      ></PrimaryButton>
    );
  }
  it("should have a button on screen if Primary Button is rendered", () => {
    renderComponent();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should contain the text passed in", () => {
    renderComponent("this is button text");
    expect(screen.getByText(/this is button text/i)).toBeInTheDocument();
  });

  it("should return the data from /theme api when /theme is called.", async () => {
    server.listen();
    screen.debug();
    const response = await fetch("http://localhost:3000/theme");
    const themeInfo = await response.json();
    const themeInfoApi = {
      primary_color: {
        colors: [
          {
            color: "#f905d9",
            deg: "0%",
          },
          {
            color: "#e3d1b9",
            deg: "99.48%",
          },
        ],
        sideCorner: "180deg",
      },
      secondary_color: "#bab97d",
      bgHeaderColor: "#18afd0",
      id: "8419",
    };
    expect(themeInfo).toMatchObject(themeInfoApi);
    let color = themeInfoApi.primary_color;
    renderComponent("text", color);
    let button = screen.getByRole("button");
    expect(button).toHaveStyle(`background: ${getBackground(color)}`);
  });
});
