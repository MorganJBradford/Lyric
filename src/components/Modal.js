import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../App.css';

function verticallyCenteredModal(props) {
  return(
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h1 className="no-lyrics">Sorry!</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>There are no lyrics available for this track</p>
      </Modal.Body>
      <Modal.Footer className="modal-foot">
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default verticallyCenteredModal;
