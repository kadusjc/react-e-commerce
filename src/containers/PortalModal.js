import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';

const PortalModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Portal Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>This modal is rendered outside the component hierarchy.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById('modal-root')
  );
};

export default PortalModal;
