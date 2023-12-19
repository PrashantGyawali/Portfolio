import React from "react";
import Card from "react-bootstrap/Card";
import { ImBook, ImLaptop, ImPacman} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span style={{color:"orange"}}>Prashant Gyawali </span>
            from  Kathmandu,Nepal.
            <br />
            I am currently pursuing Computer Engineering at <a href="https://pcampus.edu.np/" target="_blank"className="purple" >IOE, Pulchowk Campus</a>.
            <br />
            I am looking for an internship opportunity in the field of Software Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPacman /> Playing Games
            </li>
            <li className="about-activity">
              <ImLaptop /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImBook /> Reading Mangas, Webtoons
            </li> 
          </ul>

          <p style={{ color: "rgb(155 126 172)", textAlign:"left" }}>
          “Strive for progress, not perfection.”{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
