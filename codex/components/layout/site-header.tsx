import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          先生のためのAIプロンプト集
        </Link>
        <nav className="flex gap-4 text-sm text-slate-700">
          <Link href="/prompts" className="hover:text-primary">
            プロンプト一覧
          </Link>
          <Link href="/categories" className="hover:text-primary">
            カテゴリ
          </Link>
          <Link href="/getting-started" className="hover:text-primary">
            はじめての方へ
          </Link>
        </nav>
      </div>
    </header>
  );
}
