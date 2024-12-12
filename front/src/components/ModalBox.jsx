import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { useState, forwardRef, useRef } from "react";
/** This component creates a modal that can be opened and closed with additional parameters that can be passed in via props. */

const ModalBox = forwardRef(function ModalBox(
  {
    show,
    onHide,
    modalTitle,
    children,

    ...extras
  },
  ref
) {
  const [show2, updateShow] = useState(show);

  return (
    <div>
      <Modal ref={ref} data-testid="modal" show={show2} {...extras} centered>
        <Modal.Header closeButton onHide={onHide}>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        {children}
      </Modal>
    </div>
  );
});

export default ModalBox;

ModalBox.propTypes = {
  /** If the modal should be open or closed. */
  show: PropTypes.bool,
  /** Function to be called when the modal is closed. */
  onHide: PropTypes.func,
  /** Title of modal box.*/
  modalTitle: PropTypes.string,
};
