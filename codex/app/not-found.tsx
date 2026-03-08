import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-semibold text-slate-900">ページが見つかりません</h1>
      <p className="mt-3 text-slate-600">URLをご確認のうえ、プロンプト一覧から再度お探しください。</p>
      <Button asChild className="mt-6">
        <Link href="/prompts">プロンプト一覧へ</Link>
      </Button>
    </div>
  );
}
