import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Row md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRO</span>DUCE MYSELF
            </h1>
            <p className="home-about-body">
              I started <b className="purple">Programming</b> in early 2022
              <br /> <br/>
               I am a 4th year<b className="purple"> Software
              Engineering</b> student in AI stream at Addis Ababa University.<br/><br/>
              <i>
               As a <b className="purple">Web</b> and <b className="purple">Flutter</b>  developer, I have a passion for creating intuitive and engaging user experiences
              </i>
              <br/><br/>
              <i> My journey in software engineering, particularly as I delve into <b className="purple">AI</b> through its stream, has ignited a deep interest in machine learning, driving me to explore its applications and possibilities.</i>

              <br />
              <br />
             
            </p>
          </Row>
        
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sosinaesayas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sosina-esayas-7527bb248/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sosinaesayas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
