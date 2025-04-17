export const projects = [
    {
        title: "題庫選題於平行測驗建置",
        subtitle: "基因演算法 (Genetic Algorithm)",
        time: "2024/05",
        image: "/projects/ga.png",
        description: "利用基因演算法來幫助選題，並且可用於平行測驗的建置中，讓使用者從題庫中一鍵按下，同時產生兩份難度相當，且題目完全不重複的考卷，使用場景例如教師需出兩份試卷，一份用於補考學生， 使難度符合公平性外，也使題目不重複出現而無曝光性。",
        skills: ["React JS", "MUI", "Node JS", "Express JS", "MongoDB", "Zeabur"],
        link: "/projects/ga"
    },
    {
        title: "診斷型測驗推算學習錯誤原因",
        subtitle: "貝氏機率 (Bayesian Probability)",
        time: "2024/03 ~ 2024/04",
        image: "/projects/bsmf.png",
        description: "利用貝氏機率診斷學生學習錯誤原因。教師可新增題目與錯誤類型，學生作答後，系統即時以貝氏機率計算各錯誤類型的熟悉度，並預測答對率。測驗結束後，會依據不熟悉程度排序錯誤類型，並提供對應說明與教師提供的學習影片協助複習。",
        skills: ["React", "MUI", "Node.js", "Express", "MongoDB", "Zeabur"],
        link: "/projects/bsmf"
    },
    {
        title: "BinGo併電商網站",
        subtitle: "快速找人一起併單、團購的平台",
        time: "2023/12 ~ 2024/01",
        image: "/projects/bingobin.png",
        description: "一個讓使用者可以快速找到人一起免運、併單、團購的平台，主要負責後端以及前端部分重構。",
        skills: ["EJS", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Zeabur"],
        link: "/projects/binGobin"
    },
    {
        title: "手寫辨識系統",
        subtitle: "神經網路 (Multilayer Perceptron)",
        time: "2023/09 ~ 2023/10",
        image: "/projects/hand-written.png",
        description: "使用原生JavaScript (Without AI Framework)實作MLP，並將MNIST資料集讀入之後作訓練，且搭配p5.js供使用者可以在網頁中寫上數字，以及利用CSS視覺化成果。",
        skills: ["MLP (Multilayer Perceptron)", "JavaScript", "HTML", "CSS", "p5.js"],
        link: "/projects/hand-written"
    },
    {
        title: "百年南遇 Pah Nî Lâm Gū",
        subtitle: "基於PixiJS與LINE Bot之解謎遊戲",
        time: "2022/02 ~ 2023/01",
        image: "/projects/pah-ni-lam-gu.png",
        description: "一款自製解謎遊戲，從遊戲腳本、美術設計到程式設計皆自行完成。主要由pixi.js以及操作HTML DOM元素、CSS來完成網頁遊戲之畫面，而遊戲媒介則透過LINE Bot完成，背後則透過Express做為後端框架來建立伺服器連接，並將LINE Bot部署在Heroku這個雲平台上。",
        skills: ["HTML", "CSS", "JavaScript", "Pixi.js", "Express", "Heroku", "LINE Bot"],
        link: "/projects/pah-ni-lam-gu"
    },
    {
        title: "登革熱學習管理系統網站",
        subtitle: "遊戲式互動測驗平台",
        time: "2022/10 ~ 2022/12",
        image: "/projects/lms.png",
        description: "為一學習管理系統，從學習情境、課程內容設計，網站前後端架設皆自行完成。該網站包含學習互動（影片教學、問答、遊戲式互動測驗)、成績紀錄與排行榜、留言板、登入 / 註冊頁面",
        skills: ["HTML", "CSS", "DIVE", "JavaScript", "diveLinker", "PHP", "MySQL", "phpMyAdmin", "Cookie", "XAMPP", "ngrok"],
        link: "/projects/dengueFeverLms"
    },
    {
        title: "臺灣旅遊導覽",
        subtitle: "結合交通部運輸資料API",
        time: "2021/10 ~ 2021/12",
        image: "/projects/f2e.png",
        description: "透過 JS 串接交通部提供的 api，ajax 實現方法則用了 axios 的套件，地圖用了 Leaflet 這個 js 框架，以及地圖資料使用了openStreetMap， 而定位的部分則是使用了navigation web api",
        skills: ["HTML", "CSS", "JavaScript", "axios", "Leaflet", "OpenStreetMap", "Navigation Web API"],
        link: "/projects/taiwan-travel-guide"
    },
    {
        title: "記憶遊戲進階版",
        subtitle: "擁有角色互動之記憶遊戲",
        time: "2020/10 ~ 2020/12",
        image: "/projects/memory-game.png",
        description: "藉由 JavaScript 完成的記憶遊戲，再加上 CSS 加入血條 與會變色的腳色，將一般的記憶遊戲又更添樂趣。以及 利用 localStorage 將分數紀錄，讓玩家可以再次挑戰自 己的分數！",
        skills: ["HTML", "CSS", "JavaScript"],
        link: "/projects/century-encounter"
    },
    {
        title: "迷宮打怪喝藥水",
        subtitle: "DIVE平台結合JavaScript之打怪遊戲",
        time: "2019/10 ~ 2019/12",
        image: "/projects/dive.png",
        description: "利用學校實驗室開發的 DIVE 平台完成之遊戲，並且搭配 JavaScript 來串接個個專案，達到可以跳轉地圖的功能。",
        skills: ["DIVE", "JavaScript"],
        link: "/projects/century-encounter"
    }
];