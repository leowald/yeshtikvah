import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Error from "../../src/components/Error";

describe("tests for Error component", () => {
  function renderComponent(children) {
    render(<Error>{children}</Error>);
  }

  it("should contain the text passed in as props.children", () => {
    const childrenText = "error error error";
    renderComponent(childrenText);
    expect(screen.getByText(/error error error/i)).toBeInTheDocument();
  });

  it("should contain multiple elements passed through as props.children", () => {
    const childrenText = (
      <div>
        <h1>Hello</h1>
        <p>How are you</p>
      </div>
    );
    renderComponent(childrenText);
    screen.debug();
    expect(screen.getByRole("heading", { name: /hello/i })).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toHaveTextContent(/How are you/i);
  });
});
