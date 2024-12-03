import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Alert from "../../src/components/Alert";

describe("tests for Alert component", () => {
  function renderComponent(type, children, flex = false) {
    render(
      <Alert flex={flex} type={type}>
        {children}
      </Alert>
    );
  }
  it("should contain an element with the class attribute which was passed in via the {type} prop", () => {
    renderComponent("warning");
    // bootstrap div has role alert
    expect(screen.getByRole("alert")).toHaveClass("alert-warning");
  });

  it("should contain the text passed in as props.children", () => {
    const childrenText = "hello how are you";
    renderComponent("warning", childrenText);
    expect(screen.getByText("hello how are you")).toBeInTheDocument();
  });

  it("should contain multiple elements passed through as props.children", () => {
    const childrenText = (
      <div>
        <h1>Hello</h1>
        <p>How are you</p>
      </div>
    );
    renderComponent("warning", childrenText);
    screen.debug();
    expect(screen.getByRole("heading", { name: /hello/i })).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toHaveTextContent(/How are you/i);
  });

  it('should have a class with the words "flex" if flex prop is true', () => {
    renderComponent("warning", "hello", true);
    expect(screen.getByRole("alert")).toHaveClass(/flex/i);
  });

  it('should not have a class with the words "flex" if flex prop is false', () => {
    renderComponent("warning", "hello", false);
    screen.debug();
    expect(screen.queryByRole("alert")).not.toHaveClass(/flex/i);
  });
});
