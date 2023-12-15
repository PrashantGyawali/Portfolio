import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codeEditor from "../../Assets/Projects/codeEditor.png";
import sudoku from "../../Assets/Projects/sudoku.png";
import mdEditor from "../../Assets/Projects/mdeditor.png";
import bombmenu from "../../Assets/Projects/menu.png";
import bombgame from "../../Assets/Projects/game.webp";
import bouncymenu from "../../Assets/Projects/bouncymenu.png";
import bouncygame from "../../Assets/Projects/bouncygame.png";
import weather from "../../Assets/Projects/weather.png"
import weather2 from "../../Assets/Projects/weather2.png"
import uurl from "../../Assets/Projects/uurl.webp";


function Projects() {
  const [CodeWriteImg,setCodeWriteImg]=useState(0);
  const [PassTheBombImg,setPassTheBombImg]=useState(0);
  const [sudokuImg,setSudokuImg]=useState(0);
  const [uurlImg,setuurlImg]=useState(0);
  const [weatherImg,setWeatherImg]= useState(0);
  const [bouncyBallsImg,setBouncyBallsImg]=useState(0);

  const imageTable={
    CodeWrite:[codeEditor,mdEditor],
    PassTheBomb:[bombmenu,bombgame],
    Sudoku:[sudoku],
    uurl:[uurl],
    weather:[weather,weather2],
    bouncyBalls:[bouncymenu,bouncygame]
  }
  const projectTable={
    CodeWrite:[CodeWriteImg,setCodeWriteImg],
    PassTheBomb:[PassTheBombImg,setPassTheBombImg],
    Sudoku:[sudokuImg,setSudokuImg],
    uurl:[uurlImg,setuurlImg],
    weather:[weatherImg,setWeatherImg],
    bouncyBalls:[bouncyBallsImg,setBouncyBallsImg]
  }
  const imageChange=(projectname)=>{
    if (projectTable[projectname][0]<imageTable[projectname].length-1)
    {
      projectTable[projectname][1](projectTable[projectname][0]+1);
    }
    else{
      projectTable[projectname][1](0);
  
    }
  }


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card" onClick={()=>imageChange("CodeWrite")}>
            <ProjectCard
              imgPath={imageTable["CodeWrite"][CodeWriteImg]}
              title="CodeWrite"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js and allows instant updated views of website. Online markdown editor for building README file. Both the editor supports auto save of work using Local Storage. There is also options to autocomplete tags, option to run code manually, show as tabs as well as various editor themes. The editor is also mobile friendly and responsive "
              ghLink="https://github.com/PrashantGyawali/CodeWrite"
              demoLink="https://prashantgyawali.github.io/CodeWrite/"              
            />
          </Col>

          <Col md={4} className="project-card" onClick={()=>imageChange("PassTheBomb")}>
            <ProjectCard
              imgPath={imageTable["PassTheBomb"][PassTheBombImg]}
              title="Pass The Bomb"
              description="A simple realtime multiplayer game made using websockets.The game allows people to create their own rooms and join other rooms with at max 6 players. A bomb is ticking that will explode after random time. Pass the bomb to others before it explodes. The game supports custom host i.e. anyone can host the server or forward their ports and address if they have the server file. The game is currently publicly hosted on render."
              ghLink="https://github.com/PrashantGyawali/PassTheBomb"
              demoLink="prashantgyawali.github.io/PassTheBomb/"
            />
          </Col>

          <Col md={4} className="project-card" onClick={()=>imageChange("Sudoku")}>
            <ProjectCard
              imgPath={imageTable["Sudoku"][sudokuImg]}
              title="Sudoku"
              description="It is a simple game made using C. It uses input event loop and pseudo graphical interface. It has multiple options ranging from hints, error detection, normal and hardcore mode. An recursive backtracking algorithm is implemented as ai to solve the game. Furthermore, you can save and continue any of your past games. Hardcore mode also has feature of deleting the game on mistake :P"
              ghLink="https://github.com/PrashantGyawali/Sudoku"
              demoLink="https://github.com/PrashantGyawali/Sudoku"
            />
          </Col>

          <Col md={4} className="project-card" onClick={()=>imageChange("uurl")}>
            <ProjectCard
              imgPath={imageTable["uurl"][uurlImg]}
              title="uurl"
              description="uurl is a url shortener service built using node.js and mongodb. It is a simple url shortener service that allows users to shorten their long urls. The service also provides feedbacks on the links shortened like the number of clicks it has and the date it was shortened. The service is currently hosted on render."
              ghLink="https://github.com/PrashantGyawali/uurl"
              demoLink="https://uurls.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card" onClick={()=>imageChange("weather")}>
            <ProjectCard
              imgPath={imageTable["weather"][weatherImg]}
              title="Weather App"
              description="Weather App uses the weather api to gather data about the weather of a place. The app allows users to search for the weather of any location based on the city name or by latitute and longitude. It features a simple and clean UI with support for dark mode. Moreover it allows users to save the location of their choice so that they dont have to search for it again. The app also uses a simple caching system to cache the results of the search to minimize the api calls. "
              ghLink="https://github.com/PrashantGyawali/Weather-app"
              demoLink="https://prashantgyawali.github.io/Weather-app/"              
            />
          </Col>

          <Col md={4} className="project-card" onClick={()=>imageChange("bouncyBalls")}>
            <ProjectCard
              imgPath={imageTable["bouncyBalls"][bouncyBallsImg]}
              title="Bouncy Balls"
              description="Bouncy balls is a simple endless 2d game made using canvas. The goal of the game is to fit as many balls inside the screen as possible. The  game has various stages with increasing difficulty as more balls are present inside the screen. The game involves collision detection and calculations involving oblique elastic collision. The game is accompanied with epik music and sound effects. "
              ghLink="https://github.com/PrashantGyawali/BouncyBalls"
              demoLink="https://prashantgyawali.github.io/BouncyBalls/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
