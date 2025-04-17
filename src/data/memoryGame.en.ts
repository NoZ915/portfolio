export const memoryGame = {
  sections: {
    technologies: "Technologies Used",
    introduction: "Project Introduction",
    links: "Project Links",
    features: "Key Features",
    others: "Additional Notes",
  },
  content: {
    intro1:
      "This is a memory-based game developed in four stages, starting from prototype design, followed by adding character animations, health bar styles, game interface, and a loading page. JavaScript functionalities were then enhanced, including health increase/decrease and color changes. Finally, scoring and page transition mechanisms were implemented, with scores stored using localStorage.",
    intro2:
      'The core concept of the game revolves around the "confrontation between positive and negative emotions." Emotional conflict is visually represented through character colors and health bars. The gameplay involves audio prompts and validating the order of block clicks—players engage in a battle by clicking the blocks in the correct sequence.',
    linkSite: "Live Demo",
    linkSource: "Source Code",
    features: [
      "Supports user input with retry mechanism after incorrect answers",
      "Character colors and health bars symbolize emotional conflict",
      "Includes a complete entry page, loading screen, and end screen",
      "Players interact with the blocks and questions; correct answers increase score and reduce opponent’s health",
      "Scores are saved using localStorage and displayed on the end screen",
    ],
    slides: "Presentation Slides",
    finalVideo: "Demo Video",
    report: "Written Report",
  },
};
