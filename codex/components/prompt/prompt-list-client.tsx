"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";

import { PromptCard } from "@/components/prompt/prompt-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  DIFFICULTIES,
  SCHOOL_LEVELS,
  SUBJECTS,
  USE_CASES,
  type Difficulty,
  type PromptSort,
  type SchoolLevel,
  type Subject,
  type UseCase
} from "@/types/prompt";
import { filterPrompts } from "@/lib/prompts";

type PromptListClientProps = {
  initialFilters?: {
    q?: string;
    schoolLevel?: string;
    useCase?: string;
    subject?: string;
    difficulty?: string;
    sort?: PromptSort;
  };
};

export function PromptListClient({ initialFilters }: PromptListClientProps) {
  const [q, setQ] = useState(initialFilters?.q ?? "");
  const [schoolLevel, setSchoolLevel] = useState<SchoolLevel | "">(
    (initialFilters?.schoolLevel as SchoolLevel | "") ?? ""
  );
  const [useCase, setUseCase] = useState<UseCase | "">((initialFilters?.useCase as UseCase | "") ?? "");
  const [subject, setSubject] = useState<Subject | "">((initialFilters?.subject as Subject | "") ?? "");
  const [difficulty, setDifficulty] = useState<Difficulty | "">(
    (initialFilters?.difficulty as Difficulty | "") ?? ""
  );
  const [sort, setSort] = useState<PromptSort>(initialFilters?.sort ?? "popular");

  const filtered = useMemo(() => {
    return filterPrompts({
      q,
      schoolLevel: schoolLevel || undefined,
      useCase: useCase || undefined,
      subject: subject || undefined,
      difficulty: difficulty || undefined,
      sort
    });
  }, [difficulty, q, schoolLevel, sort, subject, useCase]);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 rounded-lg border border-border bg-white p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="キーワードで検索" className="xl:col-span-2" />

        <Select value={schoolLevel || "all"} onValueChange={(value) => setSchoolLevel(value === "all" ? "" : (value as SchoolLevel))}>
          <SelectTrigger>
            <SelectValue placeholder="校種" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">すべての校種</SelectItem>
            {SCHOOL_LEVELS.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={useCase || "all"} onValueChange={(value) => setUseCase(value === "all" ? "" : (value as UseCase))}>
          <SelectTrigger>
            <SelectValue placeholder="用途" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">すべての用途</SelectItem>
            {USE_CASES.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={subject || "all"} onValueChange={(value) => setSubject(value === "all" ? "" : (value as Subject))}>
          <SelectTrigger>
            <SelectValue placeholder="教科" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">すべての教科</SelectItem>
            {SUBJECTS.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={difficulty || "all"} onValueChange={(value) => setDifficulty(value === "all" ? "" : (value as Difficulty))}>
          <SelectTrigger>
            <SelectValue placeholder="難易度" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">すべての難易度</SelectItem>
            {DIFFICULTIES.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sort} onValueChange={(value) => setSort(value as PromptSort)}>
          <SelectTrigger>
            <SelectValue placeholder="並び順" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">人気順</SelectItem>
            <SelectItem value="newest">新着順</SelectItem>
            <SelectItem value="practical">実務利用しやすい順</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="text-sm text-slate-600">{filtered.length}件のプロンプトが見つかりました。</p>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
          <SearchX className="mx-auto mb-4 h-8 w-8 text-slate-500" />
          <p className="text-lg font-medium text-slate-800">条件に一致するプロンプトが見つかりませんでした</p>
          <p className="mt-2 text-sm text-slate-600">検索語を短くするか、フィルター条件を減らして再検索してください。</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </div>
  );
}
