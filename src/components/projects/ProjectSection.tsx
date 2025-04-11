import ProjectCard, { ProjectGrid } from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <ProjectGrid>
      <ProjectCard
        title="題庫選題於平行測驗建置 - 基因演算法"
        image="/projects/ga.png"
        description="利用基因演算法來幫助選題，並且可用於平行測驗的建置中，讓使用者從題庫中一鍵按下，同時產生兩份難度相當，且題目完全不重複的考卷，使用場景例如教師需出兩份試卷，一份用於補考學生， 使難度符合公平性外，也使題目不重複出現而無曝光性。"
        skills={["React JS", "MUI", "Node JS", "Express JS", "MongoDB", "Zeabur"]}
        link="/projects/century-encounter"
      />
      <ProjectCard
        title="診斷型測驗推算學習錯誤原因 - 貝氏機率"
        image="/projects/bsmf.png"
        description="利用貝氏機率診斷學生學習錯誤原因。教師可新增題目與錯誤類型，學生作答後，系統即時以貝氏機率計算各錯誤類型的熟悉度，並預測答對率。測驗結束後，會依據不熟悉程度排序錯誤類型，並提供對應說明與教師提供的學習影片協助複習。"
        skills={["React", "MUI", "Node.js", "Express", "MongoDB", "Zeabur"]}
        link="/projects/century-encounter"
      />
      <ProjectCard
        title="BinGo併電商網站"
        image="/projects/bingobin.png"
        description="一個讓使用者可以快速找到人一起免運、併單、團購的平台，主要負責後端以及前端部分重構"
        skills={["EJS", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Zeabur"]}
        link="/projects/century-encounter"
      />
      <ProjectCard
        title="百年南遇解謎遊戲"
        image="/projects/pah-ni-lam-gu.png"
        description="一款結合 PixiJS、LINE Bot 的解謎互動遊戲，使用 Express 建立後端伺服器"
        skills={["HTML", "CSS", "JavaScript", "Pixi.js", "Express", "Heroku", "LINE Bot"]}
        link="/projects/century-encounter"
      />
    </ProjectGrid>
  );
}