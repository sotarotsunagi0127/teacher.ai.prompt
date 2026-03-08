import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "はじめての方へ | 先生のためのAIプロンプト集",
  description: "教員が安全に生成AIを活用するための基本とチェックリスト。"
};

export default function GettingStartedPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">はじめての方へ</h1>
      <p className="text-slate-700">
        生成AIは授業準備や文書作成の下書きに有効ですが、教育現場では安全性と最終確認が最重要です。
      </p>

      <Card>
        <CardHeader>
          <CardTitle>生成AIとは何か</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-slate-700">
          <p>生成AIは、入力した指示（プロンプト）をもとに文章案やアイデアを作る支援ツールです。</p>
          <p>教員の業務では「下書き作成」「整理」「言い換え」に特に有効です。</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>教員が使うときの基本</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-slate-700">
          <p>・個人情報を入力しない（氏名、成績、健康情報、家庭情報など）。</p>
          <p>・AI出力は必ず確認し、事実誤認や不適切表現を修正する。</p>
          <p>・通知表や所見は最終責任が教員にあることを前提に使う。</p>
          <p>・誤情報や表現の偏りが起こり得る前提でチェックする。</p>
          <p>・学校や自治体のガイドラインに従う。</p>
        </CardContent>
      </Card>

      <Card className="border-2 border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle>安全な使い方チェックリスト</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-800">
            <li className="list-inside list-disc">入力文に個人情報が含まれていない</li>
            <li className="list-inside list-disc">出力内容を事実確認した</li>
            <li className="list-inside list-disc">通知表・評価文をそのまま使っていない</li>
            <li className="list-inside list-disc">学校ルールに沿った利用か確認した</li>
            <li className="list-inside list-disc">必要に応じて管理職・同僚にレビュー依頼した</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
