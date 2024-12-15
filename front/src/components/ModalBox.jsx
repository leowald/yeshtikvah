import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
/** This component creates a modal that can be opened and closed with additional parameters that can be passed in via props. */

export default function ModalBox({
  show,
  modalTitle,
  children,
  updateIsOpen,

  ...extras
}) {
  const [show2, updateShow] = useState(show);
  console.log(show2);

  useEffect(() => {
    updateShow(show);
  }, [updateShow, show]);
  return (
    <div>
      <Modal
        onExited={() => updateIsOpen && updateIsOpen("")}
        data-testid="modal"
        show={show2}
        {...extras}
        centered
        animation={false}
      >
        <Modal.Header closeButton onHide={() => updateShow(false)}>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        {children}
      </Modal>
    </div>
  );
}

ModalBox.propTypes = {
  /** If the modal should be open or closed. */
  show: PropTypes.bool,
  /** Function to be called when the modal is closed. */
  onHide: PropTypes.func,
  /** Title of modal box.*/
  modalTitle: PropTypes.string,
};
