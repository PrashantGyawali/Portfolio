import codewrite from '/public/projects/codeEditor.png';
import codewrite2Img1 from '/public/projects/codeWrite2Img1.jpg';
import codewrite2Img2 from '/public/projects/codeWrite2Img2.png';
import codewrite2Img3 from '/public/projects/codeWrite2Img3.png';
import codewrite2Img4 from '/public/projects/codeWrite2Img4.png';
import codewrite2Img5 from '/public/projects/codeWrite2Img5.png';
import game from '/public/projects/game.webp';
import menu from '/public/projects/menu.png';
import sudoku from '/public/projects/sudoku.png';
import uurl from '/public/projects/uurl.webp';
import bouncygame from '/public/projects/bouncygame.png';
import bouncymenu from '/public/projects/bouncymenu.png';
import mdeditor from '/public/projects/mdeditor.png';

export const projectsData = [
    {
        id: 1,
        name: 'CodeWrite-2.0',
        description: "Improved online web and markdown editor. Now with support for mulitple languages, multiple projects, cloud storage, code sharing and deployment. Includes inbuilt codesnippet tool to take beautiful screenshots of code.  ",
        tools: ['Express', 'MongoDB', 'React','React router','Javascript', 'Node js'],
        role: 'Fullstack Developer',
        code: 'https://github.com/PrashantGyawali/CodeWrite-2',
        demo: 'https://codewrite-2.vercel.app/',
        images: [codewrite2Img1,codewrite2Img2,codewrite2Img3,codewrite2Img4,codewrite2Img5],
    },
    {
        id: 2,
        name: 'CodeWrite',
        description: 'Online code and markdown editor. Online Editor which supports html, css, and js and allows instant updated views of website. Online markdown editor for building README file. Both the editor supports auto save of work using Local Storage. There is also options to autocomplete tags, option to run code manually, show as tabs as well as various editor themes. The editor is also mobile friendly and responsive.',
        tools: ['React',"JavaScript","Bootstrap"],
        role: 'Full Stack Developer',
        code: 'https://github.com/PrashantGyawali/CodeWrite',
        demo: 'https://prashantgyawali.github.io/CodeWrite/',
        images: [codewrite,mdeditor],
    },
    {
        id: 3,
        name: 'Sudoku',
        description: 'It is a simple game made using C. It uses input event loop and pseudo graphical interface. It has multiple options ranging from hints, error detection, normal and hardcore mode. An recursive backtracking algorithm is implemented as ai to solve the game. Furthermore, you can save and continue any of your past games. Hardcore mode also has feature of deleting the game on mistake :P',
        tools: ['C', 'C++'],
        code: 'https://github.com/PrashantGyawali/Sudoku',
        role: 'Full Stack Developer',
        demo: 'https://github.com/PrashantGyawali/Sudoku',
        images: [sudoku],
    },
    {
        id: 4,
        name: 'Pass The Bomb',
        description: "A simple realtime multiplayer game made using websockets.The game allows people to create their own rooms and join other rooms with at max 6 players. A bomb is ticking that will explode after random time. Pass the bomb to others before it explodes. The game supports custom host i.e. anyone can host the server or forward their ports and address if they have the server file. The game is currently publicly hosted on render.",
        tools: ['Websocket', 'Node js', 'Express'],
        code: 'https://github.com/PrashantGyawali/PassTheBomb',
        demo: 'https://prashantgyawali.github.io/PassTheBomb/',
        images: [game,menu],
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'uurl',
        description: "uurl is a url shortener service built using node.js and mongodb. It is a simple url shortener service that allows users to shorten their long urls. The service also provides feedbacks on the links shortened like the number of clicks it has and the date it was shortened. The service is currently hosted on render.",
        tools: ['React','Node js', 'Express', 'MongoDB'],
        code: 'https://github.com/PrashantGyawali/uurl',
        demo: 'https://uurls.onrender.com/',
        images: [uurl],
        role: 'Full Stack Developer',
    },
    {
        id: 6,
        name: 'Bouncy Balls',
        description: "Bouncy balls is a simple endless 2d game made using canvas. The goal of the game is to fit as many balls inside the screen as possible. The  game has various stages with increasing difficulty as more balls are present inside the screen. The game involves collision detection and calculations involving oblique elastic collision. The game is accompanied with epik music and sound effects. ",
        tools: ['Javascript', 'HTML', 'CSS'],
        code: 'https://github.com/PrashantGyawali/BouncyBalls',
        demo: 'https://prashantgyawali.github.io/BouncyBalls/',
        images: [bouncygame,bouncymenu],
    }
];
