import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Error from "../../src/components/Error";

describe("tests for Error component", () => {
  function renderComponent(errTxt) {
    render(<Error errText={errTxt} />);
  }

  it("should contain the text passed in", () => {
    renderComponent("this is the message");
    expect(screen.getByText(/this is the message/i)).toBeInTheDocument();
  });

  it("should contain the words Error!", () => {
    renderComponent("this is the message");
    expect(screen.getByText(/error!/i)).toBeInTheDocument();
  });
});
