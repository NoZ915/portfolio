import SkillSection from "@/components/SkillSection";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <section className="max-w-3xl mx-auto space-y-8">
        {/* 自我介紹 */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Hi👋</h1>
          <p className="text-muted-foreground text-lg">
            我是一位熱愛前端的開發者，擅長 React、Next.js、和資料視覺化，喜歡打造漂亮又實用的產品。
          </p>
        </div>

        {/* 技能區塊 */}
        <SkillSection />
      </section>
    </main>
  );
}
