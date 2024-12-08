import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";

/** This component creates a modal that can be opened and closed with additional parameters that can be passed in via props. */

export default function ModalBox({
  show,
  onHide,
  modalTitle,
  children,

  ...extras
}) {
  return (
    <>
      <div>
        <Modal
          data-testid="modal"
          show={show}
          {...extras}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          scrollable
        >
          <Modal.Header closeButton onHide={onHide}>
            <Modal.Title id="contained-modal-title-vcenter">
              {modalTitle}
            </Modal.Title>
          </Modal.Header>

          {children}
        </Modal>
      </div>
    </>
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
