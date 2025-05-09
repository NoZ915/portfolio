export const projects = [
  {
    title: "TAINAN選",
    subtitle: "Course Review System",
    time: "2025/03 ~ 2025/05",
    image: "/projects/nutnselect.png",
    description: "A course review platform designed for students at National University of Tainan. It allows users to search for courses, view and bookmark them, and submit personal reviews. After logging in, users can manage their bookmarks and past reviews. The frontend is built with React, TypeScript, and TanStack Query, styled with Mantine and optimized for mobile responsiveness. The backend is developed using Express.js with a three-layer architecture (Controller, Service, Repository) and Sequelize ORM. MySQL is used for data storage, with Sequelize migrations for schema management. The entire system is deployed on the Zeabur cloud platform.",
    skills: ["TypeScript", "React", "TanStack", "Mantine", "Express JS", "Sequelize", "MySQL", "Zeabur"],
    link: "/projects/nutnselect"
  },
  {
    title: "Item Selection for Parallel Test Construction",
    subtitle: "Genetic Algorithm",
    time: "2024/05",
    image: "/projects/ga.png",
    description:
      "This project uses genetic algorithms to assist in item selection for parallel test construction. With one click, users can generate two exam papers of equivalent difficulty with completely different questions. This is especially useful for teachers needing two versions of a test, such as one for make-up exams, ensuring fairness in difficulty and avoiding question repetition and exposure.",
    skills: ["React JS", "MUI", "Node JS", "Express JS", "MongoDB", "Zeabur"],
    link: "/en/projects/ga"
  },
  {
    title: "Diagnostic Test for Inferring Learning Errors",
    subtitle: "Bayesian Probability",
    time: "2024/03 ~ 2024/04",
    image: "/projects/bsmf.png",
    description:
      "This system uses Bayesian probability to diagnose students' learning errors. Teachers can add questions and define error types. After students take the test, the system instantly calculates their familiarity with each error type and predicts their correctness probability. At the end of the test, unfamiliar error types are ranked, and learning videos provided by the teacher are recommended for review.",
    skills: ["React", "MUI", "Node.js", "Express", "MongoDB", "Zeabur"],
    link: "/en/projects/bsmf"
  },
  {
    title: "BinGo Group Buying Platform",
    subtitle: "Find People to Group Order Easily",
    time: "2023/12 ~ 2024/01",
    image: "/projects/bingobin.png",
    description:
      "A platform where users can easily find others to split shipping fees or make group purchases. Responsible for backend development and partial frontend refactoring.",
    skills: ["EJS", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Zeabur"],
    link: "/en/projects/binGobin"
  },
  {
    title: "Handwritten Digit Recognition System",
    subtitle: "Neural Network (Multilayer Perceptron)",
    time: "2023/09 ~ 2023/10",
    image: "/projects/hand-written.png",
    description:
      "Built with vanilla JavaScript (no AI framework), this project loads the MNIST dataset for training. Users can write digits directly on the web interface using p5.js, and CSS is used to visualize the recognition results.",
    skills: ["MLP (Multilayer Perceptron)", "JavaScript", "HTML", "CSS", "p5.js"],
    link: "/en/projects/hand-written"
  },
  {
    title: "Pah Nî Lâm Gū",
    subtitle: "Puzzle Game Based on PixiJS and LINE Bot",
    time: "2022/02 ~ 2023/01",
    image: "/projects/pah-ni-lam-gu.png",
    description:
      "A self-made puzzle game. From game script, art design, to programming, all were done independently. The game's interface was created using PixiJS, HTML DOM, and CSS. The game was played via LINE Bot, and the backend server was built with Express and deployed on the Heroku cloud platform.",
    skills: ["HTML", "CSS", "JavaScript", "Pixi.js", "Express", "Heroku", "LINE Bot"],
    link: "/en/projects/pah-ni-lam-gu"
  },
  {
    title: "Dengue Fever Learning Management System",
    subtitle: "Gamified Interactive Testing Platform",
    time: "2022/10 ~ 2022/12",
    image: "/projects/lms.png",
    description:
      "A complete learning management system designed and built from scratch, including learning scenarios, course content, and full-stack web development. Features include interactive learning (video lessons, Q&A, games), score tracking, leaderboard, message board, and login/registration.",
    skills: ["HTML", "CSS", "DIVE", "JavaScript", "diveLinker", "PHP", "MySQL", "phpMyAdmin", "Cookie", "XAMPP", "ngrok"],
    link: "/en/projects/dengueFeverLms"
  },
  {
    title: "Taiwan Travel Guide",
    subtitle: "Integrated with MOTC Open Data APIs",
    time: "2021/10 ~ 2021/12",
    image: "/projects/taiwan-travel-guide.png",
    description:
      "Used JavaScript to fetch open data APIs provided by Taiwan’s Ministry of Transportation. Implemented AJAX requests using Axios. Built a map with Leaflet.js using OpenStreetMap, and integrated location tracking using the Navigation Web API.",
    skills: ["HTML", "CSS", "JavaScript", "axios", "Leaflet", "OpenStreetMap", "Navigation Web API"],
    link: "/en/projects/taiwan-travel-guide"
  },
  {
    title: "Advanced Memory Game",
    subtitle: "Memory Game with Character Interaction",
    time: "2020/10 ~ 2020/12",
    image: "/projects/memory-game.png",
    description:
      "A memory game built with JavaScript, enhanced with character HP bars and color-changing effects using CSS. Player scores are saved via localStorage, encouraging players to challenge their own high scores.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
    link: "/en/projects/memory-game"
  },
  {
    title: "Monster Maze Adventure",
    subtitle: "DIVE Platform RPG Game with JavaScript",
    time: "2019/10 ~ 2019/12",
    image: "/projects/maze-game.png",
    description:
      "A monster-fighting RPG game built using the school's DIVE platform, combined with JavaScript to enable map switching and game logic implementation.",
    skills: ["DIVE", "JavaScript"],
    link: "/en/projects/maze-game"
  }
];
