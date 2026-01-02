import React, { useState, useEffect } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";

function LocationBox({ show, address, onClose }) {
  const [value, setValue] = useState("");

  // parent address load
  useEffect(() => {
    setValue(address || "");
  }, [address]);

  const confirmAddress = () => {
    if (!value.trim()) return;

    onClose(value);   // ✅ THIS closes modal + updates navbar
  };

  return (
    <Modal show={show} onHide={() => onClose()} centered>
      <Modal.Header className="d-flex justify-content-between">
        <h5>Select Location</h5>
        <RxCross2 style={{ cursor: "pointer" }} onClick={() => onClose()} />
      </Modal.Header>

      <Modal.Body>
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
