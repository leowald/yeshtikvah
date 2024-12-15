import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
/** This component creates a modal that can be opened and closed with additional parameters that can be passed in via props. */

export default function ModalBox({
  show,
  modalTitle,
  children,
  onHide,

  ...extras
}) {
  const [showModal, updateShowModal] = useState();

  function closeModal() {
    updateShowModal(false);
    onHide("");
  }
  useEffect(() => {
    updateShowModal(show);
  }, [updateShowModal, show]);
  console.log(showModal);
  return (
    <div>
      <Modal
        data-testid="modal"
        show={showModal}
        {...extras}
        centered
        animation={false}
      >
        <Modal.Header closeButton onHide={closeModal}>
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
  /** Title of modal box.*/
  modalTitle: PropTypes.string,
  /** Size of the modal */
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  /** The content to appear in the Modal Box */
  children: PropTypes.any,
  /** The function to be executed onHide. This function is only passed in if show is set to its state variable. */
  onHide: PropTypes.func,
};
