import Link from "next/link";
import { Article } from "@/lib/articles";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {article.premium && (
            <span className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
              PREMIUM
            </span>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-gray-400">{article.date}</span>
          </div>
          <h2 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
          <div className="mt-3 text-xs text-gray-400">By {article.author}</div>
        </div>
      </article>
    </Link>
  );
}
