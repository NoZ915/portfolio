export const memoryGame = {
  sections: {
    technologies: "使用技術",
    introduction: "專案介紹",
    links: "專案連結",
    features: "主要功能",
    others: "其他補充",
  },
  content: {
    intro1:
      "這是一個記憶性質的遊戲，整體開發分為四個階段，從前置作業的原型設計開始，到角色動畫、血條樣式、遊戲介面與 loading page 的加入，再到 JavaScript 功能的完善如血量增減與顏色變化，最後加入分數與頁面切換機制，並使用 localStorage 儲存分數。",
    intro2:
      "本遊戲以「正面與負面情緒對抗」為核心概念，透過角色顏色與血條機制來傳遞情緒對抗的意象，並加入題目播放與點擊順序驗證的流程，藉由點擊方塊正確順序進行對抗。",
    linkSite: "作品網站入口",
    linkSource: "原始碼",
    features: [
      "支援答題輸入與答錯重試機制",
      "以角色顏色與血條象徵正負面情緒的對抗",
      "有完整的遊戲進入頁面、Loading 頁面、結束頁面",
      "使用者可透過點擊方塊與題目進行互動，答對會加分並削減對手血量",
      "使用 localStorage 儲存分數於結束畫面顯示",
    ],
    slides: "投影片簡報",
    finalVideo: "Demo影片",
    report: "書面報告"
  },
};
