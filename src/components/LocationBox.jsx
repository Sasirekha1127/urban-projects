import React from "react";
import { Modal, FormControl } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function LocationBox ({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="bottom-slide-modal"
      contentClassName="bottom-slide-content"
    >
      <div className="modal-wrapper">
        {/* Close icon outside */}
        <RxCross2
          size={26}
          className="outside-close-icon"
          onClick={handleClose}
        />

        <Modal.Body className="p-4">
          {/* Search box with arrow inside */}
          <div className="search-input-wrapper mb-3">
            <IoArrowBack
              size={22}
              onClick={handleClose}
              className="back-arrow"
            />
            <FormControl
              type="text"
              placeholder="Search for your location/society/apartment"
              className="search-input shadow-none"
            />
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default LocationBox;
