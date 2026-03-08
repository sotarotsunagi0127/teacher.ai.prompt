import { prompts } from "@/data/prompts";
import type { PromptFilters, PromptItem, PromptSort } from "@/types/prompt";

function practicalScore(prompt: PromptItem) {
  const diffWeight = prompt.difficulty === "初級" ? 3 : prompt.difficulty === "中級" ? 2 : 1;
  const popWeight = prompt.isPopular ? 2 : 0;
  const recencyWeight = new Date(prompt.createdAt).getTime() / 1000000000000;
  return diffWeight + popWeight + recencyWeight;
}

function sortPrompts(list: PromptItem[], sort: PromptSort) {
  if (sort === "popular") {
    return [...list].sort((a, b) => Number(b.isPopular) - Number(a.isPopular));
  }

  if (sort === "practical") {
    return [...list].sort((a, b) => practicalScore(b) - practicalScore(a));
  }

  return [...list].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getAllPrompts() {
  return sortPrompts(prompts, "newest");
}

export function getPromptBySlug(slug: string) {
  return prompts.find((prompt) => prompt.slug === slug);
}

export function getRelatedPrompts(prompt: PromptItem, limit = 3) {
  return prompts
    .filter((p) => p.id !== prompt.id)
    .sort((a, b) => {
      const aScore = Number(a.useCase === prompt.useCase) + a.tags.filter((t) => prompt.tags.includes(t)).length;
      const bScore = Number(b.useCase === prompt.useCase) + b.tags.filter((t) => prompt.tags.includes(t)).length;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function getRecommendedPrompts(limit = 3) {
  return sortPrompts(
    prompts.filter((prompt) => prompt.isPopular),
    "practical"
  ).slice(0, limit);
}

export function getPopularPrompts(limit = 6) {
  return sortPrompts(
    prompts.filter((prompt) => prompt.isPopular),
    "newest"
  ).slice(0, limit);
}

export function filterPrompts(filters: PromptFilters) {
  const q = filters.q?.trim().toLowerCase();

  const list = prompts.filter((prompt) => {
    const matchesQuery =
      !q ||
      prompt.title.toLowerCase().includes(q) ||
      prompt.description.toLowerCase().includes(q) ||
      prompt.tags.some((tag) => tag.toLowerCase().includes(q));

    const matchesSchool = !filters.schoolLevel || prompt.schoolLevel.includes(filters.schoolLevel);
    const matchesUseCase = !filters.useCase || prompt.useCase === filters.useCase;
    const matchesSubject = !filters.subject || prompt.subject.includes(filters.subject);
    const matchesDifficulty = !filters.difficulty || prompt.difficulty === filters.difficulty;

    return matchesQuery && matchesSchool && matchesUseCase && matchesSubject && matchesDifficulty;
  });

  return sortPrompts(list, filters.sort ?? "newest");
}
