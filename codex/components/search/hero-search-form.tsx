import { Button } from "@/components/ui/button";

export function HeroSearchForm() {
  return (
    <form action="/prompts" className="mt-6 flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        name="q"
        className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none ring-primary focus:ring-2"
        placeholder="例: 通知表 所見 / 学級通信 / 授業導入"
      />
      <Button type="submit" size="lg">
        検索して探す
      </Button>
    </form>
  );
}
