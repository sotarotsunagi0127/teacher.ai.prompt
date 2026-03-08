import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CopyPromptButton } from "@/components/prompt/copy-prompt-button";
import { PromptCard } from "@/components/prompt/prompt-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPromptBySlug, getRelatedPrompts } from "@/lib/prompts";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const prompt = getPromptBySlug(params.slug);
  if (!prompt) {
    return {
      title: "プロンプトが見つかりません"
    };
  }

  return {
    title: `${prompt.title} | 先生のためのAIプロンプト集`,
    description: `${prompt.description}（用途: ${prompt.useCase} / 教科: ${prompt.subject.join("・")}）`
  };
}

export default function PromptDetailPage({ params }: { params: { slug: string } }) {
  const prompt = getPromptBySlug(params.slug);

  if (!prompt) {
    notFound();
  }

  const related = getRelatedPrompts(prompt, 3);

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <Link href="/prompts" className="text-sm text-primary hover:underline">
          ← プロンプト一覧に戻る
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">{prompt.title}</h1>
        <p className="text-slate-700">{prompt.description}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="accent">{prompt.useCase}</Badge>
          <Badge variant="outline">{prompt.difficulty}</Badge>
          {prompt.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>
      </div>

      <Card className="border-2 border-amber-300 bg-amber-50">
        <CardHeader>
          <CardTitle className="text-lg text-amber-900">このプロンプトを使う前に確認すること</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-amber-900">
          <p>・個人情報（氏名、成績、健康、家庭情報）は入力しない</p>
          <p>・出力結果は必ず教員が確認・修正する</p>
          <p>・評価文や通知表はAI任せにせず、最終責任は教員が持つ</p>
          <p>・学校・自治体のガイドラインに従う</p>
        </CardContent>
      </Card>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>プロンプト本文</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm leading-7 text-slate-100">
              <code>{prompt.promptText}</code>
            </pre>
            <CopyPromptButton text={prompt.promptText} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>基本情報</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-700">
            <p>
              <span className="font-medium text-slate-900">対応校種:</span> {prompt.schoolLevel.join(" / ")}
            </p>
            <p>
              <span className="font-medium text-slate-900">対応教科:</span> {prompt.subject.join(" / ")}
            </p>
            <p>
              <span className="font-medium text-slate-900">用途:</span> {prompt.useCase}
            </p>
            <p>
              <span className="font-medium text-slate-900">想定シーン:</span> {prompt.scene}
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>入力例</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-sm text-slate-700">{prompt.inputExample}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>出力イメージ</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-sm text-slate-700">{prompt.outputExample}</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>使う際の注意点</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">{prompt.caution}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>カスタマイズのコツ</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">{prompt.tips}</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">関連プロンプト</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <PromptCard key={item.id} prompt={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
