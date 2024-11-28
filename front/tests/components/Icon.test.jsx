import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Icon from "../../src/components/Icon";

const topIconExample = {
  color: "green",
  name: "fa-house",
  type: "fas",
  style: { border: "1px solid #ff7888", borderRadius: "50%" },
};

const topIconEg2 = {
  color: "red",
  name: "fa-cog",
  type: "fas",
};

const bottomIconExample = {
  color: "pink",
  style: { border: "1px solid #ff7888", borderRadius: "50%" },
};

const bottomIconEg2 = {
  color: "purple",
};

describe("group of tests which test the Icon component", () => {
  function renderComponent(topIcon, size, bottomIcon, extras) {
    render(
      <Icon
        topIcon={topIcon}
        size={size}
        bottomIcon={bottomIcon}
        extras={extras}
      />
    );
  }
  it.each([{ icon: topIconExample }, { icon: topIconEg2 }])(
    "should render a component with $icon as a one-layered icon",
    ({ icon }) => {
      renderComponent(icon, "5x");
      expect(screen.getByTestId("topIcon")).toBeInTheDocument();
      expect(screen.getByTestId("topIcon")).toHaveAttribute(
        "color",
        `${icon.color}`
      );
    }
  );

  it.each([
    { topIcon: topIconExample, bottomIcon: bottomIconExample },
    { topIcon: topIconEg2, bottomIcon: bottomIconEg2 },
  ])(
    "should render a component with a two-layered icon - $topIcon on top of $bottomIcon",
    ({ topIcon, bottomIcon }) => {
      renderComponent(topIcon, "5x", bottomIcon);
      let tIcon = screen.getByTestId("topIcon");
      expect(tIcon).toBeInTheDocument();
      expect(tIcon).toHaveAttribute("color", `${topIcon.color}`);
      let btmIcon = screen.getByTestId("bottomIcon");
      expect(btmIcon).toBeInTheDocument();
      expect(btmIcon).toHaveAttribute("color", `${bottomIcon.color}`);
    }
  );
});
