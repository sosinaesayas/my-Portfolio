import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import cv from "../../Assets/../Assets/sosina_cv.pdf";

function downloadCV() {
  const link = document.createElement('a');
  link.href = cv;
  link.download = 'sosina_cv.pdf';
  link.click();
}

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Col style={{ justifyContent: "center", alignItems:"center" }}>
          <Col className="text-center"> 
            <Button
              variant="primary"
              onClick={downloadCV} 
              style={{ maxWidth: "250px", marginBottom: "50px" }} 
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
            </Col>
            <Col>
            <Button
              variant="primary"
              href={cv}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              &nbsp;Open CV
            </Button>
          </Col>
        </Col>
      </Container>
    </div>
  );
}

export default ResumeNew;
