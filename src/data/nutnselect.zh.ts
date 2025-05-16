export const nutnSelect = {
  sections: {
    technologies: "使用技術",
    introduction: "網站介紹",
    links: "官網連結",
    features: "主要功能",
    others: "其他補充",
  },
  content: {
    intro1:
      "「TAINAN選 | NUTN Select」是一個專為臺南大學學生打造的選課評價平台，前端使用 React、TypeScript 與 TanStack Query 開發，UI 採用 Mantine 並支援手機版響應式設計；後端以 Express.js 搭配 Sequelize ORM，採三層式架構（Controller、Service、Repository）設計，資料儲存於 MySQL，並使用 Sequelize Migration 管理資料表結構。全站部署於 Zeabur 雲平台。",
    intro2:
      "平台包含爬蟲功能，蒐集所有課程資料，讓學生可以查詢課程評價、發表評論、收藏課程，登入後可查看個人收藏與評論記錄。",
    linkSite: "作品網站入口",
    linkSource: "原始碼",
    features: [
      "具備 SEO，支援透過 Google 關鍵字搜尋，如 'nutnselect'、'TAINAN選'",
      "根據 Google Analytics 統計，上線首日即有 220 位新使用者",
      "課程搜尋、瀏覽",
      "課程評價撰寫",
      "課程收藏功能",
      "登入後可查看個人收藏與評論記錄",
    ],
    slides: "投影片簡報"
  },
};
