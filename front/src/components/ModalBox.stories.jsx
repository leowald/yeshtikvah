import { useState } from "react";
import ModalBox from "./ModalBox.jsx";
import Button from "react-bootstrap/Button";
import ModalBody from "react-bootstrap/esm/ModalBody";
import ModalFooter from "react-bootstrap/esm/ModalFooter";

export default {
  component: ModalBox,
  argTypes: { show: { control: "boolean" } },
  tags: ["autodocs"],
};

export const ModalBoxComponent = {
  args: {
    children: <ModalBody>Testing modal body</ModalBody>,
    id: "modal-test",
    size: "lg",
    show: true,
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
