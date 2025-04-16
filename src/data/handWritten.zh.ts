export const handWritten = {
  sections: {
    technologies: "使用技術",
    introduction: "專案介紹",
    links: "專案連結",
    features: "主要功能",
    others: "其他補充",
  },
  content: {
    intro1:
      "「手寫辨識系統」是我在 2023 下學期「機器學習」課程中的期中專題，基於 多層感知器（MLP） 的概念，以原生 JavaScript（未使用任何 AI 框架）實作神經網路模型。前端部分則結合 HTML、CSS、JavaScript 進行視覺化呈現，並利用 p5.js 建立可供使用者書寫數字的畫布。系統會透過 p5.js 提供的工具對使用者書寫的內容進行擷取與處理，進一步切割成符合輸入格式的資料，最後透過自建的神經網路模型進行預測，輸出一個長度為 10 的陣列，代表對 0～9 各數字的預測信心分數。",
    intro2:
      "除此之外，為了能在不使用任何AI框架的情況下實作多層神經網路（MLP），也研讀了許多關於MLP的文獻，才能加以了解MLP中最重要的「前向傳遞 (feed forward)」、「反向傳遞(Backward propagation)」，以及理解其中所使用的數學工具，諸如微積分中的chain rule、偏導數，或是sigmoid函數與轉置矩陣等概念。",
    linkSite: "作品網站入口（無後端，因此啟動該網頁需等候一分半的時間，等待MNIST檔案載入並學習以提升正確率）",
    linkSource: "原始碼",
    features: [
      "具有畫布供使用者書寫數字，無論電腦、手機皆可使用",
      "使用者書寫數字後，系統將即時預測數字",
      "使用者可透過畫布上的按鈕進行清除",
      "右側將視覺化顯示預測結果",
    ],
    finalVideo: "Demo影片",
    report: "書面報告"
  },
};
