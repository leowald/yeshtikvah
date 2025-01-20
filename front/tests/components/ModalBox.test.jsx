import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ModalBox from "../../src/components/ModalBox.jsx";

describe("group of tests which test the modal component", () => {
  function renderComponent(show, modalTitle, size) {
    const onHide = vi.fn(() => false);
    render(
      <ModalBox
        size={size}
        show={show}
        modalTitle={modalTitle}
        onHide={onHide}
      />
    );
    return {
      modal: screen.getByTestId("modal"),
      button: screen.getByRole("button", { name: "Close" }),
      onHide: onHide,
    };
  }

  it("should render a modal component with the test-id modal.", () => {
    const { modal } = renderComponent(true, "Sample title");
    expect(modal).toBeInTheDocument();
  });

  it("should render a modal component with the size lg and title Testing Title.", () => {
    const { modal } = renderComponent(true, "Testing title", "lg");
    expect(modal).toBeInTheDocument();
    expect(screen.getByText("Testing title")).toBeInTheDocument();
    expect(modal).toBeVisible();
    expect(modal).toHaveClass(/lg/i);
  });

  it("should render a modal component that is hidden.", () => {
    render(
      <ModalBox show={false} modalTitle={"Testing modal hidden"}></ModalBox>
    );
    const modalHidden = screen.queryByText("Testing modal hidden");
    expect(modalHidden).toBeFalsy();
  });

  it("should render a modal component and when the user clicks the x/close button, it should call the onHide function.", async () => {
    const { modal, button, onHide } = renderComponent(true, "Sample title");
    expect(modal).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(button);
    expect(onHide).toHaveBeenCalled();
  });
});
