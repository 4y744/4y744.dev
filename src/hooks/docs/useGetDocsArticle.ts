import { ReactNode, useMemo } from "react";
import docs from "../../docs"

export const useGetDocsArticle = (topic: string, category: string, article: string) : ReactNode => {

  const element = useMemo(() => docs
  .find(top => top.id == topic)?.categories
  .find(cat => cat.id == category)?.articles
  .find(art => art.id == article)?.element,
  [topic, category, article]);

  return element;
}