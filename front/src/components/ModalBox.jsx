import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
/** This component creates a modal that can be opened and closed with additional parameters that can be passed in via props. */

export default function ModalBox({
  show,
  onHide,
  modalTitle,
  children,

  ...extras
}) {
  const [show2, updateShow] = useState(show);

  return (
    <div>
      <Modal data-testid="modal" show={show2} {...extras} centered>
        <Modal.Header closeButton onHide={onHide}>
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
