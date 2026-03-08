"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

type CopyPromptButtonProps = {
  text: string;
};

export function CopyPromptButton({ text }: CopyPromptButtonProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    toast.success("プロンプトをコピーしました", {
      description: "AIツールに貼り付けて利用してください。"
    });
  };

  return (
    <Button size="lg" onClick={handleCopy} className="gap-2">
      <Copy className="h-4 w-4" />
      プロンプトをコピー
    </Button>
  );
}
