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

function ModalWithHooks() {
  const [modalShow, setModalShow] = useState(false);
  const handleChange = () => {
    if (modalShow) {
      setModalShow(false);
    }
  };
  return (
    <div>
      {" "}
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch sample modal!
      </Button>
      <ModalBox
        size="lg"
        show={modalShow}
        onHide={handleChange}
        modalTitle="Testing modal"
      >
        <ModalBody>
          <p>Sample paragraph in body</p>
        </ModalBody>
        <ModalFooter>Sample footer</ModalFooter>
      </ModalBox>
    </div>
  );
}

function MultipleModals() {
  const [modalShow, setModalShow] = useState(false);
  const [activeModal, setActiveModal] = useState();

  function handleOpenModal(val) {
    setActiveModal(val);
    setModalShow(true);
  }

  function handleCloseModal() {
    setActiveModal("");
    setModalShow(false);
  }

  return (
    <div>
      <div>
        <Button variant="primary" onClick={() => handleOpenModal("modal-one")}>
          Launch first sample modal!
        </Button>

        <ModalBox
          size="lg"
          show={modalShow && activeModal === "modal-one"}
          modalTitle="Sample title"
          onHide={handleCloseModal}
        >
          <ModalBody>Sample paragraph to test modal body.</ModalBody>
        </ModalBox>
      </div>
      <div>
        <Button
          variant="secondary"
          data-target="#modal-two"
          onClick={() => handleOpenModal("modal-two")}
        >
          Launch second sample modal!
        </Button>

        <ModalBox
          size="lg"
          show={modalShow && activeModal === "modal-two"}
          modalTitle="Second modal title"
          onHide={handleCloseModal}
        >
          <ModalBody>Second sample paragraph to test modal body.</ModalBody>
          <ModalFooter>Sample paragraph to test for modal footer.</ModalFooter>
        </ModalBox>
      </div>
    </div>
  );
}
export const ModalBoxComponent = {
  render: () => <ModalWithHooks />,
};

export const MultipleModalsComponent = {
  render: () => <MultipleModals></MultipleModals>,
};
