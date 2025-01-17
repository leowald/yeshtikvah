import { useState } from "react";
import ModalBox from "./ModalBox.jsx";
import Button from "react-bootstrap/Button";
import ModalBody from "react-bootstrap/esm/ModalBody";
import ModalFooter from "react-bootstrap/esm/ModalFooter";

export default {
  component: ModalBox,
  render: ({ modalBody, modalFooter, ...args }) => (
    <ModalBox {...args}>
      <ModalBody>{modalBody}</ModalBody>
      <ModalFooter>{modalFooter}</ModalFooter>
    </ModalBox>
  ),
  tags: ["autodocs"],
};

export const ModalBoxOpenComponent = {
  args: {
    modalBody: "testing modal body",
    modalFooter: "testing modal footer",
    id: "modal-test",
    size: "lg",
    show: "true",
    modalTitle: "Testing title modal",
  },
};

export const ModalBoxClosedComponent = {
  args: {
    modalBody: "testing modal body",
    modalFooter: "testing modal footer",
    id: "modal-test",
    size: "lg",
    show: false,
    modalTitle: "Testing title modal",
  },
};

function MultipleModals() {
  const [isOpen, updateIsOpen] = useState();

  return (
    <div>
      <div>
        <Button
          onClick={() => updateIsOpen("modal-one-test")}
          variant="primary"
        >
          Launch first sample modal!
        </Button>

        <ModalBox
          id="modal-one-test"
          size="lg"
          show={isOpen == "modal-one-test"}
          modalTitle="Sample title"
          updateIsOpen={updateIsOpen}
        >
          <ModalBody>Sample paragraph to test modal body.</ModalBody>
          <ModalFooter>Sample footer</ModalFooter>
        </ModalBox>
      </div>
      <div>
        <Button
          onClick={() => updateIsOpen("modal-two-test")}
          variant="secondary"
        >
          Launch second sample modal!
        </Button>

        <ModalBox
          id="modal-two-test"
          size="lg"
          show={isOpen === "modal-two-test"}
          modalTitle="Second title"
          updateIsOpen={updateIsOpen}
        >
          <ModalBody>Second paragraph to test modal body.</ModalBody>
          <ModalFooter>Sample footer</ModalFooter>
        </ModalBox>
      </div>
    </div>
  );
}

export const MultipleModalsComponent = {
  render: () => <MultipleModals></MultipleModals>,
};
