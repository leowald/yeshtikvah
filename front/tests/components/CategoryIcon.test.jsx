import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CategoryIcon from "../../src/components/CategoryIcon";

const extImg = "https://avatars.githubusercontent.com/u/52691663";
const intImg = "Pic1.png";

const imageIconLocal = {
  src: intImg,
  alt: "this is an image",
  title: "this is an image title",
};

const imageIconExternal = {
  src: extImg,
  alt: "this is an image",
  title: "this is an image title",
};

describe("group of tests which test the CategoryIcon component", () => {
  function renderComponent(imageIcon) {
    render(<CategoryIcon imageIcon={imageIcon} />);
  }

  it("should contain an external image", () => {
    renderComponent(imageIconExternal);
    let img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", extImg);
  });

  it("should contain local image", () => {
    renderComponent(imageIconLocal);
    let img = screen.getByRole("img");
    expect(img).toHaveAttribute(
      "src",
      import.meta.env.VITE_IMAGE_PATH + intImg
    );
  });
});
