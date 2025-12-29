import React, { useState, useEffect } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";

export default function LocationBox({ show, onClose }) {
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (show) {
      const saved = localStorage.getItem("userAddress") || "";
      setAddress(saved); // prefill saved address
    }
  }, [show]);

  const handleConfirm = () => {
    if (!address.trim()) return; // prevent empty address

    localStorage.setItem("userAddress", address); // save to localStorage

    // SAFETY CHECK
    if (typeof onClose === "function") {
      onClose(address); // pass value to parent
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => typeof onClose === "function" && onClose(null)} // clicking outside or close button
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>
        <FormControl
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button
          type="button"
          className="mt-3 w-100"
          onClick={handleConfirm}
        >
          Confirm Address
        </Button>
      </Modal.Body>
    </Modal>
  );
}
