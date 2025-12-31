import React, { useState } from "react";
import { Modal, FormControl, Button } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function LocationBox({ show, handleClose }) {
  const [address, setAddress] = useState("");

  const handleConfirm = () => {
    if (!address.trim()) return;

    // Save to localStorage
    localStorage.setItem("userAddress", address);

    // Fire custom event so Navbar + ViewCartPage update instantly
    window.dispatchEvent(new Event("addressUpdated"));

    // Send address to parent if needed
    handleClose(address);
  };

  return (
    <Modal
      show={show}
      onHide={() => handleClose()}
      centered
      backdrop="static"
      keyboard={false}
      scrollable // ensures only modal content scrolls
    >
      <Modal.Body
        style={{ maxHeight: "70vh", overflowY: "auto", position: "relative", padding: "1.5rem" }}
      >
        {/* Close Icon */}
        <RxCross2
          size={24}
          style={{ position: "absolute", right: 15, top: 15, cursor: "pointer" }}
          onClick={() => handleClose()}
        />

        {/* Back Icon */}
        <IoArrowBack
          size={22}
          style={{ cursor: "pointer", marginBottom: 15 }}
          onClick={() => handleClose()}
        />

        <h5>Enter your address</h5>

        <FormControl
          type="text"
          placeholder="Enter full address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mb-3"
        />

        <Button
          className="w-100"
          disabled={!address.trim()}
          onClick={handleConfirm}
        >
          Confirm Address
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default LocationBox;
