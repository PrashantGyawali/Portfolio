import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="orange"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love with coding stuff and I am learning new things everyday in my journey
              <br />
              <br />I can code stuff in
              <i>
                <b className="yellow"> Javascript</b>,
                <b className="orange"> Python </b> and {" "}
                <b className="blue">C</b>
              </i>
              <br />
              <br />
              I love learning to build{" "}
              <i>
                <b className="yellow">Web apps </b> and
                <b className="orange"> {" "}
                games.
                </b>
              </i>
              <br />
              <br />
             Currently I am learning <b className="orange">MERN</b> stack
              and Next.js
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://media.licdn.com/dms/image/D4D03AQHcaiQZ6K8HTw/profile-displayphoto-shrink_400_400/0/1678795056973?e=1707955200&v=beta&t=3jDYnby1tGD33exSVufCzdRhWBglSeEdi5e2IsT4dg4" className="img-fluid border-circular" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><strong className="yellow">CONNECT</strong> WITH ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PrashantGyawali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prashant-gyawali-257138233/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
