import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SUBJECTS, USE_CASES } from "@/types/prompt";

export const metadata: Metadata = {
  title: "カテゴリから探す | 先生のためのAIプロンプト集",
  description: "用途別・教科別に教員向けAIプロンプトを探せます。"
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">カテゴリから探す</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">用途別カテゴリ</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((item) => (
            <Card key={item}>
              <CardContent className="flex items-center justify-between p-4">
                <span className="font-medium text-slate-800">{item}</span>
                <Link href={`/prompts?useCase=${encodeURIComponent(item)}`} className="text-sm text-primary hover:underline">
                  一覧へ
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">教科別カテゴリ</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map((item) => (
            <Card key={item}>
              <CardContent className="flex items-center justify-between p-4">
                <span className="font-medium text-slate-800">{item}</span>
                <Link href={`/prompts?subject=${encodeURIComponent(item)}`} className="text-sm text-primary hover:underline">
                  一覧へ
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>探し方のヒント</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-slate-700">
          <p>・初めての方は「初級 × 学級通信」など用途を絞ると見つけやすくなります。</p>
          <p>・実務利用しやすい順で並べると、明日すぐ使えるプロンプトから確認できます。</p>
        </CardContent>
      </Card>
    </div>
  );
}
