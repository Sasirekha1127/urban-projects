import React, { useState, useEffect } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import "./LocationBox.css";

function LocationBox({ show, address, onClose }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(address || "");
  }, [address]);

  // 🔥 Prevent scrollbar on page when modal opens
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [show]);

  const confirmAddress = () => {
    if (!value.trim()) return;
    onClose(value);
  };

  return (
    <Modal
      show={show}
      onHide={() => onClose()}
      centered
      dialogClassName="custom-modal-dialog"
    >
      <Modal.Header>
        <h5>Select Location</h5>
        <RxCross2 className="modal-close-icon" onClick={() => onClose()} />
      </Modal.Header>

      <Modal.Body className="custom-modal-body">
        <FormControl
          placeholder="Enter your address"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button variant="primary" onClick={confirmAddress}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LocationBox;
