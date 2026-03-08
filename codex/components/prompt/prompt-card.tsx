import Link from "next/link";

import type { PromptItem } from "@/types/prompt";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type PromptCardProps = {
  prompt: PromptItem;
};

export function PromptCard({ prompt }: PromptCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="space-y-3 pb-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="accent">{prompt.useCase}</Badge>
          <Badge variant="outline">{prompt.difficulty}</Badge>
          {prompt.isPopular ? <Badge>人気</Badge> : null}
        </div>
        <CardTitle className="text-lg leading-snug">{prompt.title}</CardTitle>
        <p className="text-sm text-slate-600">{prompt.description}</p>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <p className="mb-3 text-sm text-slate-600">校種: {prompt.schoolLevel.join(" / ")}</p>
        <div className="flex flex-wrap gap-2">
          {prompt.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/prompts/${prompt.slug}`}>詳細を見る</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
