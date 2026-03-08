# 先生のためのAIプロンプト集

教員向けに、授業準備・学級経営・評価文作成・校務効率化で使えるプロンプトをカテゴリ別に探せるMVPです。

## 技術スタック
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## 主なページ
- `/` トップページ
- `/prompts` プロンプト一覧
- `/prompts/[slug]` プロンプト詳細
- `/categories` カテゴリ一覧
- `/getting-started` はじめての方向け

## ローカル起動
```bash
npm install
npm run dev
```

## デプロイ（Vercel）
### 1. Vercel ダッシュボードからデプロイ
1. GitHub リポジトリを Vercel に Import
2. Root Directory を `codex` に設定
3. Framework Preset は `Next.js` のまま Deploy

### 2. GitHub Actions で自動デプロイ
このリポジトリには `.github/workflows/vercel-deploy.yml` を追加済みです。
以下の Secrets を GitHub に登録してください。

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

`main` ブランチへ push すると `codex` 配下の変更を自動で本番デプロイします。

## 補足
実装詳細は `codex/README.md` を参照してください。
