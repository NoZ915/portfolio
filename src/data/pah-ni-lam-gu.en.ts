export const pahNiLamGu = {
  sections: {
    technologies: "Tech Stack",
    introduction: "Project Introduction",
    links: "Project Links",
    features: "Key Features",
    design: "Design Description",
    operation: "How to Play",
    others: "Others",
  },
  content: {
    intro1: `"Pah Nî Lâm Gū" was my graduation project developed during the 2022 academic year. The frontend uses PixiJS to build the game interface, while the LINE Bot, built with Express, serves as the medium for gameplay. It was initially deployed on Heroku and later migrated to the Zeabur cloud platform.`,
    intro2: "In the game, players interact with the protagonist Lú-Hîng and help him unravel the mystery and return to his original timeline. The story spans three historical periods in Tainan—Qing Dynasty, Japanese era, and modern times—blending real historical sites with puzzles to immerse players in the local culture.",
    linkGame: "Game Frontend",
    linkSource: "Source Code",
    features: [
      "Home page allows players to start the game or view instructions",
      "Dialog boxes automatically trigger when approaching certain buildings",
      "LINE Bot advances the story and provides item hints",
      "Items collected can be viewed by clicking the top-right item bar",
      "Use the spacebar to switch between game scenes"
    ],
    storyBackground: {
      title: "Story Background",
      content1: "Lú-Hîng is a time traveler who, during one of his time travels, made a mistake and became trapped in the wrong time period. In this endless, dark space, Lú-Hîng fortunately has an old time machine left to him by a senior. While the old-time machine still has communication capabilities, the system is outdated and has been deactivated. Therefore, Lú-Hîng must rely on this old-time machine to return to his original time period. However, he is struggling to figure out the clues needed to do so. Just as Lú-Hîng is still puzzled by how to solve the mystery, the communication signal suddenly lights up...",
      content2: "On the other hand, although the player and Lú-Hîng are in different time periods, their communication devices have similar frequencies due to their proximity, which allows them to establish contact. Whether Lú-Hîng can return to his original time period depends on how the player responds to this unexpected guest's request."
    },
    sceneDesign: {
      title: "Scene Design",
      content: "The game’s time settings progress through the Qing Dynasty, Japanese rule, and modern times. The locations are based on six key spots between Yonghua and Nanmen neighborhoods in Tainan City. For each period, corresponding important places are highlighted, with many puzzles based on historical names and old sites. As a result, players need to understand Tainan’s past to successfully solve the puzzles."
    },
    controls: [
      "- Arrow Keys: Move character",
      "- Spacebar: Interact with buildings / Switch scenes",
      "- Mouse click: Switch homepage / Enter help page, etc."
    ],
    previewVideo: "Game Trailer",
    finalVideo: "Final Presentation Video",
    slides: "Slide Deck",
    report: "Written Report"
  }
};
