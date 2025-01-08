import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CategoryIcon from "../../src/components/CategoryIcon";

const extImg = "https://avatars.githubusercontent.com/u/52691663";
const intImg = "2.png";

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
  function renderComponent(imageIcon, size) {
    render(<CategoryIcon imageIcon={imageIcon} size={size} />);
  }

  it("should contain an external image, with a class containing the words 'small'", () => {
    renderComponent(imageIconExternal, "small");
    let img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", extImg);
    expect(img).toHaveClass(/small/i);
  });

  it("should contain local image with a class containing the wors 'medium'", () => {
    renderComponent(imageIconLocal, "medium");
    let img = screen.getByRole("img");
    expect(img).toHaveAttribute(
      "src",
      import.meta.env.VITE_IMAGE_PATH + intImg
    );

    expect(img).toHaveClass(/medium/i);
  });
});
