import SkillSection from "@/components/SkillSection";
import { Timeline, TimelineItem } from "@/components/Timeline";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <section className="max-w-5xl mx-auto space-y-4">
        {/* 自我介紹 */}
        <div className="space-y-2 px-4">
          <h1 className="text-3xl font-bold">YuXuan Lin 林育瑄</h1>
          <p className="text-muted-foreground text-md">
            對於前後端開發,有極大的熱情與興趣,總是讓各種專題不再只是數據、想法,而是更具完整性的系統，另外也樂於分享學習新知，曾參與過工作室 JavaScript 讀書會並擔任導讀。
          </p>
        </div>

        {/* 時間軸 */}
        <Timeline>
          <TimelineItem
            year="2024/07 ~ Now"
            title="新加坡商鈦坦科技 軟體實習工程師"
            description={[
              {
                text: "維護與開發超過10項的內部系統"
              },
              {
                text: "解決掉從古至今所有前人無法解決掉的bug"
              },
              {
                text: "利用BroadcaseChannel API，讓系統可以跨頁同步表單內容，並將知識整理與其他實習生分享"
              }
            ]}
          />
          <TimelineItem
            year="2021/04 ~ 2023/10"
            title="好想工作室 Web Camp"
            description={[
              {
                text: "每周 JavaScript 讀書會，曾擔任導讀，導讀內容包含閉包與範圍、正規表達式",
                subitems: [
                  {
                    text: "- 閉包與範圍",
                    link: "https://hackmd.io/@yuxuanlin/closure-and-scope"
                  },
                  {
                    text: "- 正規表達式",
                    link: "https://hackmd.io/@yuxuanlin/regex"
                  }
                ]
              },
              {
                text: "2022 iThome 鐵人賽 ：PixiJS 青銅玩家",
                link: "https://ithelp.ithome.com.tw/users/20152526/ironman/5741"
              }
            ]}
          />
        </Timeline>

        {/* 技能區塊 */}
        <SkillSection />
      </section>
    </main>
  );
}
