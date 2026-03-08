import Link from "next/link";

import { SafetyNotice } from "@/components/common/safety-notice";
import { PromptCard } from "@/components/prompt/prompt-card";
import { HeroSearchForm } from "@/components/search/hero-search-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPrompts, getPopularPrompts, getRecommendedPrompts } from "@/lib/prompts";
import { USE_CASES } from "@/types/prompt";

export default function Home() {
  const all = getAllPrompts();
  const recommended = getRecommendedPrompts(3);
  const popular = getPopularPrompts(3);
  const newest = all.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-100 to-white p-8">
        <p className="text-sm font-medium text-primary">授業準備・学級経営・評価文作成・校務効率化</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">先生のためのAIプロンプト集</h1>
        <p className="mt-4 max-w-2xl text-slate-700">
          授業・学級経営・校務で使える、すぐ使える生成AIプロンプトを整理。教育現場に寄り添った日本語テンプレートをすぐに検索・利用できます。
        </p>
        <HeroSearchForm />
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href="/prompts">プロンプト一覧へ</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/categories">カテゴリから探す</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">おすすめプロンプト</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {recommended.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">カテゴリ一覧</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((item) => (
            <Card key={item}>
              <CardContent className="flex items-center justify-between p-4">
                <span className="font-medium text-slate-800">{item}</span>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/prompts?useCase=${encodeURIComponent(item)}`}>見る</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>人気プロンプト</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {popular.map((item) => (
              <div key={item.id}>
                <Link href={`/prompts/${item.slug}`} className="font-medium text-slate-800 hover:text-primary">
                  {item.title}
                </Link>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>新着プロンプト</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {newest.map((item) => (
              <div key={item.id}>
                <Link href={`/prompts/${item.slug}`} className="font-medium text-slate-800 hover:text-primary">
                  {item.title}
                </Link>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <SafetyNotice />
    </div>
  );
}
