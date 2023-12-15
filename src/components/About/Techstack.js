import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
  DiSass,
  DiSqllite
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons Js-hover">
        <DiJavascript1/>
      </Col>
      <Col xs={4} md={2} className="tech-icons Html5-hover">
        <DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons Css-hover">
        <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons Sass-hover">
        <DiSass/>
      </Col>
      <Col xs={4} md={2} className="tech-icons Node-hover">
        <DiNodejs/>
      </Col>
      <Col xs={4} md={2} className="tech-icons React-hover">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons Mongodb-hover">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons Firebase-hover">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons Next-hover">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons Git-hover">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons Postgres-hover">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons Python-hover">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons Sqlite-hover">
        <DiSqllite/>
      </Col>
      <Col xs={4} md={2} className="tech-icons Cpp-hover">
        <CgCPlusPlus />
      </Col>
    </Row>
  );
}

export default Techstack;
