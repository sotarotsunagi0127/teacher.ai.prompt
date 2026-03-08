import type { Metadata } from "next";

import { PromptListClient } from "@/components/prompt/prompt-list-client";

export const metadata: Metadata = {
  title: "プロンプト一覧 | 先生のためのAIプロンプト集",
  description:
    "校種・用途・教科・難易度で絞り込み可能。教員AIプロンプトを一覧で探せます。通知表所見AI、学級通信AI、授業準備AIにも対応。"
};

export default function PromptsPage({
  searchParams
}: {
  searchParams: {
    q?: string;
    schoolLevel?: string;
    useCase?: string;
    subject?: string;
    difficulty?: string;
    sort?: "popular" | "newest" | "practical";
  };
}) {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">プロンプト一覧</h1>
        <p className="mt-2 text-slate-700">キーワード検索とフィルターで、目的に合うプロンプトをすぐに見つけられます。</p>
      </div>
      <PromptListClient initialFilters={searchParams} />
    </div>
  );
}
