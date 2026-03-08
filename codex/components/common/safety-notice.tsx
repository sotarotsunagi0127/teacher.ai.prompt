import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SafetyNotice() {
  const items = [
    "児童生徒の氏名、成績、健康情報、家庭情報などの個人情報をAIに入力しない",
    "AIの出力は必ず教員が確認・修正する",
    "通知表・所見・評価関連はAI任せにしない",
    "学校・自治体のガイドラインに従って利用する"
  ];

  return (
    <Card className="border-slate-300 bg-slate-50">
      <CardHeader>
        <CardTitle className="text-base">利用上の注意（必ず確認）</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-slate-700">
          {items.map((item) => (
            <li key={item} className="list-inside list-disc">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
