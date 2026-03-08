export const SCHOOL_LEVELS = ["小学校", "中学校", "高校"] as const;
export const SUBJECTS = [
  "国語",
  "算数・数学",
  "理科",
  "社会",
  "英語",
  "総合",
  "その他"
] as const;
export const DIFFICULTIES = ["初級", "中級", "上級"] as const;
export const USE_CASES = [
  "授業準備",
  "単元計画",
  "ワークシート作成",
  "発問づくり",
  "テスト作成",
  "振り返り文の整理",
  "学級通信",
  "所見・通知表",
  "面談準備",
  "保護者向け文面",
  "校内文書作成",
  "学年だより",
  "行事案内",
  "学級経営",
  "生徒理解メモ整理"
] as const;

export type SchoolLevel = (typeof SCHOOL_LEVELS)[number];
export type Subject = (typeof SUBJECTS)[number];
export type Difficulty = (typeof DIFFICULTIES)[number];
export type UseCase = (typeof USE_CASES)[number];

export type PromptItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  schoolLevel: SchoolLevel[];
  subject: Subject[];
  useCase: UseCase;
  difficulty: Difficulty;
  tags: string[];
  scene: string;
  promptText: string;
  inputExample: string;
  outputExample: string;
  caution: string;
  tips: string;
  isPopular: boolean;
  createdAt: string;
};

export type PromptSort = "popular" | "newest" | "practical";

export type PromptFilters = {
  q?: string;
  schoolLevel?: SchoolLevel | "";
  useCase?: UseCase | "";
  subject?: Subject | "";
  difficulty?: Difficulty | "";
  sort?: PromptSort;
};
