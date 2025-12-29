import React, { useState } from "react";
import { Button } from "react-bootstrap";
import LocationBox from "./LocationBox"; // adjust path

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [userAddress, setUserAddress] = useState(
    localStorage.getItem("userAddress") || ""
  );

  // This function is called by LocationBox when Confirm or close is clicked
  const handleLocationClose = (address) => {
    setShowModal(false);           // ✅ This closes the modal
    if (address) setUserAddress(address); // updates parent state
  };

  return (
    <div className="p-3">
      <h4>Address: {userAddress || "No address set"}</h4>
      <Button onClick={() => setShowModal(true)}>Add / Edit Address</Button>

      {/* LocationBox modal */}
      <LocationBox show={showModal} onClose={handleLocationClose} />
    </div>
  );
}
