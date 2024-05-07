import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import afalagi from "../../Assets/Projects/afalagi.jpg";
import eigenface from "../../Assets/Projects/eigenFace pics/22.png";
import fisherface from "../../Assets/Projects/fisherFace pics/222.png";
import beautify from "../../Assets/Projects/eldelicios.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afalagi}
              isBlog={false}
              title="Afalagi"
              description="Streamlining Connections Between Freelancers and Companies"
              demoLink="https://github.com/sosinaesayas/mobile-app-development"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beautify}
              isBlog={false}
              title="Beautify"
              description="A React-Powered E-commerce Experience"
              demoLink="https://github.com/sosinaesayas/Beautify-redux"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eigenface}
              isBlog={false}
              title="Eigen face recognition"
              // description="Eigen face recognition"
              demoLink="https://github.com/sosinaesayas/Eigen-face-recognition"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fisherface}
              isBlog={false}
              title="Fisher face recognition"
              // description="An audio streaming platform"
              demoLink="https://github.com/sosinaesayas/Fisher-face-Recognition"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
