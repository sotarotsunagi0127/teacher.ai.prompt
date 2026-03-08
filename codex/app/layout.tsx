import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AppToaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "先生のためのAIプロンプト集 | 授業準備・学級経営・校務効率化",
  description:
    "教員向けの実務プロンプトをカテゴリ別に整理。授業準備、学級通信、通知表所見、保護者対応、校務文書まで、すぐ使えるAIプロンプトを提供。",
  openGraph: {
    title: "先生のためのAIプロンプト集",
    description: "授業・学級経営・校務で使える、すぐ使える生成AIプロンプトを整理",
    type: "website",
    locale: "ja_JP"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <AppToaster />
      </body>
    </html>
  );
}
