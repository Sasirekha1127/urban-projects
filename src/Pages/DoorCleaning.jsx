import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import doorImg from "../assets/door.png"; 
import doorVideo from "../assets/doorcleaning.mp4"; 

function DoorCleaning() {
  return (
    <Container fluid className="py-4 px-5">
      <Row className="align-items-center">
        {/* ---------- LEFT SIDE CONTENT ---------- */}
        <Col md={5} className="pe-4">
          <h2 className="fw-bold mb-2">Door Cleaning</h2>

          <div className="d-flex align-items-center mb-3">
            <FaStar color="gold" className="me-1" />
            <span className="fw-semibold me-2">4.8</span>
            <span className="text-muted">(12k bookings)</span>
          </div>

          <h5 className="fw-semibold mb-3">What’s included:</h5>
          <ul className="mb-3">
            <li>Complete door cleaning & sanitization</li>
            <li>Handles, hinges, and corners wiped</li>
            <li>Polish and odor removal</li>
            <li>Quick drying and final shine</li>
          </ul>

          <Button variant="dark" className="mt-2">
            Book Now
          </Button>
        </Col>

        {/* ---------- RIGHT SIDE VIDEO ---------- */}
        <Col md={7}>
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
            <Card.Body className="p-0">
              <video
                className="img-fluid rounded-4"
                controls
                poster={doorImg} // optional preview image
              >
                <source src={doorVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DoorCleaning;






