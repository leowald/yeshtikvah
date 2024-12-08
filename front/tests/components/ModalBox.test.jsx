import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ModalBox from "../../src/components/ModalBox.jsx";

describe("group of tests which test the modal component", () => {
  function renderComponent(show, modalTitle) {
    const onHide = vi.fn(() => false);
    render(<ModalBox show={show} modalTitle={modalTitle} onHide={onHide} />);
    return {
      modal: screen.getByTestId("modal"),
      buttons: screen.getAllByRole("button", { name: "Close" }),
      onHide: onHide,
    };
  }

  it("should render a modal component with the test-id modal.", () => {
    const { modal } = renderComponent(true, "Sample title");
    expect(modal).toBeInTheDocument();
  });

  it("should render a modal component and when the user clicks the x/close button, it should call the onHide function.", async () => {
    const { modal, buttons, onHide } = renderComponent(true, "Sample title");
    expect(modal).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
    const user = userEvent.setup();
    await user.click(buttons[0]);
    screen.debug();
    expect(onHide).toHaveBeenCalled();
  });
});
