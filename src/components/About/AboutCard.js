import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello <span className="purple">Sosina  </span> <span className="purple"></span> here
            <br />I'm a 4th year software engineering student at Addis Ababa University.
            <br />
            <br />
            Apart from coding, what do I enjoy?
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>  
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
