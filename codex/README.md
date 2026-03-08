# 先生のためのAIプロンプト集（MVP）

日本の学校現場で働く教員向けに、授業準備・学級経営・評価文作成・校務効率化のためのプロンプトをカテゴリ別に探せるWebサイトです。

## 主な機能

- トップページ
  - ヒーロー
  - 検索バー
  - カテゴリ一覧
  - おすすめプロンプト3件
  - 人気/新着プロンプト
  - 安全配慮の注意表示
- プロンプト一覧
  - キーワード検索
  - フィルター（校種/用途/教科/難易度）
  - ソート（人気順/新着順/実務利用しやすい順）
  - 0件時の空状態UI
- プロンプト詳細
  - 本文・入力例・出力イメージ
  - コピーボタン（トースト通知付き）
  - 「このプロンプトを使う前に確認すること」の強調表示
  - 関連プロンプト
- カテゴリページ
  - 用途別/教科別導線
- はじめての方向けページ
  - 基本方針
  - 安全チェックリスト

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui（Button/Card/Badge/Input/Select/Toaster）
- sonner（トースト）

## ディレクトリ構成

```text
.
├── app
│   ├── categories/page.tsx
│   ├── getting-started/page.tsx
│   ├── prompts
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components
│   ├── common/safety-notice.tsx
│   ├── layout
│   │   ├── site-footer.tsx
│   │   └── site-header.tsx
│   ├── prompt
│   │   ├── copy-prompt-button.tsx
│   │   ├── prompt-card.tsx
│   │   └── prompt-list-client.tsx
│   ├── search/hero-search-form.tsx
│   └── ui
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── sonner.tsx
├── data/prompts.ts
├── lib
│   ├── prompts.ts
│   └── utils.ts
├── types/prompt.ts
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## ダミーデータ

- `data/prompts.ts` に16件実装
- 各データは以下を保持
  - `id`
  - `slug`
  - `title`
  - `description`
  - `schoolLevel`
  - `subject`
  - `useCase`
  - `difficulty`
  - `tags`
  - `promptText`
  - `inputExample`
  - `outputExample`
  - `caution`
  - `tips`
  - `isPopular`
  - `createdAt`

## ローカル起動手順

```bash
npm install
npm run dev
```

- ブラウザで `http://localhost:3000` を開いて確認

## Vercelデプロイ

### ダッシュボードから
1. GitHubへpush
2. VercelでプロジェクトをImport
3. Root Directoryを`codex`に設定
4. Framework Presetを`Next.js`のままDeploy

### GitHub Actionsから
- `.github/workflows/vercel-deploy.yml` を利用
- GitHub Secretsに以下を設定
  - `VERCEL_TOKEN`
  - `VERCEL_ORG_ID`
  - `VERCEL_PROJECT_ID`
- `main`へのpushで本番デプロイ

## SEO対応

- `app/layout.tsx` で `title` / `description` / OGP設定
- 各主要ページで `metadata` を設定
- 日本語見出し構造を整理

## 安全配慮（サイト内明示）

- 個人情報をAIへ入力しない
- AI出力は必ず教員が確認・修正
- 通知表・所見・評価はAI任せにしない
- 学校/自治体ガイドラインに従う

## 今後の拡張案

1. CMS連携（MicroCMS/Contentful/Notion API）
2. お気に入り保存・閲覧履歴
3. 学校内共有向けの投稿ワークフロー
4. 管理者レビュー機能（公開前承認）
5. RAG連携（校内規程・指導要録様式を参照）
6. 利用ログ分析と人気プロンプト自動更新
7. SSO（Google Workspace / Microsoft Entra ID）
