import { getCollection, type CollectionEntry } from 'astro:content';
import { BASE, type Lang } from '../i18n/ui';

export type Article = CollectionEntry<'journal'>;

export function articleLang(entry: Article): Lang {
  return entry.id.split('/')[0] as Lang;
}

export function articleSlug(entry: Article): string {
  return entry.id.split('/').pop()!;
}

export function articleUrl(entry: Article): string {
  return `${BASE}/${articleLang(entry)}/journal/${articleSlug(entry)}/`;
}

export async function getArticles(lang: Lang): Promise<Article[]> {
  const all = await getCollection('journal', (e) => articleLang(e) === lang && !e.data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getTranslation(entry: Article, target: Lang): Promise<Article | undefined> {
  const list = await getArticles(target);
  return list.find((e) => e.data.translationKey === entry.data.translationKey);
}

export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
